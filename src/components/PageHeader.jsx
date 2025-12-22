import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, image, parentSection }) {
    const BASE = import.meta.env.BASE_URL;
    // Handle both absolute paths starting with / and already-processed paths
    const imageSrc = image?.startsWith('/') ? `${BASE}${image.slice(1)}` : image;
    return (
        <div className="relative h-[35vh] md:h-[40vh] min-h-[280px] md:min-h-[400px] w-full overflow-hidden mb-8 md:mb-16 bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative h-full mx-auto max-w-6xl px-4 md:px-6 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl space-y-3 md:space-y-6"
                >
                    {parentSection && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#D4AF37] font-bold">
                                {parentSection}
                            </span>
                        </div>
                    )}

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium text-white tracking-tight leading-[1.1]">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-base md:text-lg lg:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

