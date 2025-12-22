import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import FileText from "lucide-react/dist/esm/icons/file-text";
import { INSIGHT_ICONS } from "../data/content";

function getCategoryTheme(category = "") {
    const normalized = category.toLowerCase();
    if (normalized.includes("news") || normalized.includes("tin")) {
        return { tag: "bg-blue-600/90 text-white", accent: "text-blue-200" };
    }
    return { tag: "bg-amber-400/90 text-slate-900", accent: "text-amber-600" };
}

export default function InsightCard({ item, readMoreLabel, comingSoonLabel = "Coming soon" }) {
    const BASE = import.meta.env.BASE_URL;
    const Icon = INSIGHT_ICONS[item.icon] || FileText;
    const theme = getCategoryTheme(item.category);
    const isComingSoon = Boolean(item.comingSoon);
    const cardClasses =
        "group rounded-xl md:rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col overflow-hidden transition-all duration-500 hover:shadow-premium hover:-translate-y-1";
    const Wrapper = isComingSoon ? "div" : Link;
    const wrapperProps = isComingSoon
        ? { className: cardClasses, "aria-disabled": true }
        : { to: `/insights/${item.slug}`, className: cardClasses };
    const actionLabel = isComingSoon ? comingSoonLabel : readMoreLabel;
    const imageSrc = item.image?.startsWith("/") ? `${BASE}${item.image.slice(1)}` : item.image;
    return (
        <Wrapper {...wrapperProps}>
            <div className="relative h-40 md:h-52 overflow-hidden">
                <img src={imageSrc} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500" />
                <span className={`absolute top-3 left-3 md:top-4 md:left-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2.5 md:px-3 py-1 md:py-1.5 rounded-full shadow-sm ${theme.tag}`}>{item.category}</span>
                {isComingSoon && (
                    <span className="absolute top-3 right-3 md:top-4 md:right-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-slate-900/80 text-white shadow-sm">
                        {comingSoonLabel}
                    </span>
                )}
            </div>
            <div className="p-4 md:p-8 flex flex-col gap-3 md:gap-4 flex-1">
                <div className={`flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest font-semibold ${theme.accent}`}>
                    <Icon className="h-3 w-3 md:h-3.5 md:w-3.5" />
                    <span>{item.category}</span>
                </div>
                <h3 className="text-lg md:text-xl font-serif font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-600 flex-1 leading-relaxed line-clamp-3">{item.summary}</p>
                <div className="pt-2 md:pt-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-900 inline-flex items-center gap-2 group-hover:gap-3 transition-all group-hover:text-[#b78b45]">
                    {actionLabel}
                    {!isComingSoon && <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5" />}
                </div>
            </div>
        </Wrapper>
    );
}

