import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import { ICON_MAP } from "../data/content";

export default function Hero({ t }) {
    const BASE = import.meta.env.BASE_URL;
    return (
        <section className="relative overflow-hidden text-white bg-[#050c20]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(120deg, rgba(5,10,25,0.92), rgba(5,10,25,0.75)), url(${BASE}assets/hero/hero-hcmc-dusk.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
                    backgroundSize: "140px 140px",
                }}
            />
            <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-24 relative">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="grid gap-8 lg:gap-16 lg:grid-cols-[1.2fr_0.8fr] items-start">
                    <div className="space-y-6 md:space-y-10">
                        <div className="space-y-4 md:space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 backdrop-blur-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#D4AF37] font-bold">Systematic Vietnam Equities</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-white">
                                {t.hero.title}
                            </h1>
                            <p className="mt-4 md:mt-6 text-slate-200 leading-relaxed text-base md:text-lg lg:text-xl font-light max-w-xl">
                                {t.hero.subtitle}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                            {t.hero.ctas.map((cta, idx) => (
                                <Link
                                    key={cta.to}
                                    to={cta.to}
                                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 md:px-8 py-3 md:py-4 text-sm font-bold tracking-wide transition-all duration-300 ${idx === 0
                                        ? "bg-[#D4AF37] text-slate-900 hover:bg-[#e5c57f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
                                        : "border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                                        }`}
                                >
                                    {cta.label} <ArrowRight className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                        {t.hero.stats && (
                            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-3 pt-6 md:pt-8 border-t border-white/10">
                                {t.hero.stats.map((stat) => {
                                    const Icon = ICON_MAP[stat.icon] || ShieldCheck;
                                    return (
                                        <div key={stat.label} className="flex items-center gap-3 md:gap-4 group">
                                            <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
                                                <Icon className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400 mb-0.5 md:mb-1">{stat.label}</div>
                                                <div className="text-base md:text-lg font-serif text-white">{stat.value}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 backdrop-blur-md shadow-2xl">
                        <h3 className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#D4AF37] font-bold mb-4 md:mb-6">{t.hero.whyAsc}</h3>
                        <p className="text-base md:text-lg text-slate-100 font-light leading-relaxed mb-6 md:mb-8">
                            {t.hero.subtitle.split('.')[0] || "Disciplined, factor-based Vietnamese equity strategies."}
                        </p>
                        <div className="space-y-4 md:space-y-6">
                            {t.hero.highlights.map((item) => {
                                const Icon = ICON_MAP[item.icon] || BookOpen;
                                return (
                                    <div key={item.label} className="flex gap-3 md:gap-4 group">
                                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="h-4 w-4 md:h-5 md:w-5 text-slate-200" />
                                        </div>
                                        <div>
                                            <div className="font-serif text-base md:text-lg text-white mb-0.5 md:mb-1">{item.label}</div>
                                            <p className="text-sm text-slate-300 leading-relaxed">{item.body}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

