/**
 * ╔══════════════════════════════════════╗
 * ║   SITE CONFIG — EDIT HERE ONLY       ║
 * ║   Change name once → updates site    ║
 * ╚══════════════════════════════════════╝
 */
export const SITE_CONFIG = {
    name: "ToolsMint",
    tagline: "Fresh Tools for Every Task",
    description: "Free, fast, and beautifully designed online tools for everyday tasks — word counters, calculators, generators, converters and more. No signup needed.",
    url: "https://toolsmint.com",
    twitter: "@toolsmint",
    locale: "en_US",
    year: new Date().getFullYear(),
} as const;

export type Tool = {
    id: string;
    name: string;
    slug: string;
    description: string;
    longDesc: string;
    icon: string;
    category: ToolCategory;
    keywords: string[];
};

export type ToolCategory = "Text" | "Calculator" | "Security" | "Generator" | "Health" | "Developer" | "Converter";

export const TOOL_CATEGORIES: ToolCategory[] = [
    "Text", "Calculator", "Security", "Generator", "Health", "Developer", "Converter"
];

export const TOOLS: Tool[] = [
    {
        id: "word-counter",
        name: "Word Counter",
        slug: "word-counter",
        description: "Count words, characters, sentences and estimate reading time instantly.",
        longDesc: "Paste or type any text to get an instant breakdown of word count, character count (with and without spaces), sentence count, paragraph count, and estimated reading time. Perfect for writers, students, bloggers, and SEO professionals.",
        icon: "📝",
        category: "Text",
        keywords: ["word counter", "character counter", "word count tool", "count words online", "text analyzer", "reading time calculator"],
    },
    {
        id: "case-converter",
        name: "Case Converter",
        slug: "case-converter",
        description: "Convert text to UPPERCASE, lowercase, Title Case or Sentence case.",
        longDesc: "Instantly transform your text between different letter cases. Convert to UPPERCASE, lowercase, Title Case, Sentence case, or camelCase with a single click. Ideal for developers, content writers, and anyone working with text formatting.",
        icon: "🔡",
        category: "Text",
        keywords: ["case converter", "uppercase converter", "lowercase converter", "title case converter", "text case changer", "sentence case"],
    },
    {
        id: "password-generator",
        name: "Password Generator",
        slug: "password-generator",
        description: "Generate strong, secure, random passwords with custom settings.",
        longDesc: "Create cryptographically strong passwords with full control over length, uppercase, lowercase, numbers, and special characters. Instantly copy your secure password. All generation happens in your browser — nothing is sent to any server.",
        icon: "🔐",
        category: "Security",
        keywords: ["password generator", "strong password generator", "random password", "secure password", "free password generator", "online password maker"],
    },
    {
        id: "qr-generator",
        name: "QR Code Generator",
        slug: "qr-generator",
        description: "Create QR codes instantly for any URL, text or contact info.",
        longDesc: "Generate high-quality QR codes for any URL, plain text, email address, phone number, or any other data. Download your QR code as a PNG image ready for print or digital use. Free and instant — no account required.",
        icon: "📱",
        category: "Generator",
        keywords: ["QR code generator", "free QR code", "create QR code", "QR code maker", "online QR generator", "custom QR code"],
    },
    {
        id: "age-calculator",
        name: "Age Calculator",
        slug: "age-calculator",
        description: "Calculate your exact age in years, months, days, hours and minutes.",
        longDesc: "Find out your exact age down to the minute. Enter your date of birth and get a detailed breakdown of your age in years, months, weeks, days, hours, and minutes. You can also calculate the age between any two dates.",
        icon: "🎂",
        category: "Calculator",
        keywords: ["age calculator", "how old am I", "birthday calculator", "age in days", "calculate age from date of birth", "online age calculator"],
    },
    {
        id: "bmi-calculator",
        name: "BMI Calculator",
        slug: "bmi-calculator",
        description: "Calculate your Body Mass Index and check your health category.",
        longDesc: "Calculate your Body Mass Index (BMI) using metric (kg/cm) or imperial (lbs/ft) units. Instantly see your BMI score and what health category you fall into: Underweight, Normal, Overweight, or Obese. Includes a visual scale for easy interpretation.",
        icon: "⚖️",
        category: "Health",
        keywords: ["BMI calculator", "body mass index", "BMI checker", "healthy weight calculator", "online BMI tool", "calculate BMI free"],
    },
    {
        id: "percentage-calculator",
        name: "Percentage Calculator",
        slug: "percentage-calculator",
        description: "Calculate percentages, percentage change, and what percent of a number.",
        longDesc: "Three powerful percentage calculators in one: find what percentage X is of Y, calculate X% of a number, and find the percentage increase or decrease between two values. Perfect for students, business owners, and everyday math.",
        icon: "💯",
        category: "Calculator",
        keywords: ["percentage calculator", "percent calculator", "calculate percentage", "percentage change calculator", "percentage of a number", "online percentage tool"],
    },
    {
        id: "json-formatter",
        name: "JSON Formatter",
        slug: "json-formatter",
        description: "Format, validate and beautify JSON data with syntax highlighting.",
        longDesc: "Paste raw, minified, or broken JSON and instantly beautify it with proper indentation and syntax highlighting. Validates your JSON and shows clear error messages for invalid data. Also supports minification. Essential for developers and API testing.",
        icon: "🧩",
        category: "Developer",
        keywords: ["JSON formatter", "JSON validator", "JSON beautifier", "format JSON online", "JSON minifier", "JSON pretty print"],
    },
    {
        id: "weight-converter",
        name: "Weight Converter",
        slug: "converter/weight",
        description: "Convert instantly between Kilograms, Pounds, Ounces, Grams and more.",
        longDesc: "A powerful unit converter for all weight and mass measurements. Instantly convert Kilograms (kg) to Pounds (lbs), Grams to Ounces, Metric Tons to pounds, and more with exact precision.",
        icon: "⚖️",
        category: "Converter",
        keywords: ["weight converter", "kg to lbs", "lbs to kg", "grams to ounces", "mass converter", "kilograms to pounds"],
    },
    {
        id: "length-converter",
        name: "Length Converter",
        slug: "converter/length",
        description: "Convert distance and length between Meters, Feet, Inches, Miles and more.",
        longDesc: "Accurately convert length and distance measurements. Easily translate Meters to Feet, Kilometers to Miles, Centimeters to Inches, and Yards with instant real-time calculation.",
        icon: "📏",
        category: "Converter",
        keywords: ["length converter", "meters to feet", "km to miles", "cm to inches", "distance converter", "inches to cm"],
    },
    {
        id: "temperature-converter",
        name: "Temperature Converter",
        slug: "converter/temperature",
        description: "Convert accurately between Celsius, Fahrenheit, and Kelvin.",
        longDesc: "Instantly convert temperatures between Celsius (°C), Fahrenheit (°F), and Kelvin (K). Essential for science, weather, cooking, and international travel calculations.",
        icon: "🌡️",
        category: "Converter",
        keywords: ["temperature converter", "celsius to fahrenheit", "fahrenheit to celsius", "c to f calculator", "kelvin converter", "convert temperature"],
    }
];
