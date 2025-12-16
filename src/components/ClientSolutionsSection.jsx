import React from "react";

export default function ClientSolutionsSection({ data }) {
    return (
        <div className="border border-slate-200 rounded-2xl bg-white p-6 space-y-6">
            <div>
                <h3 className="text-xl font-semibold text-slate-900">{data.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{data.intro}</p>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">{data.objectivesTitle}</h4>
                <div className="mt-3 grid gap-4 md:grid-cols-3">
                    {data.objectives.map((item) => (
                        <div key={item.title} className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                            <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                            <p className="text-sm text-slate-600 mt-1">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">{data.mandateTitle}</h4>
                <p className="text-sm text-slate-600 mt-2">{data.mandateIntro}</p>
                <ul className="list-disc ml-5 text-sm text-slate-600 space-y-1 mt-2">
                    {data.mandateBullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
                <p className="text-xs text-slate-500 mt-2">{data.mandateNote}</p>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">{data.reportingTitle}</h4>
                <p className="text-sm text-slate-600 mt-2">{data.reportingBody}</p>
            </div>
        </div>
    );
}
