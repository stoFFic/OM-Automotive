export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    imagePattern?: string; // e.g. "ezgif-frame-{000}.jpg" or "{1}.webp"
    frameCount?: number;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "vrla",
        name: "VRLA",
        subName: "Maintenance Free Power.",
        price: "₹1200",
        description: "Valve Regulated Lead Acid - Sealed - Long Life",
        folderPath: "/images/mango", // Keeping images as placeholder
        imagePattern: "ezgif-frame-{000}.jpg",
        frameCount: 192,
        themeColor: "#FFB74D",
        gradient: "linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)",
        features: ["Maintenance Free", "Spill Proof", "High Reliability"],
        stats: [{ label: "Voltage", val: "12V" }, { label: "Type", val: "AGM" }, { label: "Life", val: "5Y" }],
        section1: { title: "VRLA Battery.", subtitle: "Maintenance Free Power." },
        section2: { title: "Engineered for endurance.", subtitle: "Perfect for UPS systems and emergency lighting." },
        section3: { title: "Sealed performance.", subtitle: "No water top-up required, ever." },
        section4: { title: "Reliability you can trust.", subtitle: "" },
        detailsSection: {
            title: "Advanced AGM Technology",
            description: "Our VRLA batteries use Absorbent Glass Mat technology to ensure efficient gas recombination (up to 99%). This provides a safe, leak-proof, and maintenance-free experience suitable for a wide range of applications.",
            imageAlt: "VRLA Battery Details"
        },
        freshnessSection: {
            title: "Factory Fresh",
            description: "Direct from our manufacturing unit to your doorstep. We ensure that every battery is fully charged and tested before dispatch, guaranteeing immediate performance upon installation."
        },
        buyNowSection: {
            price: "₹1200",
            unit: "per unit",
            processingParams: ["Sealed", "Tested", "Certified"],
            deliveryPromise: "Heavy-duty packaging prevents damage during transit.",
            returnPolicy: "3-year warranty with on-site replacement."
        }
    },
    {
        id: "tubular",
        name: "Tubular",
        subName: "Deep Cycle Expert.",
        price: "₹1400",
        description: "Heavy Duty - Inverter Compatible - Long Backup",
        folderPath: "/images/mango", // Placeholder using VRLA assets for now
        imagePattern: "ezgif-frame-{000}.jpg",
        frameCount: 192,
        themeColor: "#FFB74D",
        gradient: "linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)",
        features: ["Deep Discharge", "Fast Charging", "Low Maintenance"],
        stats: [{ label: "Capacity", val: "150Ah" }, { label: "Cycles", val: "1200+" }, { label: "Type", val: "Tall" }],
        section1: { title: "Tubular Battery.", subtitle: "Deep Cycle Expert." },
        section2: { title: "Power cuts? No problem.", subtitle: "Designed to withstand long and frequent power cuts with ease." },
        section3: { title: "Robust construction.", subtitle: "Thick tubular spines ensure longer life and higher capacity." },
        section4: { title: "The backbone of your home.", subtitle: "" },
        detailsSection: {
            title: "High Pressure Casting",
            description: "Manufactured using high-pressure die casting machines, our tubular spines allow for a denser grain structure. This results in higher resistance to corrosion and ensures a longer service life even under extreme conditions.",
            imageAlt: "Tubular Battery Details"
        },
        freshnessSection: {
            title: "Performance Guarantee",
            description: "Rigorous quality checks at every stage of production ensure that you get a battery that performs consistent with its rated capacity. Built to last, built to perform."
        },
        buyNowSection: {
            price: "₹1400",
            unit: "per unit",
            processingParams: ["Heavy Duty", "Long Life", "Robust"],
            deliveryPromise: "Installation support available in select cities.",
            returnPolicy: "48-month warranty (24F + 24P)."
        }
    },
    {
        id: "lead-acid",
        name: "Lead Acid",
        subName: "Traditional Reliability.",
        price: "₹1500",
        description: "Cost Effective - Recyclable - Proven Tech",
        folderPath: "/images/mango", // Placeholder using VRLA assets for now
        imagePattern: "ezgif-frame-{000}.jpg",
        frameCount: 192,
        themeColor: "#FFB74D",
        gradient: "linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)",
        features: ["Economical", "Recyclable", "Standard Fit"],
        stats: [{ label: "Start Power", val: "High" }, { label: "Recycle", val: "99%" }, { label: "Cost", val: "Low" }],
        section1: { title: "Lead Acid.", subtitle: "Traditional Reliability." },
        section2: { title: "The automotive standard.", subtitle: "Providing the high surge current needed to start engines reliably." },
        section3: { title: "Economical choice.", subtitle: "The most cost-effective solution for standard power needs." },
        section4: { title: "Tried and tested.", subtitle: "" },
        detailsSection: {
            title: "Proven Technology",
            description: "With over 150 years of development, lead-acid technology is mature and reliable. Our grid designs optimize conductivity and durability, giving you a dependable battery at an affordable price.",
            imageAlt: "Lead Acid Battery Details"
        },
        freshnessSection: {
            title: "Eco-Friendly",
            description: "Lead-acid batteries are the most recycled consumer product in the world. We ensure 99% of the battery materials are recovered and reused, making this a responsible choice for the environment."
        },
        buyNowSection: {
            price: "₹1500",
            unit: "per unit",
            processingParams: ["Standard", "Recyclable", "Reliable"],
            deliveryPromise: "Safe transport compliant with hazardous material regulations.",
            returnPolicy: "1-year standard replacement warranty."
        }
    },
    {
        id: "lithium",
        name: "Lithium",
        subName: "The Future of Power.",
        price: "₹4500",
        description: "Lightweight - Fast Charge - High Density",
        folderPath: "/images/mango", // Placeholder using VRLA assets for now
        imagePattern: "ezgif-frame-{000}.jpg",
        frameCount: 192,
        themeColor: "#FFB74D",
        gradient: "linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)",
        features: ["Ultra Light", "Fast Charge", "Smart BMS"],
        stats: [{ label: "Weight", val: "-60%" }, { label: "Life", val: "10Y" }, { label: "Charge", val: "1Hr" }],
        section1: { title: "Lithium Ion.", subtitle: "The Future of Power." },
        section2: { title: "Unmatched energy density.", subtitle: "Pack more power into a fraction of the space and weight." },
        section3: { title: "Intelligent protection.", subtitle: "Integrated Battery Management System (BMS) for total safety." },
        section4: { title: "Next-gen performance.", subtitle: "" },
        detailsSection: {
            title: "LiFePO4 Chemistry",
            description: "Using safe and stable Lithium Iron Phosphate chemistry, our batteries offer thousands of cycles with zero maintenance. They are perfect for solar storage, EVs, and high-performance applications.",
            imageAlt: "Lithium Battery Details"
        },
        freshnessSection: {
            title: "Smart Technology",
            description: "Built-in Bluetooth monitoring allows you to check state-of-charge, health, and temperature directly from your smartphone. Stay connected to your power."
        },
        buyNowSection: {
            price: "₹4500",
            unit: "per unit",
            processingParams: ["Smart BMS", "LiFePO4", "Premium"],
            deliveryPromise: "Specialized handling for Lithium batteries.",
            returnPolicy: "5-year comprehensive performance warranty."
        }
    }
];
