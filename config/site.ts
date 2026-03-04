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
    seoBlocks: { h2: string; content: string }[];
    faqs: { question: string; answer: string }[];
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
        keywords: ["word counter", "character counter", "word count tool", "count words online", "text analyzer", "reading time calculator", "essay word count checker"],
        seoBlocks: [
            {
                h2: "What is the Word Counter Tool?",
                content: "Our free online word counter analyzes your text in real-time, providing an accurate count of words, characters (with and without spaces), sentences, and paragraphs. Whether you are writing an essay with a strict word limit, crafting a tweet, or optimizing a blog post for SEO, this tool ensures you hit your exact target length."
            },
            {
                h2: "Who should use this word and character counter?",
                content: "This tool is essential for students facing assignment length requirements, copywriters managing ad copy limits (like Google Ads or Facebook ads), SEO professionals optimizing title tags and meta descriptions, and authors tracking daily writing goals. It instantly calculates estimated reading time, making it invaluable for speechwriters and medium article creators."
            },
            {
                h2: "Why is tracking text metrics important?",
                content: "Every platform has different text limits. Exceeding these limits can ruin your formatting or cause your text to be truncated. Instead of manually counting or relying on heavy word processors, our web-based counter gives you instantaneous, accurate metrics right in your browser without saving any of your private text."
            }
        ],
        faqs: [
            {
                question: "Does this tool save or store my text?",
                answer: "No. All counting happens locally in your browser. Your text is never uploaded to any server or saved in any database, ensuring your essays, articles, and private documents remain 100% confidential."
            },
            {
                question: "How do you count characters with and without spaces?",
                answer: "We provide two separate metrics. 'Characters with spaces' counts every single keystroke, which is crucial for social media limits (like X/Twitter's 280 limit). 'Characters without spaces' ignores whitespace, which is often requested for academic translations and specific coding constraints."
            },
            {
                question: "Why does my word count here differ slightly from Microsoft Word?",
                answer: "Different processors handle hyphenated words, URLs, and special symbols differently. Our tool uses a standard algorithm that counts distinct blocks of letters and numbers separated by spaces, which is the most widely accepted method for web publishing and SEO."
            }
        ]
    },
    {
        id: "case-converter",
        name: "Case Converter",
        slug: "case-converter",
        description: "Convert text to UPPERCASE, lowercase, Title Case or Sentence case.",
        longDesc: "Instantly transform your text between different letter cases. Convert to UPPERCASE, lowercase, Title Case, Sentence case, or camelCase with a single click. Ideal for developers, content writers, and anyone working with text formatting.",
        icon: "🔡",
        category: "Text",
        keywords: ["case converter", "uppercase converter", "lowercase converter", "title case converter", "text case changer", "sentence case", "capitalize online"],
        seoBlocks: [
            {
                h2: "What is the Case Converter Tool?",
                content: "The Case Converter is a free online utility that instantly transforms blocks of text into any letter case you need. With a single click, you can fix accidental CAPSLOCK text by converting it to lowercase, format headlines properly with Title Case, or format standard paragraphs using Sentence case."
            },
            {
                h2: "Who should use this text format changer?",
                content: "Content creators formatting blog titles, developers converting text to camelCase or snake_case for coding, and data entry professionals cleaning up inconsistent text data will save hours. It’s the perfect fix for when you've accidentally typed a whole document with caps lock on and don't want to retype everything."
            },
            {
                h2: "Why use an online capitalize tool?",
                content: "Manual retyping is prone to errors and wastes valuable time. While some word processors have basic case changing features, they are often buried in menus and lack options like Alternating Case or camelCase. Our browser-based tool is fast, free, and accessible from any device."
            }
        ],
        faqs: [
            {
                question: "Will this fix text written accidentally in all caps?",
                answer: "Yes! If you left caps lock on by mistake, simply paste the UPPERCASE text here and click 'Sentence case' or 'lowercase' to instantly fix it without having to retype a single word."
            },
            {
                question: "What is the difference between Title Case and Sentence case?",
                answer: "Sentence case capitalizes only the first letter of the first word in a sentence (like this). Title Case capitalizes the first letter of every major word (Like This Example), which is the standard format for blog post headlines, book titles, and email subject lines."
            },
            {
                question: "Is there a limit to how much text I can convert?",
                answer: "There are no strict limits. You can paste thousands of words or massive documents into the converter, and the case transformation will happen instantly in your browser without lagging."
            }
        ]
    },
    {
        id: "password-generator",
        name: "Password Generator",
        slug: "password-generator",
        description: "Generate strong, secure, random passwords with custom settings.",
        longDesc: "Create cryptographically strong passwords with full control over length, uppercase, lowercase, numbers, and special characters. Instantly copy your secure password. All generation happens in your browser — nothing is sent to any server.",
        icon: "🔐",
        category: "Security",
        keywords: ["password generator", "strong password generator", "random password", "secure password", "free password generator", "online password maker", "unhackable password generator"],
        seoBlocks: [
            {
                h2: "What is the Random Password Generator?",
                content: "Our free secure password generator creates highly complex, unguessable character strings to protect your digital accounts. By blending uppercase letters, lowercase letters, numbers, and unique symbols at your specified length, it outputs cryptographic-grade passwords that resist brute-force hacking attempts."
            },
            {
                h2: "Why do I need a strong password maker?",
                content: "Using the same simple password (like 'Password123') across multiple sites is the #1 reason accounts get compromised. Hackers use automated dictionaries that guess millions of passwords per second. By generating unique, randomly structured passwords for every account, you stop credential stuffing and unauthorized access cold."
            },
            {
                h2: "How do I create a secure password?",
                content: "A truly secure password should be at least 12-16 characters long and completely random. Use our toggles to include symbols (!@#$%), numbers (0-9), and mixed-case letters. Avoid using personal information, dictionary words, or sequential numbers. Once generated, store it safely in a password manager."
            }
        ],
        faqs: [
            {
                question: "Is this password generator safe to use?",
                answer: "Absolutely. We use your browser's local cryptography engine (Crypto API) to generate the passwords on your personal device. The generated password is never transmitted across the internet, sent to our servers, or saved in any logs."
            },
            {
                question: "What makes a password 'strong' or 'secure'?",
                answer: "A strong password relies on length and entropy (randomness). A 16-character password mixing letters, numbers, and symbols takes centuries for current supercomputers to crack. We recommend avoiding any recognizable words or personal dates."
            },
            {
                question: "Why shouldn't I just create my own password?",
                answer: "Humans are naturally predictable and tend to create patterns (like capitalizing the first letter and putting a '1' at the end). Automated hacking tools easily guess these human patterns. A machine-generated random password has zero predictable patterns."
            }
        ]
    },
    {
        id: "qr-generator",
        name: "QR Code Generator",
        slug: "qr-generator",
        description: "Create QR codes instantly for any URL, text or contact info.",
        longDesc: "Generate high-quality QR codes for any URL, plain text, email address, phone number, or any other data. Download your QR code as a PNG image ready for print or digital use. Free and instant — no account required.",
        icon: "📱",
        category: "Generator",
        keywords: ["QR code generator", "free QR code", "create QR code", "QR code maker", "online QR generator", "custom QR code", "dynamic QR code alternative"],
        seoBlocks: [
            {
                h2: "What is the Free QR Code Generator?",
                content: "Our online QR code creator allows you to instantly convert URLs, text, Wi-Fi credentials, or contact information into a scannable barcode matrix (QR code). With a single click, your data is encoded into a high-resolution PNG image that can be downloaded securely for marketing materials, menus, or business cards."
            },
            {
                h2: "Who should use this QR code maker?",
                content: "Restaurant owners replacing physical menus, event planners sharing rapid check-in links, marketers driving offline traffic to online landing pages, and individuals sharing Wi-Fi passwords quickly. It bridges the physical and digital world instantly for smartphone users."
            },
            {
                h2: "Why use our static QR generator?",
                content: "Many services charge expensive monthly fees for QR codes or unexpectedly deactivate them, holding your links hostage. Our tool creates permanent, static QR codes that never expire, never require a login, and are completely free to use for both personal and commercial purposes."
            }
        ],
        faqs: [
            {
                question: "Do these QR codes ever expire?",
                answer: "No. The QR codes generated here are 'static', meaning the actual link or text is hard-coded directly into the barcode pattern. Because they don't rely on redirect servers, they will remain scannable forever."
            },
            {
                question: "Are there any scan limits on the codes I create?",
                answer: "Zero limits. Since the QR codes are static and point directly to your destination without passing through our servers, you can scan them infinitely. They are perfect for mass-printed marketing materials."
            },
            {
                question: "Can I edit the destination URL after generating the QR code?",
                answer: "No, because static QR codes encode the data directly into the image pattern. If you need to change the destination link later, you will need to generate a completely new QR code image."
            }
        ]
    },
    {
        id: "age-calculator",
        name: "Age Calculator",
        slug: "age-calculator",
        description: "Calculate your exact age in years, months, days, hours and minutes.",
        longDesc: "Find out your exact age down to the minute. Enter your date of birth and get a detailed breakdown of your age in years, months, weeks, days, hours, and minutes. You can also calculate the age between any two dates.",
        icon: "🎂",
        category: "Calculator",
        keywords: ["age calculator", "how old am I", "birthday calculator", "age in days", "calculate age from date of birth", "online age calculator", "date duration calculator"],
        seoBlocks: [
            {
                h2: "What is the Age Calculator?",
                content: "The free online Age Calculator is a precision tool that determines your exact chronological age or the time span between two distinct dates. By inputting your date of birth, it instantly processes leap years and varying month lengths to output your exact age in years, months, weeks, days, and even minutes."
            },
            {
                h2: "Who uses a date of birth calculator?",
                content: "This tool is heavily used by HR professionals verifying age requirements, parents calculating their infant's age in exact months or weeks (e.g., '18 months old'), genealogists tracking life spans, and individuals curious about their exact time spent on Earth leading up to a milestone birthday."
            },
            {
                h2: "Why is calculating age manually difficult?",
                content: "Figuring out the exact number of days between two dates is mathematically complex due to leap years (adding a day in February every 4 years) and irregular month lengths. Our algorithm factors in these calendar quirks instantly to guarantee 100% mathematical accuracy."
            }
        ],
        faqs: [
            {
                question: "Does the calculator account for leap years?",
                answer: "Yes. The algorithm handles the complete Gregorian calendar rules, automatically adding an extra day for any February 29th that occurs during the lifespan being calculated, ensuring perfect accuracy to the day."
            },
            {
                question: "Can I use this to find the difference between ANY two dates?",
                answer: "Absolutely. While it defaults to comparing your birth date against today's current date, you can easily change the 'End Date' to a future or past date to calculate exact project durations, contract lengths, or historical timelines."
            },
            {
                question: "Is my birth date privacy protected?",
                answer: "Yes. The calendar calculation happens entirely localized within your web browser. Your birth date is not transmitted over the internet, stored in cookies, or collected by our servers in any way."
            }
        ]
    },
    {
        id: "bmi-calculator",
        name: "BMI Calculator",
        slug: "bmi-calculator",
        description: "Calculate your Body Mass Index and check your health category.",
        longDesc: "Calculate your Body Mass Index (BMI) using metric (kg/cm) or imperial (lbs/ft) units. Instantly see your BMI score and what health category you fall into: Underweight, Normal, Overweight, or Obese. Includes a visual scale for easy interpretation.",
        icon: "⚖️",
        category: "Health",
        keywords: ["BMI calculator", "body mass index", "BMI checker", "healthy weight calculator", "online BMI tool", "calculate BMI free", "metric BMI calculator"],
        seoBlocks: [
            {
                h2: "What is the Body Mass Index (BMI) Calculator?",
                content: "The free online BMI Calculator is a screening tool that evaluates your body weight relative to your height. By crunching your input (in metric or imperial), it provides a standard numerical BMI score indicating whether you fall into the underweight, healthy weight, overweight, or obese categories as defined by the World Health Organization."
            },
            {
                h2: "Why is tracking my BMI important?",
                content: "BMI is widely used by doctors and health professionals as a vital first-step screening for potential weight-related health issues. Maintaining a 'Healthy Weight' BMI generally correlates with a lower risk of chronic conditions like heart disease, high blood pressure, and type 2 diabetes. It's a quick, non-invasive health check."
            },
            {
                h2: "Who should not use a standard BMI score?",
                content: "While BMI is a great general indicator, it has limitations. It does not distinguish between muscle mass and fat mass. Therefore, highly muscular athletes, bodybuilders, pregnant women, and the elderly may receive a misleading BMI classification. Always consult a healthcare provider for a thorough body composition analysis."
            }
        ],
        faqs: [
            {
                question: "What is considered a healthy BMI score?",
                answer: "According to the WHO guidelines, a normal or healthy weight BMI falls exactly between 18.5 and 24.9. A score below 18.5 is considered underweight, 25.0 to 29.9 is overweight, and 30.0 or higher is defined as obese."
            },
            {
                question: "Can I input my height and weight in Imperial (lbs/ft) instead of Metric?",
                answer: "Yes, our calculator fully supports both measurement systems. You can easily toggle between entering your metrics in pounds/feet/inches (Imperial) or kilograms/centimeters (Metric), and the mathematical formula adjusts accordingly."
            },
            {
                question: "Does BMI measure body fat percentage?",
                answer: "No, BMI does not directly measure body fat. It only measures excess weight based on an individual's height. If you need exact fat percentages, you require specialized tools like DEXA scans or skinfold calipers."
            }
        ]
    },
    {
        id: "percentage-calculator",
        name: "Percentage Calculator",
        slug: "percentage-calculator",
        description: "Calculate percentages, percentage change, and what percent of a number.",
        longDesc: "Three powerful percentage calculators in one: find what percentage X is of Y, calculate X% of a number, and find the percentage increase or decrease between two values. Perfect for students, business owners, and everyday math.",
        icon: "💯",
        category: "Calculator",
        keywords: ["percentage calculator", "percent calculator", "calculate percentage", "percentage change calculator", "percentage of a number", "online percentage tool", "discount calculator"],
        seoBlocks: [
            {
                h2: "What is the Percentage Calculator?",
                content: "Our free Percentage Calculator is a versatile math tool designed to solve common percentage problems instantly. Whether you need to find out what 15% of $85 is, determine the percentage increase in your rent, or figure out what percent a test score represents, this tool handles the complex cross-multiplication for you."
            },
            {
                h2: "Who benefits from an online percent calculator?",
                content: "Retail shoppers figuring out sale discounts, business owners calculating profit margins or sales tax, stock traders calculating portfolio percentage growth, and students checking their math homework rely heavily on this tool to prevent costly arithmetic errors."
            },
            {
                h2: "Why is calculating percentage change confusing?",
                content: "Figuring out percentage increase or decrease manually confuses many people because the formula ((New - Old) / Old) x 100 isn't intuitive to remember in daily life. Our tool provides a dedicated 'Percentage Change' module, giving you the exact percentage jump or drop instantly without worrying about the underlying formula."
            }
        ],
        faqs: [
            {
                question: "How do you calculate a percentage increase?",
                answer: "To calculate percentage increase manually: Subtract the original number from the new number, divide that difference by the original number, and then multiply by 100. Or, just plug the 'Old' and 'New' values into our tool for an exact instant read-out."
            },
            {
                question: "Can I use this for calculating store discounts or sales tax?",
                answer: "Yes! If a jacket is $120 and has a 20% discount, enter 'What is 20% of 120' to find the discount amount ($24). Subtract that, and you know the final price. The tool handles fractional and decimal percentages perfectly."
            },
            {
                question: "What does '% of' actually mean in math?",
                answer: "Percentage basically means 'per 100'. So, asking for 15% of 200 is asking 'If I take 15 units out of every 100 units, how many do I have total?' The calculator converts the percentage to a decimal (0.15) and multiplies it against your number."
            }
        ]
    },
    {
        id: "json-formatter",
        name: "JSON Formatter",
        slug: "json-formatter",
        description: "Format, validate and beautify JSON data with syntax highlighting.",
        longDesc: "Paste raw, minified, or broken JSON and instantly beautify it with proper indentation and syntax highlighting. Validates your JSON and shows clear error messages for invalid data. Also supports minification. Essential for developers and API testing.",
        icon: "🧩",
        category: "Developer",
        keywords: ["JSON formatter", "JSON validator", "JSON beautifier", "format JSON online", "JSON minifier", "JSON pretty print", "JSON parser"],
        seoBlocks: [
            {
                h2: "What is the JSON Formatter and Validator?",
                content: "The JSON Formatter is an essential developer tool that takes raw, unreadable, dense string data from APIs and instantly structures it into perfectly indented, color-coded, human-readable formatting. It simultaneously parses the schema to validate structural integrity, immediately highlighting JSON syntax errors."
            },
            {
                h2: "Why do developers need a JSON Beautifier?",
                content: "When working with REST APIs, databases, or config files, web servers usually respond with minified JSON (all on one line without spaces) to save bandwidth. This is impossible for a human to read or debug. Our beautifier instantly expands the data tree into nested blocks so you can easily spot missing brackets or incorrect data types."
            },
            {
                h2: "How does the JSON validator help with debugging?",
                content: "A single missing comma or unquoted key can break an entire web application. Finding that exact error in a 5,000-line JSON payload is tedious. Our built-in validation engine immediately parses the structure and throws an explicit error message outputting the exact line number preventing failure, drastically speeding up your development workflow."
            }
        ],
        faqs: [
            {
                question: "Why does my JSON say 'Invalid JSON'?",
                answer: "Common formatting mistakes include: using single quotes (' ') instead of double quotes (\" \") for keys, failing to wrap object keys in quotes, leaving a trailing comma at the end of an array or object, or missing a closing curly brace '}'."
            },
            {
                question: "Can I use this tool to minify JSON instead of formatting it?",
                answer: "Yes, the tool works in both directions. You can paste beautifully structured JSON and hit 'Minify' or 'Compact' to compress it into a single line by removing all whitespace, which is perfect for production deployment payloads."
            },
            {
                question: "Is my proprietary JSON data kept secure?",
                answer: "100% secure. The JavaScript formatting engine runs entirely on the client-side within your browser window. Your sensitive API keys or database dumps are never POSTed to an external server."
            }
        ]
    },
    {
        id: "weight-converter",
        name: "Weight Converter",
        slug: "converter/weight",
        description: "Convert instantly between Kilograms, Pounds, Ounces, Grams and more.",
        longDesc: "A powerful unit converter for all weight and mass measurements. Instantly convert Kilograms (kg) to Pounds (lbs), Grams to Ounces, Metric Tons to pounds, and more with exact precision.",
        icon: "⚖️",
        category: "Converter",
        keywords: ["weight converter", "kg to lbs", "lbs to kg", "grams to ounces", "mass converter", "kilograms to pounds", "convert ounces to grams"],
        seoBlocks: [
            {
                h2: "What is the Weight and Mass Converter?",
                content: "Our online Weight Converter accurately translates physical measurements between the Metric system (grams, kilograms) and the Imperial system (ounces, pounds, stones). It provides real-time, precision-level calculations necessary for cooking, shipping, science, and personal training."
            },
            {
                h2: "Who frequently uses a kg to lbs converter?",
                content: "Fitness enthusiasts calculating gym plate weights, home chefs following international recipe ingredients (converting grams of flour to ounces), logistics professionals determining shipping freight costs, and travelers checking airline baggage weight allowances universally rely on quick mass conversion tools."
            },
            {
                h2: "Why is an online calculator better than manual math?",
                content: "Exact conversions require messy fractional multipliers (e.g., 1 KG = 2.20462 LBS). Doing mental math or using a basic phone calculator often leads to rounding errors. Our digital tool handles multi-decimal precision instantly, saving you from failed recipes or expensive shipping overcharges."
            }
        ],
        faqs: [
            {
                question: "How do I calculate Kilograms (kg) to Pounds (lbs)?",
                answer: "To convert manually, multiply your kilogram value by 2.20462. For example, 10 kg equals approximately 22.04 pounds. Alternatively, just enter '10' in the Kilogram field of our tool for a perfect instant conversion."
            },
            {
                question: "Is there a difference between mass and weight units?",
                answer: "Scientifically, yes. Mass is the amount of matter (measured in kg), while weight depends on gravity. However, in everyday practical use and commerce globally, units like kilograms and pounds are used interchangeably to denote 'weight'."
            },
            {
                question: "What is a 'Stone' measurement?",
                answer: "The 'Stone' (st) is an imperial unit of mass widely used in the UK and Ireland for human body weight. One stone is exactly equal to 14 pounds (lbs) or about 6.35 kilograms (kg)."
            }
        ]
    },
    {
        id: "length-converter",
        name: "Length Converter",
        slug: "converter/length",
        description: "Convert distance and length between Meters, Feet, Inches, Miles and more.",
        longDesc: "Accurately convert length and distance measurements. Easily translate Meters to Feet, Kilometers to Miles, Centimeters to Inches, and Yards with instant real-time calculation.",
        icon: "📏",
        category: "Converter",
        keywords: ["length converter", "meters to feet", "km to miles", "cm to inches", "distance converter", "inches to cm", "convert mm to inches"],
        seoBlocks: [
            {
                h2: "What is the Distance and Length Converter?",
                content: "The Length Converter is a fast, web-based utility that precisely calculates equivalent distance measurements across different metric and imperial systems. It flawlessly translates micro-lengths like millimeters to inches, all the way up to geographic distances like miles to kilometers."
            },
            {
                h2: "Who needs to convert cm to inches or meters to feet?",
                content: "Carpenters reading foreign blueprints, online shoppers checking overseas clothing sizing charts, track athletes comparing 100-meter dash equivalents, and real estate agents dealing with square footage versus square meters all need rapid, pinpoint-accurate length conversions."
            },
            {
                h2: "Why use this specific conversion tool?",
                content: "Precision is critical in construction, engineering, and digital design. A rough estimate (like guessing 1 inch is 'about 2.5 cm' instead of exactly 2.54 cm) compounds into massive structural errors. Our tool guarantees complete exact-decimal mathematical accuracy."
            }
        ],
        faqs: [
            {
                question: "How many centimeters are in exactly one inch?",
                answer: "One inch is exactly equal to 2.54 centimeters. This is an international standard definition, making it the bedrock multiplier for converting between imperial and metric length calculations."
            },
            {
                question: "How do I convert Kilometers to Miles?",
                answer: "To convert kilometers to miles, multiply the km value by 0.621371. Conversely, to go from miles to kilometers, multiply by 1.60934. Example: A '5K' run (5 kilometers) is roughly 3.1 miles."
            },
            {
                question: "What is the difference between a meter and a yard?",
                answer: "A meter is primarily a metric measurement and is slightly longer than an imperial yard. One meter equals approximately 1.0936 yards (or about 39.37 inches, whereas a yard is exactly 36 inches)."
            }
        ]
    },
    {
        id: "temperature-converter",
        name: "Temperature Converter",
        slug: "converter/temperature",
        description: "Convert accurately between Celsius, Fahrenheit, and Kelvin.",
        longDesc: "Instantly convert temperatures between Celsius (°C), Fahrenheit (°F), and Kelvin (K). Essential for science, weather, cooking, and international travel calculations.",
        icon: "🌡️",
        category: "Converter",
        keywords: ["temperature converter", "celsius to fahrenheit", "fahrenheit to celsius", "c to f calculator", "kelvin converter", "convert temperature", "online heat converter"],
        seoBlocks: [
            {
                h2: "What is the Temperature Converter Tool?",
                content: "Our online Temperature Converter is a scientific utility that accurately flips heat measurements across the three primary temperature scales: Celsius (Metric), Fahrenheit (Imperial), and Kelvin (Scientific). The dynamic input interface provides simultaneous, real-time readouts for all three scales as you type."
            },
            {
                h2: "Why is calculating Celsius to Fahrenheit difficult?",
                content: "Unlike weight or length, which scale upwards from absolute zero, the Celsius and Fahrenheit scales define their 'zero point' differently (Freezing vs offset). The formula requires both multiplication and addition: (°C × 9/5) + 32 = °F, making mental conversion notoriously difficult for most people."
            },
            {
                h2: "When is temperature calculation necessary?",
                content: "It is an everyday necessity for global travelers checking weather forecasts, chefs baking foreign recipes that require specific oven heat conversions, engineers dealing with thermal limits, and students analyzing data in chemistry or physics class using the Kelvin absolute scale."
            }
        ],
        faqs: [
            {
                question: "How do I convert Celsius to Fahrenheit manually?",
                answer: "The formula is: Multiply the Celsius temperature by 1.8 (or 9/5) and then add 32. For a quick mental trick, you can double the Celsius number and add 30 for an approximate rough estimate."
            },
            {
                question: "At what temperature do Celsius and Fahrenheit match?",
                answer: "The Celsius and Fahrenheit scales intersect exactly at -40 degrees. This means minus 40°C is completely equivalent in temperature to minus 40°F."
            },
            {
                question: "What is the Kelvin scale used for?",
                answer: "Kelvin is the base unit of temperature in the International System of Units (SI), predominantly used by scientists and engineers. Unlike C or F, Kelvin has no negative numbers; it starts at 'Absolute Zero' (0 K), the theoretical point where all molecular motion completely stops."
            }
        ]
    }
];
