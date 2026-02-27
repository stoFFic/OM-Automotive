"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Product } from "@/data/products";

interface ProductTextOverlaysProps {
    product: Product;
}

function Section({ children, opacity }: { children: React.ReactNode, opacity: any }) {
    return (
        <motion.div
            style={{ opacity }}
            className="h-screen w-full flex items-center justify-center absolute top-0 left-0 pointer-events-none p-12 text-center"
        >
            <div className="max-w-4xl mx-auto space-y-6">
                {children}
            </div>
        </motion.div>
    )
}

export default function ProductTextOverlays({ product }: ProductTextOverlaysProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Define opacity ranges for each section relative to the 500vh container
    // 0-0.2: Section 1
    // 0.25-0.45: Section 2
    // 0.5-0.7: Section 3
    // 0.75-0.95: Section 4

    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);
    const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 0]);

    // Scale effects
    const scale1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0.8, 1, 1.2]);
    const scale2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0.8, 1, 1.2]);


    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
            {/* The containerRef must match the height of the scroll container, 
                effectively we just need to use the same scroll progress as the bottle.
                However, structurally, this component sits 'on top' of the sticky bottle.
                So we can just use fixed positioning or absolute positioning within the parent.
             */}

            {/* Section 1 */}
            <motion.div style={{ opacity: opacity1, scale: scale1 }} className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center p-8 text-center text-white">
                {/* Text removed as per user request for image-only first section */}
            </motion.div>

            {/* Section 2 */}
            <motion.div style={{ opacity: opacity2, scale: scale2 }} className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center p-8 text-center text-white">
                {/* Text removed */}
            </motion.div>

            {/* Section 3 */}
            <motion.div style={{ opacity: opacity3 }} className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center p-8 text-center text-white">
                {/* Text removed */}
            </motion.div>

            {/* Section 4 */}
            <motion.div style={{ opacity: opacity4 }} className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center p-8 text-center text-white">
                {/* Text removed */}
            </motion.div>
        </div>
    )
}
