"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import ProductDetails from "@/components/ProductDetails";
import FreshnessSection from "@/components/FreshnessSection";
import ContactForm from "@/components/ContactForm";
import FactoryMachines from "@/components/FactoryMachines";
import AboutUs from "@/components/AboutUs";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const currentProduct = products[currentIndex];

    // Variants for content slide animation
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const nextProduct = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevProduct = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const nextIndex = (currentIndex + 1) % products.length;
    const nextProductObj = products[nextIndex];
    const nextProductName = nextProductObj.name;
    const nextProductColor = nextProductObj.themeColor;

    // Scroll reset on change
    useEffect(() => {
        // Optional: Smooth scroll to top or specific section if desired
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentIndex]);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
            <Navbar productName={currentProduct.name} />

            {/* Top Section: Bottle & Overlays (No unmount - stable for smooth transition) */}
            <div className="relative min-h-screen">
                <div className="relative w-full transition-opacity duration-1000">
                    <ProductBottleScroll product={currentProduct} />
                    <ProductTextOverlays product={currentProduct} />
                </div>

                {/* Navigation Arrows (Persistent) */}
                {currentIndex > 0 && (
                    <div className="fixed top-1/2 left-4 md:left-8 z-40 -translate-y-1/2 flex flex-col gap-4 mix-blend-difference text-white">
                        <button onClick={prevProduct} className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                            ←
                        </button>
                    </div>
                )}
                {currentIndex < products.length - 1 && (
                    <div className="fixed top-1/2 right-4 md:right-8 z-40 -translate-y-1/2 flex flex-col gap-4 mix-blend-difference text-white">
                        <button onClick={nextProduct} className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                            →
                        </button>
                    </div>
                )}

                {/* Bottom Menu Paginator */}
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-black/30 backdrop-blur-md rounded-full px-2 py-2 flex gap-2 border border-white/10">
                    {products.map((p, idx) => (
                        <button
                            key={p.id}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            style={{ color: idx === currentIndex ? p.themeColor : undefined }}
                            className={`rounded-full transition-all duration-300 flex items-center ${idx === currentIndex
                                ? "relative px-6 py-3 text-base font-bold bg-white shadow-xl scale-110"
                                : "px-4 py-2 text-sm bg-transparent text-white/70 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {p.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Bottom Section: Info Content */}
            <div className="relative z-30 bg-black min-h-screen overflow-x-hidden">

                {/* Animated Dynamic Sections (Product Details & Freshness) */}
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProductDetails product={currentProduct} />
                        <FreshnessSection product={currentProduct} />
                    </motion.div>
                </AnimatePresence>

                {/* Static Sections (Factory Machines & Buy Now) - Just Prop Updates */}
                <div className="relative z-30">
                    <FactoryMachines product={currentProduct} />
                    <AboutUs product={currentProduct} />

                    {/* Next Flavor Call to Action */}
                    <div className="py-20 text-center bg-zinc-900 border-t border-white/10">
                        <p className="text-gray-400 mb-4">Want something different?</p>
                        <button
                            onClick={nextProduct}
                            className="px-8 py-3 rounded-full font-bold text-white transition-transform hover:scale-105 active:scale-95"
                            style={{ backgroundColor: nextProductColor }}
                        >
                            Switch to {nextProductName}
                        </button>
                    </div>
                </div>
            </div>

            <ContactForm />
            <Footer />
        </main>
    );
}
