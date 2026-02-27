"use client";

import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/data/products";

interface ProductBottleScrollProps {
    product: Product;
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);



    // Reset when product changes
    useEffect(() => {
        setImages([]);
        setImagesLoaded(false);
    }, [product.folderPath]);

    // Preload images
    useEffect(() => {
        let isMounted = true;

        const loadImages = async () => {
            if (!product.folderPath) return;

            const frameCount = product.frameCount || 120;
            const promises = Array.from({ length: frameCount }, (_, i) => {
                const index = i + 1;
                return new Promise<HTMLImageElement | null>((resolve) => {
                    const img = new Image();
                    const pattern = product.imagePattern || "{i}.webp";
                    // Handle variable padding if needed, but currently assumes 3 digits
                    // If files start at 21, let's just try to load 1-based index as is.
                    const filename = pattern.replace("{i}", index.toString())
                        .replace("{000}", index.toString().padStart(3, "0"));

                    img.src = `${product.folderPath}/${filename}`;
                    img.onload = () => resolve(img);
                    img.onerror = () => {
                        // console.warn(`Failed to load image: ${filename}`);
                        resolve(null);
                    };
                });
            });

            const loadedImages = await Promise.all(promises);

            if (isMounted) {
                // Filter out nulls (failed loads)
                const validImages = loadedImages.filter((img): img is HTMLImageElement => img !== null);

                if (validImages.length > 0) {
                    setImages(validImages);
                    setImagesLoaded(true);
                } else {
                    console.error("No valid images found for product:", product.name);
                }
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, [product.folderPath, product.imagePattern, product.frameCount]);

    // Render loop
    const maxFrame = (product.frameCount || 120) - 1;
    const currentFrame = useTransform(scrollYProgress, [0, 1], [0, maxFrame]);

    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !imagesLoaded || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Use specific frame or fallback to last available
        // Ensure index maps to valid image array index
        // Depending on how many images loaded vs. frameCount
        // We map 0..maxFrame to 0..images.length-1

        const safeIndex = Math.min(
            Math.max(Math.floor(index), 0),
            images.length - 1
        );

        // If images span fewer frames due to failures, we might just clamp to available images
        // Or rescale the index? 
        // For now, let's clamp to safeIndex.

        const img = images[safeIndex];
        if (!img) return;

        // Make canvas responsive
        // Only update if dimensions differ to avoid flickering/perf hit?
        // Actually, resize listener handles the main updates below.
        // But checking every frame is okay for resize responsiveness during scroll
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // Draw image "cover" style to adapt to full size
        const scale = Math.max(
            canvas.width / img.width,
            canvas.height / img.height
        );

        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(currentFrame, "change", (latest) => {
        requestAnimationFrame(() => render(latest));
    });

    // Initial render when loaded - Robust loop to catch late layout readiness
    useEffect(() => {
        if (!imagesLoaded || images.length === 0) return;

        let frameId: number;
        let count = 0;
        const maxRetries = 10; // Try for ~10 frames (~160ms) if canvas not ready

        const initialDraw = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                // Ensure dimensions are set if 0
                if (canvas.width === 0 || canvas.height === 0) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }

                // Get current frame index from motion value
                const latestFrameIndex = currentFrame.get();
                render(latestFrameIndex); // Force draw at current scroll position
            }

            if (count < maxRetries) {
                count++;
                frameId = requestAnimationFrame(initialDraw);
            }
        };

        frameId = requestAnimationFrame(initialDraw);

        return () => cancelAnimationFrame(frameId);
    }, [imagesLoaded, images, currentFrame]);

    // Window resize handler
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            if (imagesLoaded && images.length > 0) {
                requestAnimationFrame(() => render(currentFrame.get()));
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [imagesLoaded, images, currentFrame]);


    // Dynamic height based on frame count
    const scrollHeight = (product.frameCount || 120) * 8;

    return (
        <div ref={containerRef} className="relative" style={{ height: `${scrollHeight}px` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Placeholder if images fail or empty */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl font-bold animate-pulse">
                        Loading 3D Experience...
                    </div>
                )}
                {/* Canvas for sequence */}
                <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-0" />
            </div>
        </div>
    );
}
