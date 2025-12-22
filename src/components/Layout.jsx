import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import { LOGO_SRC, NAV_LINKS } from "../data/content";

export default function Layout({ t, lang, setLang, children }) {
    const location = useLocation();
    const [cookieDismissed, setCookieDismissed] = useState(false);
    const [logoOk, setLogoOk] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <div className="min-h-screen bg-[#f7f5f2] flex flex-col font-sans text-slate-900 overflow-x-hidden">
            {/* Top Bar */}
            <div className="w-full bg-slate-900 text-slate-100">
                <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 shrink-0" />
                        <span className="opacity-90 hidden sm:inline">Systematic • Vietnam Focus • Founded 2025</span>
                        <span className="opacity-90 sm:hidden text-[10px]">Systematic • Vietnam • 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            className={`px-2 py-1 rounded-md cursor-pointer text-xs ${lang === "en" ? "bg-slate-800 text-white" : "hover:bg-slate-800"}`}
                            onClick={() => setLang("en")}
                        >
                            EN
                        </button>
                        <button
                            className={`px-2 py-1 rounded-md cursor-pointer text-xs ${lang === "vi" ? "bg-slate-800 text-white" : "hover:bg-slate-800"}`}
                            onClick={() => setLang("vi")}
                        >
                            VI
                        </button>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 glass-panel transition-all duration-300">
                <div className="mx-auto max-w-6xl px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
                        {logoOk ? (
                            <img
                                src={LOGO_SRC}
                                alt="Aureus Sigma Capital"
                                className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                                onError={() => setLogoOk(false)}
                            />
                        ) : (
                            <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B78B45] flex items-center justify-center font-bold text-slate-900 shadow-lg text-sm">
                                ASC
                            </div>
                        )}
                        <div className="hidden md:block">
                            <div className="font-serif font-semibold text-slate-900 text-lg tracking-tight">Aureus Sigma Capital</div>
                            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Systematic Vietnam Equities</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-slate-600">
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-1 py-2 border-b-2 transition-all duration-300 hover:text-slate-900 whitespace-nowrap ${location.pathname === item.path
                                    ? "border-[#D4AF37] text-slate-900"
                                    : "border-transparent hover:border-slate-300"
                                    }`}
                            >
                                {t.nav[item.labelKey]}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6 text-slate-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-slate-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Overlay */}
                <div
                    className={`fixed inset-0 mobile-overlay transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none z-[-1]"
                        }`}
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Mobile Navigation Menu */}
                <nav
                    className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] mobile-menu-panel shadow-2xl transform transition-transform duration-300 ease-out z-50 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex items-center justify-between p-4 border-b border-slate-100">
                        <span className="font-serif font-semibold text-slate-900">Menu</span>
                        <button
                            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="h-5 w-5 text-slate-700" />
                        </button>
                    </div>
                    <div className="flex flex-col py-4">
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-6 py-4 text-base font-medium transition-all duration-200 flex items-center gap-3 ${location.pathname === item.path
                                    ? "bg-slate-50 text-slate-900 border-l-4 border-[#D4AF37]"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent"
                                    }`}
                            >
                                {t.nav[item.labelKey]}
                            </Link>
                        ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 bg-slate-50">
                        <div className="text-xs text-slate-500 text-center">
                            © 2025 Aureus Sigma Capital
                        </div>
                    </div>
                </nav>
            </header>

            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300">
                <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-16 grid gap-8 md:gap-10 md:grid-cols-[2fr,1fr] text-sm leading-relaxed">
                    <div className="space-y-4">
                        <p className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">Disclaimer</p>
                        <p className="text-slate-400 max-w-2xl text-sm">
                            {t.legal.body}
                        </p>
                    </div>
                    <div className="space-y-4 text-sm">
                        <div className="font-serif text-xl text-slate-100 tracking-tight">Aureus Sigma Capital</div>
                        <div className="flex flex-col gap-2 text-slate-400">
                            <a href={`mailto:${t.contact.email}`} className="hover:text-[#D4AF37] transition-colors break-all">{t.contact.email}</a>
                            <span>{t.contact.note}</span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-800 py-4 md:py-6 text-center text-xs text-slate-500 tracking-wide px-4">{t.legal.rights}</div>
            </footer>

            {/* Cookie Banner */}
            {!cookieDismissed && (
                <div className="fixed bottom-0 md:bottom-4 inset-x-0 px-0 md:px-4 z-40">
                    <div className="mx-auto max-w-3xl bg-white border-t md:border border-slate-200 md:rounded-xl shadow-lg flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-3">
                        <p className="text-xs text-slate-600 flex-1">{t.cookie.text}</p>
                        <button
                            className="px-4 py-2 text-xs rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors shrink-0 w-full sm:w-auto"
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
