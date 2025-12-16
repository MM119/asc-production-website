import React from "react";
import Users from "lucide-react/dist/esm/icons/users";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import PageHeader from "../components/PageHeader";
import TeamCard from "../components/TeamCard";
import { TEAM_PHOTOS } from "../data/content";

export default function AboutPage({ t }) {
    const highlights = [
        { label: "Systematic discipline", body: "Rules-based research and governance tailored to Vietnam.", icon: BookOpen },
        { label: "Vietnam focus", body: "Dedicated to listed Vietnamese equities and local data.", icon: MapPin },
        { label: "Licensed partners", body: "Implemented via regulated managers such as FIDES.", icon: ShieldCheck },
    ];
    const factSheet = [
        { label: "Founded", value: "2025" },
        { label: "Strategy", value: "Factor-based Vietnamese equities" },
        { label: "Implementation", value: "Via licensed managers (e.g., FIDES)" },
    ];
    return (
        <div className="bg-white">
            <PageHeader
                title={t.about.title}
                subtitle={t.about.intro}
                image="/assets/about/office-background.jpg"
                parentSection="Who We Are"
            />
            <div className="mx-auto max-w-6xl px-6 pb-24">
                <div className="space-y-10">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                        <div className="space-y-4 text-slate-700 leading-[1.55] max-w-2xl">
                            {Array.isArray(t.about.details) &&
                                t.about.details.map((paragraph, idx) => (
                                    <p key={idx} className={idx === 0 ? "text-lg font-medium text-slate-900" : undefined}>
                                        {paragraph}
                                    </p>
                                ))}
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-[#d6b16b] border-x border-b border-slate-100">
                            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.2em] mb-6">Fact sheet</h3>
                            <dl className="space-y-4 text-sm">
                                {factSheet.map((item) => (
                                    <div key={item.label} className="flex justify-between gap-4 border-b border-slate-100 pb-3 last:border-0">
                                        <dt className="text-slate-500 uppercase tracking-wide text-xs font-medium">{item.label}</dt>
                                        <dd className="font-semibold text-slate-900 text-right">{item.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {highlights.map((item, idx) => (
                            <div key={item.label} className="border border-slate-200 rounded-lg bg-white p-5 hover:border-[#d6b16b]/50 transition-colors duration-300 group">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-xs uppercase tracking-wide text-[#b78b45] font-bold">0{idx + 1}</div>
                                    <item.icon className="h-5 w-5 text-slate-400 group-hover:text-[#d6b16b] transition-colors" />
                                </div>
                                <div className="text-base font-serif font-semibold text-slate-900">{item.label}</div>
                                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Leadership Section - Consolidated */}
                {Array.isArray(t.about.bioDetails) && t.about.bioDetails.length > 0 && (
                    <div className="mt-16 space-y-8">
                        <h3 className="text-2xl font-serif font-semibold text-slate-900">Leadership</h3>
                        <div className="space-y-6">
                            {t.about.bioDetails.map((bio) => {
                                // Map bioDetails to TeamCard props
                                // We need to match the photo based on the name or some ID. 
                                // Since we don't have IDs, we'll use a simple mapping or assumption.
                                // content.js has TEAM_PHOTOS.founder and cofounder.
                                // bioDetails[0] is Founder, bioDetails[1] is Co-Founder.
                                const isFounder = bio.name.includes("Duc");
                                const photo = isFounder ? TEAM_PHOTOS.founder : TEAM_PHOTOS.cofounder;

                                return (
                                    <TeamCard
                                        key={bio.name}
                                        name={bio.name}
                                        title={bio.title}
                                        bio={bio.body}
                                        photo={photo}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
