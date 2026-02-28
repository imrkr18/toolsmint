// config/converters.ts

export type Unit = {
    id: string;
    name: string;
    symbol: string;
    ratio: number; // Ratio compared to the base unit in this category
    baseOffset?: number; // E.g., for Celsius to Kelvin translation
};

export type ConverterCategory = {
    id: string;
    name: string;
    baseUnit: string;
    icon: string;
    units: Unit[];
};

// We will use these arrays heavily for generating combinations
export const SITEMAP_VALUES = [
    1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 40, 50, 100, 200, 250, 500, 1000
];

export const CONVERTERS: Record<string, ConverterCategory> = {
    weight: {
        id: "weight",
        name: "Weight & Mass",
        baseUnit: "g",
        icon: "⚖️",
        units: [
            { id: "g", name: "Gram", symbol: "g", ratio: 1 },
            { id: "kg", name: "Kilogram", symbol: "kg", ratio: 1000 },
            { id: "mg", name: "Milligram", symbol: "mg", ratio: 0.001 },
            { id: "t", name: "Metric Ton", symbol: "t", ratio: 1000000 },
            { id: "lb", name: "Pound", symbol: "lb", ratio: 453.59237 },
            { id: "oz", name: "Ounce", symbol: "oz", ratio: 28.349523125 },
        ]
    },
    length: {
        id: "length",
        name: "Length & Distance",
        baseUnit: "m",
        icon: "📏",
        units: [
            { id: "m", name: "Meter", symbol: "m", ratio: 1 },
            { id: "km", name: "Kilometer", symbol: "km", ratio: 1000 },
            { id: "cm", name: "Centimeter", symbol: "cm", ratio: 0.01 },
            { id: "mm", name: "Millimeter", symbol: "mm", ratio: 0.001 },
            { id: "mi", name: "Mile", symbol: "mi", ratio: 1609.344 },
            { id: "yd", name: "Yard", symbol: "yd", ratio: 0.9144 },
            { id: "ft", name: "Foot", symbol: "ft", ratio: 0.3048 },
            { id: "in", name: "Inch", symbol: "in", ratio: 0.0254 },
        ]
    },
    temperature: {
        id: "temperature",
        name: "Temperature",
        baseUnit: "k",
        icon: "🌡️",
        units: [
            // Temperature is special since it needs baseOffset (C to K, F to K)
            { id: "c", name: "Celsius", symbol: "°C", ratio: 1, baseOffset: 273.15 },
            { id: "f", name: "Fahrenheit", symbol: "°F", ratio: 5 / 9, baseOffset: 255.372222 }, // K = (F - 32) * 5/9 + 273.15 -> offset is 273.15 - (32 * 5/9) = 255.372222
            { id: "k", name: "Kelvin", symbol: "K", ratio: 1, baseOffset: 0 },
        ]
    }
    // We will start with these 3 key categories, they already generate ~ 3 * 10 * 10 * (values length) = hundreds of pages.
};

// Helper function to perform conversions
export function convertUnit(value: number, fromUnitId: string, toUnitId: string, categoryId: string): number | null {
    const category = CONVERTERS[categoryId];
    if (!category) return null;

    const fromUnit = category.units.find(u => u.id === fromUnitId);
    const toUnit = category.units.find(u => u.id === toUnitId);

    if (!fromUnit || !toUnit) return null;

    let baseValue = value;

    // special handling for temperature
    if (categoryId === 'temperature') {
        // Convert to base (Kelvin)
        if (fromUnitId === 'c') baseValue = value + 273.15;
        else if (fromUnitId === 'f') baseValue = (value - 32) * 5 / 9 + 273.15;
        else baseValue = value; // K

        // Convert from base to target
        if (toUnitId === 'c') return baseValue - 273.15;
        if (toUnitId === 'f') return (baseValue - 273.15) * 9 / 5 + 32;
        return baseValue; // K
    }

    // Convert to base unit: multiply by fromUnit's ratio
    baseValue = value * fromUnit.ratio;

    // Convert from base to target unit: divide by toUnit's ratio
    return baseValue / toUnit.ratio;
}
