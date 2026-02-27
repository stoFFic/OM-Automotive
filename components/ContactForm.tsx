"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, description }),
            });

            if (!res.ok) throw new Error("Failed to send");

            setStatus("success");
            setEmail("");
            setDescription("");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="contact-form" className="py-24 px-6 bg-transparent relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Inquire Now</h2>
                        <p className="text-gray-400">Interested in carrying Nano Banana? Get in touch with us.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Inquiry Details</label>
                            <textarea
                                id="description"
                                required
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-none"
                                placeholder="Tell us about your needs..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform active:scale-95 ${status === "success"
                                    ? "bg-green-500 text-white cursor-default"
                                    : "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg hover:shadow-orange-500/20"
                                }`}
                        >
                            {status === "loading" ? "Sending..." : status === "success" ? "Inquiry Sent!" : "Send Inquiry"}
                        </button>

                        {status === "error" && (
                            <p className="text-red-400 text-sm text-center mt-4">Something went wrong. Please try again.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
