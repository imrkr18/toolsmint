"use client";

import { useState, useEffect } from "react";
import { ConverterCategory, convertUnit } from "@/config/converters";
import { ArrowRightLeft, Copy, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ConverterClient({
    category,
    initialFromUnit,
    initialToUnit,
    initialValue
}: {
    category: ConverterCategory;
    initialFromUnit: string;
    initialToUnit: string;
    initialValue: number;
}) {
    const router = useRouter();
    const [fromValue, setFromValue] = useState<string>(initialValue.toString());
    const [fromUnit, setFromUnit] = useState(initialFromUnit);
    const [toValue, setToValue] = useState<string>("");
    const [toUnit, setToUnit] = useState(initialToUnit);
    const [copied, setCopied] = useState(false);

    // Initial calculation on mount or prop change
    useEffect(() => {
        calculateConversion(initialValue.toString(), initialFromUnit, initialToUnit, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialFromUnit, initialToUnit, initialValue]);

    const calculateConversion = (valStr: string, fromU: string, toU: string, isInitial = false) => {
        const val = parseFloat(valStr);
        if (isNaN(val)) {
            setToValue("");
            return;
        }

        const result = convertUnit(val, fromU, toU, category.id);
        
        if (result !== null) {
            // Format to reasonable decimal places, dropping trailing zeros
            let formattedStr = result.toFixed(6).replace(/\.?0+$/, "");
            if (formattedStr === "") formattedStr = "0";
            setToValue(formattedStr);
        } else {
            setToValue("");
        }

        // Programmatically push to the specific value route so URL matches the state
        // This is key for letting users share exact conversions
        if (!isInitial && valStr !== "") {
            const newSlug = `/tools/converter/${category.id}/${valStr}-${fromU}-to-${toU}`;
            router.replace(newSlug, { scroll: false });
        }
    };

    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setFromValue(val);
        calculateConversion(val, fromUnit, toUnit);
    };

    const handleFromUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setFromUnit(val);
        calculateConversion(fromValue, val, toUnit);
    };

    const handleToUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setToUnit(val);
        calculateConversion(fromValue, fromUnit, val);
    };

    const swapUnits = () => {
        const newFromUnit = toUnit;
        const newToUnit = fromUnit;
        setFromUnit(newFromUnit);
        setToUnit(newToUnit);
        
        // When swapping, the 'toValue' becomes the new 'fromValue'
        const newVal = toValue;
        setFromValue(newVal);
        calculateConversion(newVal, newFromUnit, newToUnit);
    };

    const copyResult = () => {
        if (!toValue) return;
        const text = `${fromValue} ${category.units.find(u => u.id === fromUnit)?.symbol} = ${toValue} ${category.units.find(u => u.id === toUnit)?.symbol}`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div aria-live="polite">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* From Group */}
                <div className="form-group mb-0">
                    <label>From</label>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <input
                            type="number"
                            value={fromValue}
                            onChange={handleFromChange}
                            placeholder="0"
                            style={{ flex: 1 }}
                            suppressHydrationWarning
                        />
                        <select
                            value={fromUnit}
                            onChange={handleFromUnitChange}
                            style={{ width: '150px' }}
                            suppressHydrationWarning
                        >
                            {category.units.map(u => (
                                <option key={u.id} value={u.id}>{u.name} ({u.symbol})</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Centered Swap Button */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '-8px 0' }}>
                    <button
                        className="btn-icon"
                        onClick={swapUnits}
                        aria-label="Swap units"
                        title="Swap units"
                        style={{ 
                            background: 'var(--bg-elevated)', 
                            border: '1px solid var(--border)',
                            color: 'var(--text-primary)',
                            fontSize: '1.25rem',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                        }}
                        suppressHydrationWarning
                    >
                        ⇅
                    </button>
                </div>

                {/* To Group */}
                <div className="form-group mb-0">
                    <label>To</label>
                    <select
                        value={toUnit}
                        onChange={handleToUnitChange}
                        className="w-full"
                        style={{ height: '48px' }}
                        suppressHydrationWarning
                    >
                        {category.units.map(u => (
                            <option key={u.id} value={u.id}>{u.name} ({u.symbol})</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Premium Result Card */}
            <div className="result-card mt-8">
                <div className="result-card-value">
                    {toValue || "0"}
                </div>
                <div className="result-card-label">
                    {category.units.find(u => u.id === toUnit)?.name} ({category.units.find(u => u.id === toUnit)?.symbol})
                </div>
                
                <div className="mt-6">
                    <button 
                        className={`btn btn-secondary btn-sm ${copied ? 'success' : ''}`}
                        onClick={copyResult}
                    >
                        {copied ? '✓' : '📋'} {copied ? "Copied!" : "Copy Result"}
                    </button>
                </div>
            </div>
        </div>
    );
}
