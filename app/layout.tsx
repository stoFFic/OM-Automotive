import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Import Outfit
import "./globals.css";

// Use Outfit font
const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700", "800"], // Load necessary weights
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "OM Automotive | Quality Automotive Components",
    description: "Premier manufacturer of high-quality automotive components.",
    icons: {
        icon: "/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
