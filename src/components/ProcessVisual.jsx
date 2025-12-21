import React from "react";

export default function ProcessVisual() {
    const BASE = import.meta.env.BASE_URL;
    return (
        <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] border border-slate-200 bg-slate-50">
            <img
                src={`${BASE}assets/others/hcmc_skyline_1.png`}
                alt="Ho Chi Minh City skyline representing the vibrant Vietnamese market"
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </div>
    );
}
