import React from "react";
import Shield from "lucide-react/dist/esm/icons/shield";
import AlertTriangle from "lucide-react/dist/esm/icons/alert-triangle";
import Activity from "lucide-react/dist/esm/icons/activity";
import PieChart from "lucide-react/dist/esm/icons/pie-chart";

export default function RiskVisual({ block }) {
    if (!block) return null;

    const points = block.points || [];
    const icons = [PieChart, Activity, AlertTriangle, Shield];

    return (
        <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-8">
                <div>
                    <div className="h-1 w-12 bg-[#D4AF37] mb-4"></div>
                    <h3 className="text-3xl font-serif font-medium text-slate-900 mb-4">{block.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">{block.intro || block.body}</p>
                </div>

                {points.length > 0 && (
                    <div className="grid gap-3">
                        {points.map((point, idx) => {
                            const Icon = icons[idx] || Shield;
                            return (
                                <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-[#D4AF37]/30 hover:shadow-md transition-all duration-300">
                                    <div className="p-2 bg-[#f4f6f8] rounded-lg shrink-0">
                                        <Icon className="h-5 w-5 text-[#D4AF37]" />
                                    </div>
                                    <p className="text-sm text-slate-700 leading-relaxed pt-1">{point}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xl aspect-[4/3] group">
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                    src="/assets/others/boats_calm_water_2.png"
                    alt="Ships navigating calm waters"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
