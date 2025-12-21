import React from "react";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import BarChart2 from "lucide-react/dist/esm/icons/bar-chart-2";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import HumanJudgement from "../components/HumanJudgement";
import ProcessVisual from "../components/ProcessVisual";
import NarrativeCard from "../components/NarrativeCard";
import FlowDiagram from "../components/FlowDiagram";
import RiskVisual from "../components/RiskVisual";
import RiskBands from "../components/RiskBands";
import EdgeSection from "../components/EdgeSection";
import Expectations from "../components/Expectations";
import PerformanceSection from "../components/PerformanceSection";

export default function WhatWeDoPage({ t }) {
    const mainBlocks = t.whatWeDo.blocks.slice(0, 3);
    const riskBlock = t.whatWeDo.blocks[3];
    return (
        <div className="bg-white">
            <PageHeader
                title={t.whatWeDo.sectionTitle || t.nav.whatWeDo}
                subtitle={t.whatWeDo.intro}
                image="/assets/others/quant_office_dark_1.png"
                parentSection="Our Approach"
            />
            <div className="mx-auto max-w-6xl px-6 space-y-16 pb-24">
                {Array.isArray(t.whatWeDo.principles) && (
                    <div className="grid gap-4 md:grid-cols-2">
                        {t.whatWeDo.principles.map((principle, idx) => {
                            const icons = [Cpu, BarChart2, MapPin, ShieldCheck];
                            const Icon = icons[idx] || Cpu;
                            return (
                                <div key={principle.label} className="border border-slate-200 rounded-xl bg-white p-6 shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold group-hover:text-[#D4AF37] transition-colors">{principle.label}</div>
                                        <Icon className="h-5 w-5 text-slate-400 group-hover:text-[#D4AF37] transition-colors" />
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">{principle.body}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
                {t.whatWeDo.objective && <p className="text-slate-600">{t.whatWeDo.objective}</p>}
                {Array.isArray(t.whatWeDo.process) && (
                    <div className="space-y-6">
                        <SectionTitle icon={BookOpen} title={t.whatWeDo.processTitle || t.whatWeDo.sectionTitle} subtitle={t.whatWeDo.processIntro} />
                        <div className="grid gap-4 md:grid-cols-2">
                            {t.whatWeDo.process.map((step, idx) => (
                                <div key={step.label} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-[#D4AF37]/30 transition-colors">
                                    <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">Step 0{idx + 1}</div>
                                    <div className="text-base font-serif font-semibold text-slate-900 mb-2">{step.label}</div>
                                    <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {t.whatWeDo.humanJudgement && <HumanJudgement data={t.whatWeDo.humanJudgement} />}
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <ProcessVisual />
                    <div className="space-y-6">
                        {mainBlocks.map((block) => (
                            <NarrativeCard key={block.title} item={block} />
                        ))}
                    </div>
                </div>
                <FlowDiagram flow={t.whatWeDo.flow} />
                {riskBlock && <RiskVisual block={riskBlock} />}
                <RiskBands bands={t.whatWeDo.riskBands} />
                {t.whatWeDo.edge && <EdgeSection data={t.whatWeDo.edge} />}
                {t.whatWeDo.expectations && <Expectations data={t.whatWeDo.expectations} />}
                {t.whatWeDo.performance && <PerformanceSection data={t.whatWeDo.performance} />}
            </div>
        </div>
    );
}
