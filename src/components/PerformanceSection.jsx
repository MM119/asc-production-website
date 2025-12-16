import React from "react";
import FileText from "lucide-react/dist/esm/icons/file-text";
import BarChart2 from "lucide-react/dist/esm/icons/bar-chart-2";
import History from "lucide-react/dist/esm/icons/history";
import ClipboardCheck from "lucide-react/dist/esm/icons/clipboard-check";

export default function PerformanceSection({ data }) {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-[#d6b16b] rounded-full"></div>
                <h3 className="text-2xl font-serif font-semibold text-slate-900">{data.title}</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Presentation */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-slate-900">Presentation</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{data.intro}</p>
                    <ul className="space-y-2">
                        {data.presentation.map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-slate-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Metrics */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-emerald-50 rounded-lg">
                            <BarChart2 className="h-5 w-5 text-emerald-600" />
                        </div>
                        <h4 className="font-semibold text-slate-900">{data.metricsTitle}</h4>
                    </div>
                    <ul className="space-y-2">
                        {data.metrics.map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-slate-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* History */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-amber-50 rounded-lg">
                            <History className="h-5 w-5 text-amber-600" />
                        </div>
                        <h4 className="font-semibold text-slate-900">{data.historyTitle}</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{data.historyIntro}</p>
                    <ul className="space-y-2 mb-3">
                        {data.history.map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-slate-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-slate-400 italic">{data.historyNote}</p>
                </div>

                {/* Reporting */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <ClipboardCheck className="h-5 w-5 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-slate-900">{data.reportingTitle}</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{data.reportingBody}</p>
                </div>
            </div>
        </div>
    );
}
