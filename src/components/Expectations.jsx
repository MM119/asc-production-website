import Target from "lucide-react/dist/esm/icons/target";
import AlertCircle from "lucide-react/dist/esm/icons/alert-circle";

export default function Expectations({ data }) {
    return (
        <div className="border border-slate-200 rounded-2xl bg-white p-8 space-y-6">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Target className="h-5 w-5 text-[#D4AF37]" />
                    <h4 className="text-lg font-serif font-semibold text-slate-900">{data.title}</h4>
                </div>
                <ul className="space-y-3">
                    {data.goals.map((goal) => (
                        <li key={goal} className="flex gap-3 text-sm text-slate-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                            <span className="leading-relaxed">{goal}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <AlertCircle className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-500 leading-relaxed">{data.disclaimer}</p>
            </div>
        </div>
    );
}
