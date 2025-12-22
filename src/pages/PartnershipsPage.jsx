import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import PageHeader from "../components/PageHeader";
import PartnershipBridge from "../components/PartnershipBridge";

export default function PartnershipsPage({ t }) {
    const mouAnnouncement = t?.insights?.items?.find((item) => item.slug === "fides-aureus-sigma-capital-strategic-partnership");
    return (
        <div className="bg-white">
            <SEO
                title={t.nav.partnerships}
                description={t.partnerships.intro}
                url="/partnerships"
            />
            <PageHeader
                title={t.nav.partnerships}
                subtitle={t.partnerships.intro}
                image="/assets/others/institution_partnership_1.png"
                parentSection="Ecosystem"
            />
            <div className="mx-auto max-w-6xl px-6 space-y-12 pb-24">
                <PartnershipBridge roles={t.partnerships.roles} />

                {mouAnnouncement && (
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">{mouAnnouncement.category}</div>
                        <h3 className="text-2xl font-serif font-medium text-slate-900 mb-3">{mouAnnouncement.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">{mouAnnouncement.summary}</p>
                        <Link
                            to={`/insights/${mouAnnouncement.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#D4AF37] transition-colors"
                        >
                            {t.insights.readMore} →
                        </Link>
                    </div>
                )}

                {/* Key Mechanics / Text Content */}
                <div className="grid gap-12 md:grid-cols-2 items-start">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-medium text-slate-900">{t.partnerships.mechanicsTitle}</h3>
                        <div className="space-y-4 text-slate-700 leading-relaxed">
                            <p>{t.partnerships.paragraphs[0]}</p>
                            <p>{t.partnerships.paragraphs[2]}</p>
                            <p>{t.partnerships.paragraphs[4]}</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">{t.partnerships.investorNoticeTitle}</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                                <p className="text-sm text-slate-600">{t.partnerships.paragraphs[1]}</p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                                <p className="text-sm text-slate-600">{t.partnerships.paragraphs[3]}</p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                                <p className="text-sm text-slate-600">{t.partnerships.paragraphs[6]}</p>
                            </li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <a
                                href="https://fides.com.vn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:text-[#b59355] transition-colors"
                            >
                                {t.partnerships.cta} <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Roles Section */}
                <div className="grid gap-6 md:grid-cols-3">
                    {t.partnerships.roles.map((role, idx) => (
                        <div key={role.title} className="relative bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-[#D4AF37] transition-colors duration-300" />
                            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                                {role.roleLabel}
                            </div>
                            <h4 className="text-xl font-serif font-medium text-slate-900 mb-4">{role.title}</h4>
                            <ul className="space-y-3">
                                {role.bullets.map((item) => (
                                    <li key={item} className="flex gap-3 items-start text-sm text-slate-600">
                                        <span className="text-[#D4AF37] mt-0.5">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
