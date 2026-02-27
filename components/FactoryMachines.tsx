"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { useState } from "react";

interface FactoryMachinesProps {
    product: Product;
}

const machines = [
    { name: "Casting", id: "01" },
    { name: "Pasting", id: "02" },
    { name: "Curing", id: "03" },
    { name: "Cutting", id: "04" },
    { name: "Battery Assemble Line", id: "05" },
    { name: "Battery Charging Station", id: "06" },
    { name: "Plate Charging Station", id: "07" },
    { name: "Plate Dry Charge", id: "08" },
    { name: "Quality Assurance", id: "09" },
];

export default function FactoryMachines({ product }: FactoryMachinesProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-12 px-4 md:px-8 relative overflow-hidden bg-zinc-900">
            {/* Ambient Background Gradient */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none transition-colors duration-1000"
                style={{
                    background: `radial-gradient(circle at center, ${product.themeColor} 0%, transparent 70%)`
                }}
            />

            {/* Abstract Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] opacity-20" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px] opacity-20" style={{ backgroundColor: product.themeColor }} />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-2"
                        style={{ color: product.themeColor }}
                    >
                        Factory Machines.
                    </h2>
                    <div className="w-16 h-1 bg-white/20 mx-auto rounded-full" />
                </motion.div>

                {/* 3x3 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {machines.map((machine, index) => (
                        <motion.div
                            key={machine.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.08,
                                ease: [0.21, 0.47, 0.32, 0.98] // Premium "Soft Out" cubic bezier
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            // Container: Shorter height (h-40 ~ 160px), centered content - Compact
                            className="group relative w-full h-40 md:h-48 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1"
                            style={{
                                backgroundColor: hoveredIndex === index
                                    ? `rgba(255, 255, 255, 0.08)`
                                    : `rgba(255, 255, 255, 0.03)`,
                                boxShadow: hoveredIndex === index
                                    ? `0 20px 40px -10px ${product.themeColor}30`
                                    : 'none'
                            }}
                        >
                            {/* Hover Glow Background */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundColor: product.themeColor }}
                            />

                            {/* Text (Big, Bold, Centered) */}
                            <h3
                                className="text-xl md:text-2xl font-bold text-white transition-all duration-300 px-4 group-hover:scale-105"
                                style={{
                                    color: hoveredIndex === index ? product.themeColor : 'white',
                                    textShadow: hoveredIndex === index ? `0 0 20px ${product.themeColor}80` : 'none'
                                }}
                            >
                                {machine.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
