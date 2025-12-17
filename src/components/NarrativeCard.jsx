import React from "react";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import { ICON_MAP } from "../data/content";

export default function NarrativeCard({ item, index }) {
    const Icon = ICON_MAP[item.icon] || BookOpen;
    const number = index !== undefined ? `0${index + 1}` : null;

    return (
        <article className="group flex gap-6 py-8 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors duration-300 px-4 -mx-4 rounded-xl">
            <div className="flex flex-col items-center gap-3 shrink-0">
                <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-[#d6b16b] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                </div>
                {number && (
                    <span className="text-xs font-serif text-slate-300 group-hover:text-[#d6b16b] transition-colors duration-300">
                        {number}
                    </span>
                )}
            </div>
            <div>
                <h3 className="text-xl font-serif font-medium text-slate-900 mb-2 group-hover:text-[#b78b45] transition-colors">{item.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{item.body}</p>
            </div>
        </article>
    );
}
