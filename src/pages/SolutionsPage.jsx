import React from "react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import ClientSolutionsSection from "../components/ClientSolutionsSection";

export default function SolutionsPage({ t }) {
    return (
        <div className="bg-white">
            <SEO
                title={t.solutions?.title}
                description={t.solutions?.intro}
                url="/solutions"
            />
            <PageHeader
                title={t.solutions?.title || "Client Solutions"}
                subtitle={t.solutions?.intro || "Tailored mandates and transparent reporting for institutional allocators."}
                image="/assets/others/investment_office_modern_2.png"
                parentSection="What We Offer"
            />
            <div className="mx-auto max-w-6xl px-6 pb-24">
                {t.clientSolutions && <ClientSolutionsSection data={t.clientSolutions} />}
            </div>
        </div>
    );
}
