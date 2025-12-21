import React from "react";
import Landmark from "lucide-react/dist/esm/icons/landmark";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { ICON_MAP } from "../data/content";

export default function PartnershipBridge({ roles }) {
    const nodes = roles?.map((role) => ({
        title: role.title,
        subtitle: role.bullets?.[0],
    })) ?? [];
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {nodes.map((node, idx) => {
                    const iconKey = idx === 0 ? "building" : idx === 1 ? "shield-check" : "activity";
                    const Icon = ICON_MAP[iconKey] || Landmark;
                    return (
                        <React.Fragment key={node.title}>
                            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-slate-900/5 flex items-center justify-center text-slate-900 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wide text-slate-500 font-medium mb-1">
                                            {idx === 0 ? "Step 1" : idx === 1 ? "Step 2" : "Step 3"}
                                        </div>
                                        <div className="text-lg font-serif font-semibold text-slate-900">{node.title}</div>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{node.subtitle}</p>
                            </div>
                            {idx < nodes.length - 1 && (
                                <div className="hidden md:flex items-center justify-center px-4">
                                    <ArrowRight className="h-6 w-6 text-[#D4AF37]" />
                                </div>
                            )}
                            {idx < nodes.length - 1 && (
                                <div className="md:hidden flex justify-center py-2">
                                    <ArrowRight className="h-6 w-6 text-[#D4AF37] rotate-90" />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}
