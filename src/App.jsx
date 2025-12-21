import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { i18n } from "./data/content";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import SolutionsPage from "./pages/SolutionsPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import InsightsPage from "./pages/InsightsPage";
import InsightArticlePage from "./pages/InsightArticlePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

// Get initial language from localStorage, defaulting to 'en'
const getInitialLang = () => {
  try {
    const stored = localStorage.getItem("asc-lang");
    return stored === "vi" ? "vi" : "en";
  } catch {
    return "en";
  }
};

export default function App() {
  const [lang, setLang] = useState(getInitialLang);

  // Persist language to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("asc-lang", lang);
    } catch {
      // localStorage not available
    }
  }, [lang]);
  const t = useMemo(() => i18n[lang], [lang]);

  return (
    <Router>
      <ScrollToTop />
      <Layout t={t} lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
          <Route path="/what-we-do" element={<WhatWeDoPage t={t} />} />
          <Route path="/solutions" element={<SolutionsPage t={t} />} />
          <Route path="/partnerships" element={<PartnershipsPage t={t} />} />
          <Route path="/insights" element={<InsightsPage t={t} />} />
          <Route path="/insights/:slug" element={<InsightArticlePage lang={lang} t={t} />} />
          <Route path="/about" element={<AboutPage t={t} />} />
          <Route path="/contact" element={<ContactPage t={t} lang={lang} />} />
          <Route path="*" element={<NotFoundPage lang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
}
