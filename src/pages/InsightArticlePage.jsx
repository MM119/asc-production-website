import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { INSIGHTS_CONTENT } from "../data/content";

const prefixBase = (src) => {
    if (!src) return src;
    const BASE = import.meta.env.BASE_URL;
    return src.startsWith("/") ? `${BASE}${src.slice(1)}` : src;
};

export default function InsightArticlePage({ lang, t }) {
    const { slug } = useParams();
    const article = INSIGHTS_CONTENT[slug]?.[lang];
    if (!article) {
        return <Navigate to="/insights" replace />;
    }
    const meta = t.insights.items.find((item) => item.slug === slug);
    if (meta?.comingSoon) {
        return <Navigate to="/insights" replace />;
    }
    const breadcrumb = meta ? `${t.insights.sectionTitle} • ${meta.category}` : t.insights.sectionTitle;
    const heroImage = article.heroImage;
    const gallery = article.gallery || [];
    return (
        <div className="py-16 bg-white">
            <div className="mx-auto max-w-3xl px-4 space-y-4">
                <span className="text-xs uppercase tracking-wide text-slate-500">{breadcrumb}</span>
                <h1 className="text-3xl font-semibold text-slate-900">{article.title}</h1>
                {article.dateLine && <p className="text-sm text-slate-500">{article.dateLine}</p>}
                {heroImage && (
                    <figure className="pt-4 space-y-2">
                        <img
                            src={prefixBase(heroImage.src)}
                            alt={heroImage.alt || article.title}
                            className="w-full rounded-2xl border border-slate-200 shadow-sm"
                            loading="lazy"
                        />
                        {heroImage.caption && <figcaption className="text-xs text-slate-500">{heroImage.caption}</figcaption>}
                    </figure>
                )}
                <div className="space-y-4 text-slate-700 leading-relaxed">
                    {article.body.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
                {gallery.length > 0 && (
                    <div className="grid gap-6 pt-2 md:grid-cols-2">
                        {gallery.map((image, idx) => (
                            <figure key={`${image.src}-${idx}`} className="space-y-2">
                                <img
                                    src={prefixBase(image.src)}
                                    alt={image.alt || article.title}
                                    className="w-full rounded-2xl border border-slate-200 shadow-sm"
                                    loading="lazy"
                                />
                                {image.caption && <figcaption className="text-xs text-slate-500">{image.caption}</figcaption>}
                            </figure>
                        ))}
                    </div>
                )}
                <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-slate-900 font-semibold">
                    ← {t.insights.backToInsights}
                </Link>
            </div>
        </div>
    );
}
