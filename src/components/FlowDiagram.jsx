import React from "react";
import Activity from "lucide-react/dist/esm/icons/activity";
import { ICON_MAP, BRAND } from "../data/content";

export default function FlowDiagram({ flow }) {
    return (
        <div className="border border-slate-200 rounded-2xl bg-white shadow-sm p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Process overview</h4>
                <span className="text-xs text-slate-500">{flow.map((step) => step.label).join(" → ")}</span>
            </div>
            <div className="relative mt-6 flex flex-col gap-6 md:flex-row">
                <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-slate-200" />
                {flow.map((step, idx) => {
                    const Icon = ICON_MAP[step.icon] || Activity;
                    return (
                        <div key={step.label} className="relative flex-1 bg-slate-50 rounded-2xl border border-slate-100 p-5 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-slate-900">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-wide text-slate-500">Step {idx + 1}</div>
                                    <div className="text-base font-semibold text-slate-900">{step.label}</div>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                            <div
                                className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-white"
                                style={{ backgroundColor: idx === flow.length - 1 ? BRAND.gold : BRAND.slate }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
