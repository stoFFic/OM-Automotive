"use client";
import { Product } from "@/data/products";
import { motion } from "framer-motion";

export default function FreshnessSection({ product }: { product: Product }) {
    return (
        <section className="py-24 px-6 bg-gray-900 text-white relative overflow-hidden">
            {/* Abstract background blobs */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-20" />
            <div className="absolute bottom-0 right-0 w-96 h-96" style={{ backgroundColor: product.themeColor, filter: 'blur(150px)', opacity: 0.2 }} />

            <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">{product.freshnessSection.title}</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        {product.freshnessSection.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {product.buyNowSection.processingParams.map((param, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                        >
                            <div className="h-2 w-12 rounded-full mb-4 mx-auto" style={{ backgroundColor: product.themeColor }} />
                            <p className="font-semibold text-lg">{param}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
