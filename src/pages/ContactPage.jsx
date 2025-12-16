import React, { useState } from "react";
import Mail from "lucide-react/dist/esm/icons/mail";
import PageHeader from "../components/PageHeader";

export default function ContactPage({ t, lang }) {
    const [submitted, setSubmitted] = useState(false);
    return (
        <div className="bg-white">
            <PageHeader
                title={t.contact.title}
                subtitle={t.contact.desc}
                image="/assets/others/hcmc_skyline_1.png"
                parentSection="Institutional Access"
            />
            <div className="mx-auto max-w-3xl px-4 pb-16">
                {!submitted ? (
                    <form
                        className="border border-slate-200 rounded-xl bg-white p-6 space-y-4 shadow-sm"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSubmitted(true);
                        }}
                    >
                        <div className="flex items-center gap-2 text-slate-800">
                            <Mail className="h-5 w-5" />
                            <span className="text-sm font-semibold">{t.contact.title}</span>
                        </div>
                        <input className="w-full rounded-lg border border-slate-300 px-4 py-3" placeholder={lang === "en" ? "Name" : "Họ và tên"} required />
                        <input className="w-full rounded-lg border border-slate-300 px-4 py-3" placeholder="Email" type="email" required />
                        <input className="w-full rounded-lg border border-slate-300 px-4 py-3" placeholder={lang === "en" ? "Organization" : "Tổ chức"} required />
                        <textarea className="w-full rounded-lg border border-slate-300 px-4 py-3" rows={4} placeholder={lang === "en" ? "Objectives or notes" : "Mục tiêu hoặc ghi chú"} />
                        <label className="flex gap-2 text-sm text-slate-700">
                            <input type="checkbox" required className="mt-1" />
                            <span>{lang === "en" ? "I confirm that I am an institutional/professional investor or represent a licensed entity." : "Tôi xác nhận là nhà đầu tư tổ chức/chuyên nghiệp hoặc đại diện tổ chức được cấp phép."}</span>
                        </label>
                        <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium">
                            {t.contact.primaryCta}
                        </button>
                    </form>
                ) : (
                    <div className="border border-emerald-200 bg-emerald-50 text-emerald-900 rounded-xl p-6">
                        {lang === "en"
                            ? "Thank you for your inquiry. We will review your message and respond via email."
                            : "Cảm ơn bạn. Chúng tôi sẽ phản hồi sớm."}
                    </div>
                )}
                <p className="mt-6 text-sm text-slate-600">{t.contact.note}</p>
            </div>
        </div>
    );
}
