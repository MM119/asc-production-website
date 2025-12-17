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

export default function InsightCard({ item, readMoreLabel }) {
    const Icon = INSIGHT_ICONS[item.icon] || FileText;
    const theme = getCategoryTheme(item.category);
    return (
        <Link to={`/insights/${item.slug}`} className="group rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col overflow-hidden hover:shadow-premium transition-all duration-500 hover:-translate-y-1">
            <div className="relative h-52 overflow-hidden">
                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500" />
                <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm ${theme.tag}`}>{item.category}</span>
            </div>
            <div className="p-8 flex flex-col gap-4 flex-1">
                <div className={`flex items-center gap-2 text-xs uppercase tracking-widest font-semibold ${theme.accent}`}>
                    <Icon className="h-3.5 w-3.5" />
                    <span>{item.category}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-600 flex-1 leading-relaxed">{item.summary}</p>
                <div className="pt-4 text-xs font-bold uppercase tracking-widest text-slate-900 inline-flex items-center gap-2 group-hover:gap-3 transition-all group-hover:text-[#b78b45]">
                    {readMoreLabel} <ArrowRight className="h-3.5 w-3.5" />
                </div>
            </div>
        </Link>
    );
}
