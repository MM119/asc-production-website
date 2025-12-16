import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage({ lang }) {
    return (
        <div className="py-32 text-center">
            <h1 className="text-3xl font-semibold text-slate-900">{lang === "en" ? "Page not found" : "Không tìm thấy trang"}</h1>
            <Link to="/" className="mt-4 inline-flex items-center gap-2 text-slate-900 font-semibold">
                ← {lang === "en" ? "Back to home" : "Quay lại trang chủ"}
            </Link>
        </div>
    );
}
