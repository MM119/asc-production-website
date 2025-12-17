import React from "react";
import FileText from "lucide-react/dist/esm/icons/file-text";
import SectionTitle from "./SectionTitle";
import InsightCard from "./InsightCard";

export default function InsightsPreview({ t }) {
    return (
        <section className="py-16 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4">
                <SectionTitle icon={FileText} title={t.insights.sectionTitle} subtitle={t.insights.intro} />
                <div className="grid gap-6 md:grid-cols-3">
                    {t.insights.items.map((item) => (
                        <InsightCard key={item.slug} item={item} readMoreLabel={t.insights.readMore} />
                    ))}
                </div>
            </div>
        </section>
    );
}
