import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { INSIGHTS_CONTENT } from "../data/content";

export default function InsightArticlePage({ lang, t }) {
    const { slug } = useParams();
    const article = INSIGHTS_CONTENT[slug]?.[lang];
    if (!article) {
        return <Navigate to="/insights" replace />;
    }
    const meta = t.insights.items.find((item) => item.slug === slug);
    const breadcrumb = meta ? `${t.insights.sectionTitle} • ${meta.category}` : t.insights.sectionTitle;
    return (
        <div className="py-16 bg-white">
            <div className="mx-auto max-w-3xl px-4 space-y-4">
                <span className="text-xs uppercase tracking-wide text-slate-500">{breadcrumb}</span>
                <h1 className="text-3xl font-semibold text-slate-900">{article.title}</h1>
                {article.dateLine && <p className="text-sm text-slate-500">{article.dateLine}</p>}
                <div className="space-y-4 text-slate-700 leading-relaxed">
                    {article.body.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
                <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-slate-900 font-semibold">
                    ← Back to insights
                </Link>
            </div>
        </div>
    );
}
