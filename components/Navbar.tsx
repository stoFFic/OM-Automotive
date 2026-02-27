"use client";

import { motion, useScroll, useMotionValueEvent, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar({ productName }: { productName?: string }) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Let's use a meaningful scroll check for hiding
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white/10 backdrop-blur-xl border-b border-white/20" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group z-20">
                    <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    >
                        OM
                    </motion.div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600 group-hover:from-pink-600 group-hover:to-orange-500 transition-all duration-300 tracking-wider">
                        AUTOMOTIVE
                    </span>
                </Link>

                {/* Center Product Name */}
                <AnimatePresence mode="wait">
                    {productName && (
                        <motion.div
                            key={productName}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white/90 tracking-wider z-10 pointer-events-none"
                        >
                            {productName}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Action */}
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(249, 115, 22, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all relative overflow-hidden group"
                >
                    <span className="relative z-10">Inquire</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                </motion.button>
            </div>
        </motion.nav>
    );
}
