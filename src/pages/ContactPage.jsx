import React, { useState } from "react";
import Mail from "lucide-react/dist/esm/icons/mail";
import Loader2 from "lucide-react/dist/esm/icons/loader-2";
import PageHeader from "../components/PageHeader";

export default function ContactPage({ t, lang }) {
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const form = e.target;
        const data = {
            access_key: "03fdcd58-65b8-468c-a6a2-68f54c7b0da0",
            subject: "New Inquiry from ASC Website",
            from_name: "ASC Website Contact Form",
            name: form.name.value,
            email: form.email.value,
            organization: form.organization.value,
            message: form.message.value,
            investor_confirmation: form.investor_confirmation.checked
                ? "Confirmed - Institutional/Professional Investor"
                : "Not confirmed",
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");
        }
    };

    return (
        <div className="bg-white">
            <PageHeader
                title={t.contact.title}
                subtitle={t.contact.desc}
                image="/assets/others/hcmc_skyline_1.png"
                parentSection="Institutional Access"
            />
            <div className="mx-auto max-w-3xl px-4 pb-10 md:pb-16">
                {status === "success" ? (
                    <div className="border border-emerald-200 bg-emerald-50 text-emerald-900 rounded-xl p-4 md:p-6 text-sm md:text-base">
                        {lang === "en"
                            ? "Thank you for your inquiry. We will review your message and respond via email."
                            : "Cảm ơn bạn. Chúng tôi sẽ phản hồi sớm."}
                    </div>
                ) : (
                    <form
                        className="border border-slate-200 rounded-xl bg-white p-4 md:p-6 space-y-4 shadow-sm"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex items-center gap-2 text-slate-800">
                            <Mail className="h-5 w-5 shrink-0" />
                            <span className="text-sm font-semibold">{t.contact.title}</span>
                        </div>

                        {status === "error" && (
                            <div className="border border-red-200 bg-red-50 text-red-700 rounded-lg p-3 text-sm">
                                {errorMessage}
                            </div>
                        )}

                        <input
                            name="name"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                            placeholder={lang === "en" ? "Name" : "Họ và tên"}
                            required
                            disabled={status === "loading"}
                        />
                        <input
                            name="email"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                            placeholder="Email"
                            type="email"
                            required
                            disabled={status === "loading"}
                        />
                        <input
                            name="organization"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                            placeholder={lang === "en" ? "Organization" : "Tổ chức"}
                            required
                            disabled={status === "loading"}
                        />
                        <textarea
                            name="message"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                            rows={4}
                            placeholder={lang === "en" ? "Objectives or notes" : "Mục tiêu hoặc ghi chú"}
                            disabled={status === "loading"}
                        />
                        <label className="flex gap-3 text-sm text-slate-700">
                            <input
                                type="checkbox"
                                name="investor_confirmation"
                                value="I confirm that I am an institutional/professional investor or represent a licensed entity."
                                required
                                className="mt-0.5 h-5 w-5 shrink-0"
                                disabled={status === "loading"}
                            />
                            <span className="leading-relaxed">{lang === "en" ? "I confirm that I am an institutional/professional investor or represent a licensed entity." : "Tôi xác nhận là nhà đầu tư tổ chức/chuyên nghiệp hoặc đại diện tổ chức được cấp phép."}</span>
                        </label>
                        <button
                            type="submit"
                            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-6 py-3.5 text-sm font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    {lang === "en" ? "Sending..." : "Đang gửi..."}
                                </>
                            ) : (
                                t.contact.primaryCta
                            )}
                        </button>
                    </form>
                )}
                <div className="mt-4 md:mt-6 text-sm text-slate-600">
                    <span className="font-semibold text-slate-700">{t.contact.emailLabel}:</span>{" "}
                    <a href={`mailto:${t.contact.email}`} className="hover:text-[#D4AF37] transition-colors break-all">
                        {t.contact.email}
                    </a>
                </div>
                <p className="mt-2 text-sm text-slate-600">{t.contact.note}</p>
            </div>
        </div>
    );
}

