"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";
import Image from "next/image";

interface CompanyProfileProps {
    product: Product;
}

export default function AboutUs({ product }: CompanyProfileProps) {
    const themeColor = "#3B82F6"; // Blue tone
    return (
        <section className="py-20 px-4 md:px-8 relative overflow-hidden bg-zinc-900 border-none">
            {/* Ambient Background Gradient - Matching FactoryMachines */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none transition-colors duration-1000"
                style={{
                    background: `radial-gradient(circle at center, ${themeColor} 0%, transparent 70%)`
                }}
            />

            {/* Abstract Blobs - Matching FactoryMachines */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] opacity-20" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-[128px] opacity-20" style={{ backgroundColor: themeColor }} />

            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-2"
                        style={{ color: themeColor }}
                    >
                        About Us.
                    </h2>
                    <div className="w-16 h-1 bg-white/20 mx-auto rounded-full" />
                </motion.div>

                {/* Owner Photo & Info */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group"
                >
                    {/* Glowing Border Effect */}
                    <div
                        className="absolute -inset-1 rounded-full opacity-50 blur-lg transition-colors duration-500"
                        style={{ backgroundColor: themeColor }}
                    />

                    {/* Image Container */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl bg-zinc-800">
                        <Image
                            src="/images/dinesh_patel.jpg"
                            alt="Dinesh Patel - Owner"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Owner Name & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 space-y-4"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Dinesh Patel
                    </h3>
                    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                        Since 1999, we have been at the forefront of delivering reliable and high-performance battery solutions. Under the visionary leadership of Dinesh Patel, our commitment to quality and innovation has powered countless industries. We take pride in our heritage of excellence, ensuring every product meets the highest standards of durability and efficiency.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
