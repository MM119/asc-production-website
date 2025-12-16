import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, image, parentSection }) {
    return (
        <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden mb-16">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative h-full mx-auto max-w-6xl px-6 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl space-y-6"
                >
                    {parentSection && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d6b16b]/10 border border-[#d6b16b]/20 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#d6b16b]"></span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d6b16b] font-bold">
                                {parentSection}
                            </span>
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white tracking-tight leading-[1.1]">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
