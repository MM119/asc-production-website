import React from "react";

export default function HumanJudgement({ data }) {
    return (
        <div className="border border-slate-200 rounded-2xl bg-white p-6">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">{data.title}</h4>
            <p className="text-sm text-slate-600 mt-2">{data.intro}</p>
            <ul className="list-disc ml-5 text-sm text-slate-600 space-y-2 mt-2">
                {data.steps.map((step) => (
                    <li key={step}>{step}</li>
                ))}
            </ul>
            {data.note && <p className="text-xs text-slate-500 mt-2">{data.note}</p>}
        </div>
    );
}
