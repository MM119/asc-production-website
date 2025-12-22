import React from "react";
import FileText from "lucide-react/dist/esm/icons/file-text";
import PageHeader from "../components/PageHeader";
import InsightCard from "../components/InsightCard";

export default function InsightsPage({ t }) {
    return (
        <div className="bg-white">
            <PageHeader
                title={t.insights.sectionTitle}
                subtitle={t.insights.intro}
                image="/assets/others/office_minimal_modern_1.png"
                parentSection="Research"
            />
            <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-8 md:space-y-12 pb-12 md:pb-24">
                <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                    {t.insights.items.map((item) => (
                        <InsightCard
                            key={item.slug}
                            item={item}
                            readMoreLabel={t.insights.readMore}
                            comingSoonLabel={t.insights.comingSoonLabel}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

