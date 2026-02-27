"use client";
import { Product } from "@/data/products";
import { motion } from "framer-motion";

interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    return (
        <section className="py-24 px-6 bg-transparent relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900/50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-8"
                >
                    <div className="relative">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-4">
                            {product.detailsSection.title}
                        </h2>
                        {/* Line below heading */}
                        <div className="w-24 h-2 rounded-full" style={{ backgroundColor: product.themeColor }}></div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                        {product.detailsSection.description}
                    </p>

                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                        {product.stats.map((stat, idx) => (
                            <div key={idx} className="text-center md:text-left">
                                <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">{stat.label}</p>
                                <p className="text-3xl font-bold" style={{ color: product.themeColor }}>{stat.val}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual/Image Placeholder - In real app this would be a high qual photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full aspect-video bg-white/5 rounded-3xl overflow-hidden relative shadow-2xl border border-white/10"
                >
                    {/* Try to load image, fallback to placeholder */}
                    <img
                        src={`/images/${product.id}/detail.jpg`}
                        alt={product.detailsSection.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                            const target = e.currentTarget;
                            // Try extensions: jpg -> jpeg -> png -> webp -> fail
                            if (target.src.endsWith('.jpg')) {
                                target.src = target.src.replace('.jpg', '.jpeg');
                            } else if (target.src.endsWith('.jpeg')) {
                                target.src = `/images/${product.id}/detail.png`;
                            } else if (target.src.endsWith('.png')) {
                                target.src = `/images/${product.id}/detail.webp`;
                            } else {
                                target.style.display = 'none';
                                // Show placeholder sibling if image fails
                                const placeholder = target.nextElementSibling as HTMLElement;
                                if (placeholder) placeholder.style.display = 'flex';
                            }
                        }}
                    />

                    <div className="absolute inset-0 bg-transparent items-center justify-center text-gray-500 hidden" style={{ display: 'none' /* Hidden by default, shown by onError */ }}>
                        {/* Placeholder for detail image */}
                        <div className="text-center p-8">
                            <div className="text-6xl mb-4">📸</div>
                            <p className="font-medium text-gray-300">{product.detailsSection.imageAlt}</p>
                            <p className="text-sm mt-2 opacity-60">Add image to public/images/{product.id}/detail.jpg</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
