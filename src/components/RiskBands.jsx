import React from "react";
import Shield from "lucide-react/dist/esm/icons/shield";

export default function RiskBands({ bands }) {
    return (
        <div className="border border-slate-200 rounded-2xl bg-white p-6">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Normal moves vs large losses</h4>
            <div className="relative mt-8 flex flex-col gap-6 md:flex-row">
                <div className="hidden md:block absolute top-9 left-10 right-10 h-px bg-slate-200" />
                {bands.map((band, idx) => (
                    <div key={band.label} className="relative flex-1 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full flex items-center justify-center text-slate-900" style={{ backgroundColor: band.color + "33" }}>
                                <Shield className="h-5 w-5" style={{ color: band.color }} />
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-wide text-slate-500">Stage {idx + 1}</div>
                                <div className="text-base font-semibold text-slate-900">{band.label}</div>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{band.desc}</p>
                        <div
                            className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-white"
                            style={{ backgroundColor: band.color }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
