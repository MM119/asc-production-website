import React from "react";

export default function TeamCard({ name, title, bio, photo }) {
    // If title is not provided, try to extract it from name (legacy support)
    let fullName = name;
    let role = title;

    if (!role && name.includes(" — ")) {
        const parts = name.split(" — ");
        fullName = parts[0];
        role = parts[1];
    }

    return (
        <div className="bg-white border border-slate-200 rounded-xl md:rounded-2xl shadow-sm flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 p-4 md:p-8 hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#f4f6f8] flex items-center justify-center overflow-hidden ring-4 ring-slate-50 shrink-0 shadow-inner">
                <img src={photo} alt={fullName} className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-slate-900">{fullName}</h3>
                {role && <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b78b45] mt-1 md:mt-2 mb-3 md:mb-4">{role}</p>}
                <div className="space-y-2 md:space-y-3">
                    {Array.isArray(bio) ? (
                        bio.map((paragraph, idx) => (
                            <p key={idx} className="text-sm md:text-base text-slate-600 leading-relaxed">
                                {paragraph}
                            </p>
                        ))
                    ) : (
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">{bio}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

