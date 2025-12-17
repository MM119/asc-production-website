import React from "react";

export default function SectionTitle({ icon: Icon, title, subtitle }) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-3">
                {Icon && <Icon className="h-6 w-6 text-slate-700" />}
                <h2 className="text-2xl font-semibold text-slate-900 heading-serif">{title}</h2>
            </div>
            {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        </div>
    );
}
