import React from "react";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ProcessVisual from "../components/ProcessVisual";
import NarrativeCard from "../components/NarrativeCard";
import ComparisonCard from "../components/ComparisonCard";
import InsightsPreview from "../components/InsightsPreview";

export default function HomePage({ t }) {
    const previewBlocks = t.whatWeDo.blocks.slice(0, 2);
    return (
        <div>
            <Hero t={t} />
            <section id="what-we-do" className="py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4 space-y-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="w-16 h-1 bg-[#d6b16b] mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-6 tracking-tight">
                            {t.whatWeDo.sectionTitle || t.nav.whatWeDo}
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-light">
                            {t.whatWeDo.intro}
                        </p>
                    </div>
                    <div className="grid gap-16 lg:grid-cols-2 items-start mb-20">
                        <div className="space-y-2 order-2 lg:order-1 pt-4">
                            {previewBlocks.map((block, idx) => (
                                <NarrativeCard key={block.title} item={block} index={idx} />
                            ))}
                        </div>
                        <div className="order-1 lg:order-2 h-full">
                            <ProcessVisual />
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <ComparisonCard comparison={t.whatWeDo.comparison} />
                    </div>
                </div>
            </section>
            <InsightsPreview t={t} />
        </div>
    );
}
