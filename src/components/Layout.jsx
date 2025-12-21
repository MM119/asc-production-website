import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import { LOGO_SRC, NAV_LINKS } from "../data/content";

export default function Layout({ t, lang, setLang, children }) {
    const location = useLocation();
    const [cookieDismissed, setCookieDismissed] = useState(false);
    const [logoOk, setLogoOk] = useState(true);

    return (
        <div className="min-h-screen bg-[#f7f5f2] flex flex-col font-sans text-slate-900">
            <div className="w-full bg-slate-900 text-slate-100">
                <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="opacity-90">Systematic • Vietnam Focus • Founded 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            className={`px-2 py-1 rounded-md cursor-pointer ${lang === "en" ? "bg-slate-800 text-white" : "hover:bg-slate-800"}`}
                            onClick={() => setLang("en")}
                        >
                            EN
                        </button>
                        <button
                            className={`px-2 py-1 rounded-md cursor-pointer ${lang === "vi" ? "bg-slate-800 text-white" : "hover:bg-slate-800"}`}
                            onClick={() => setLang("vi")}
                        >
                            VI
                        </button>
                    </div>
                </div>
            </div>

            <header className="sticky top-0 z-50 glass-panel transition-all duration-300">
                <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        {logoOk ? (
                            <img
                                src={LOGO_SRC}
                                alt="Aureus Sigma Capital"
                                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                                onError={() => setLogoOk(false)}
                            />
                        ) : (
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B78B45] flex items-center justify-center font-bold text-slate-900 shadow-lg">
                                ASC
                            </div>
                        )}
                        <div className="hidden sm:block">
                            <div className="font-serif font-semibold text-slate-900 text-lg tracking-tight">Aureus Sigma Capital</div>
                            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Systematic Vietnam Equities</div>
                        </div>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-1 py-2 border-b-2 transition-all duration-300 hover:text-slate-900 ${location.pathname === item.path
                                    ? "border-[#D4AF37] text-slate-900"
                                    : "border-transparent hover:border-slate-300"
                                    }`}
                            >
                                {t.nav[item.labelKey]}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="bg-slate-900 text-slate-300">
                <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-[2fr,1fr] text-sm leading-relaxed">
                    <div className="space-y-4">
                        <p className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">Disclaimer</p>
                        <p className="text-slate-400 max-w-2xl">
                            {t.legal.body}
                        </p>
                    </div>
                    <div className="space-y-4 text-sm">
                        <div className="font-serif text-xl text-slate-100 tracking-tight">Aureus Sigma Capital</div>
                        <div className="flex flex-col gap-2 text-slate-400">
                            <a href={`mailto:${t.contact.email}`} className="hover:text-[#D4AF37] transition-colors">{t.contact.email}</a>
                            <span>{t.contact.note}</span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 tracking-wide">{t.legal.rights}</div>
            </footer>

            {!cookieDismissed && (
                <div className="fixed bottom-4 inset-x-0 px-4 z-40">
                    <div className="mx-auto max-w-3xl bg-white border border-slate-200 rounded-xl shadow flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-4 py-3">
                        <p className="text-xs text-slate-600">{t.cookie.text}</p>
                        <button
                            className="px-3 py-1.5 text-xs rounded-md bg-slate-900 text-white"
                            onClick={() => setCookieDismissed(true)}
                        >
                            {t.cookie.accept}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
