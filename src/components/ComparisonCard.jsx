import React from "react";
import Activity from "lucide-react/dist/esm/icons/activity";
import Compass from "lucide-react/dist/esm/icons/compass";

export default function ComparisonCard({ comparison }) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Gut Feeling - Grey/Muted */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center shrink-0">
                        <Activity className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{comparison.gutTitle}</div>
                        <p className="text-sm text-slate-500 leading-relaxed">{comparison.gutDesc}</p>
                    </div>
                </div>
            </div>

            {/* Rules-Based - Gold/Premium */}
            <div className="rounded-xl border border-[#d6b16b]/30 bg-white p-6 shadow-premium relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#d6b16b]" />
                <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#d6b16b]/10 text-[#b78b45] flex items-center justify-center shrink-0">
                        <Compass className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-[#b78b45] mb-1">{comparison.rulesTitle}</div>
                        <p className="text-sm text-slate-700 leading-relaxed font-medium">{comparison.rulesDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
