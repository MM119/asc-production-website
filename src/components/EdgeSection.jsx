import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";

export default function EdgeSection({ data }) {
    return (
        <div className="relative rounded-2xl overflow-hidden p-8 md:p-10 group">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/assets/others/hcmc_skyline_1.png"
                    alt="Ho Chi Minh City Skyline"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-slate-900/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h4 className="text-2xl font-serif font-medium text-white mb-8">{data.title}</h4>
                <div className="grid gap-6 md:grid-cols-2">
                    {data.bullets.map((item) => (
                        <div key={item} className="flex gap-4 items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#D4AF37] shrink-0 mt-1" />
                            <p className="text-base text-slate-200 leading-relaxed font-light">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
