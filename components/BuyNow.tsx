"use client";
import { Product } from "@/data/products";
import { motion } from "framer-motion";

export default function BuyNow({ product }: { product: Product }) {
    return (
        <section className="py-24 px-6 bg-transparent">
            <div className="max-w-5xl mx-auto bg-white/5 rounded-[3rem] p-8 md:p-16 overflow-hidden relative border border-white/10 shadow-xl backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-transparent to-white/5 opacity-50 rounded-bl-full" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="space-y-6 flex-1">
                        <h2 className="text-4xl font-bold text-white">Get it fresh.</h2>
                        <div className="space-y-4 text-gray-400">
                            <p className="flex items-center gap-2">
                                <span className="text-green-400">✓</span> {product.buyNowSection.deliveryPromise}
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-green-400">✓</span> {product.buyNowSection.returnPolicy}
                            </p>
                        </div>
                    </div>

                    <div className="bg-black/40 p-8 rounded-3xl shadow-lg border border-white/10 w-full md:w-auto min-w-[320px] text-center space-y-6">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">{product.buyNowSection.unit}</p>
                            <p className="text-5xl font-bold text-white">{product.buyNowSection.price}</p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                            className="w-full py-4 px-8 rounded-xl text-white font-bold text-lg shadow-lg transition-all relative overflow-hidden group"
                            style={{ background: product.gradient }}
                        >
                            <span className="relative z-10">Inquire</span>
                            <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}
