import React from "react";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import SEO from "../components/SEO";
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
            <SEO
                title={t.hero.title}
                description={t.hero.subtitle}
            />
            <Hero t={t} />
            <section id="what-we-do" className="py-10 md:py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4 space-y-6 md:space-y-10">
                    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                        <div className="w-12 md:w-16 h-1 bg-[#D4AF37] mx-auto mb-4 md:mb-6" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-4 md:mb-6 tracking-tight">
                            {t.whatWeDo.sectionTitle || t.nav.whatWeDo}
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-light">
                            {t.whatWeDo.intro}
                        </p>
                    </div>
                    <div className="grid gap-8 md:gap-16 lg:grid-cols-2 items-start mb-12 md:mb-20">
                        <div className="space-y-2 order-2 lg:order-1 pt-2 md:pt-4">
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

