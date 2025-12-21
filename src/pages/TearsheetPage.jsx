import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";
import Printer from "lucide-react/dist/esm/icons/printer";
import Download from "lucide-react/dist/esm/icons/download";
import TrendingUp from "lucide-react/dist/esm/icons/trending-up";
import Activity from "lucide-react/dist/esm/icons/activity";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import Globe from "lucide-react/dist/esm/icons/globe";

// --- Mock Data ---

const PERFORMANCE_DATA = [
    { date: "Jan", strategy: 100, benchmark: 100 },
    { date: "Feb", strategy: 102.5, benchmark: 101.2 },
    { date: "Mar", strategy: 104.8, benchmark: 102.5 },
    { date: "Apr", strategy: 103.2, benchmark: 101.8 },
    { date: "May", strategy: 106.5, benchmark: 103.4 },
    { date: "Jun", strategy: 108.9, benchmark: 104.1 },
    { date: "Jul", strategy: 111.2, benchmark: 105.5 },
    { date: "Aug", strategy: 110.5, benchmark: 106.2 },
    { date: "Sep", strategy: 113.8, benchmark: 107.1 },
    { date: "Oct", strategy: 116.4, benchmark: 108.5 },
    { date: "Nov", strategy: 119.2, benchmark: 109.8 },
    { date: "Dec", strategy: 122.5, benchmark: 111.2 },
];

const ALLOCATION_DATA = [
    { name: "Equities (VN)", value: 45 },
    { name: "Fixed Income", value: 30 },
    { name: "Derivatives", value: 15 },
    { name: "Cash", value: 10 },
];

const MONTHLY_RETURNS = [
    { year: 2025, data: [2.5, 2.2, -1.5, 3.2, 2.2, 2.1, -0.6, 3.0, 2.3, 2.4, 2.8, null] },
    { year: 2024, data: [1.8, -0.5, 2.1, 1.5, 2.8, -1.2, 3.5, 1.9, 2.2, -0.8, 3.1, 2.5] },
    { year: 2023, data: [2.1, 1.9, 1.5, -2.1, 1.8, 2.5, 1.2, -0.5, 2.8, 1.5, 2.2, 1.8] },
];

const COLORS = ["#0F172A", "#D4AF37", "#64748B", "#94A3B8"]; // Navy, Gold, Slate, Light Slate

// --- Components ---

const MetricCard = ({ label, value, subtext, icon: Icon }) => (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</span>
            {Icon && <Icon className="h-4 w-4 text-[#D4AF37]" />}
        </div>
        <div className="text-2xl font-serif font-medium text-slate-900">{value}</div>
        {subtext && <div className="text-xs text-slate-500 mt-1">{subtext}</div>}
    </div>
);

export default function TearsheetPage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-slate-100 py-12 font-sans">
            {/* Toolbar */}
            <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden">
                <button
                    onClick={handlePrint}
                    className="bg-slate-900 text-white px-4 py-2 rounded-md shadow-lg flex items-center gap-2 hover:bg-slate-800 transition-colors"
                >
                    <Printer className="h-4 w-4" /> Print PDF
                </button>
            </div>

            {/* A4 Container */}
            <div className="mx-auto bg-white shadow-2xl print:shadow-none w-[210mm] min-h-[297mm] p-[15mm] relative">

                {/* Header */}
                <header className="border-b-2 border-[#D4AF37] pb-6 mb-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-1">ASC Global Alpha Strategy</h1>
                        <p className="text-slate-500 text-sm">Monthly Performance Report • October 2025</p>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900 tracking-tight">AUREUS SIGMA</div>
                        <div className="text-xs text-[#D4AF37] font-medium tracking-widest uppercase">Capital</div>
                    </div>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-3 gap-8">

                    {/* Left Column (2/3) */}
                    <div className="col-span-2 space-y-8">

                        {/* Commentary */}
                        <section>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 border-b border-slate-200 pb-2">Manager's Commentary</h3>
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                The strategy delivered a robust return of <strong>+2.8%</strong> in October, outperforming the benchmark by 140bps.
                                Performance was driven by our systematic exposure to emerging market equities, particularly in the technology and
                                financial sectors. Our volatility control mechanism successfully navigated the mid-month market turbulence,
                                reducing exposure during the volatility spike and re-entering as stability returned. We remain constructive
                                on the outlook for Q4, maintaining a balanced allocation with a slight tilt towards value factors.
                            </p>
                        </section>

                        {/* Cumulative Performance Chart */}
                        <section>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 border-b border-slate-200 pb-2">Cumulative Performance (Growth of $100)</h3>
                            <div className="h-64 w-full border border-slate-100 rounded-lg bg-slate-50/50 p-2">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={PERFORMANCE_DATA}>
                                        <defs>
                                            <linearGradient id="colorStrategy" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0F172A" stopOpacity={0.1} />
                                                <stop offset="95%" stopColor="#0F172A" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} domain={['auto', 'auto']} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', fontSize: '12px' }}
                                            itemStyle={{ color: '#0F172A' }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="strategy"
                                            stroke="#0F172A"
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            fill="url(#colorStrategy)"
                                            name="ASC Strategy"
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="benchmark"
                                            stroke="#D4AF37"
                                            strokeWidth={2}
                                            strokeDasharray="4 4"
                                            fill="none"
                                            name="Benchmark"
                                        />
                                        <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </section>

                        {/* Monthly Returns Table */}
                        <section>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 border-b border-slate-200 pb-2">Monthly Returns (%)</h3>
                            <div className="overflow-hidden rounded-lg border border-slate-200">
                                <table className="w-full text-xs">
                                    <thead>
                                        <tr className="bg-slate-50 text-slate-500 border-b border-slate-200">
                                            <th className="py-2 px-2 text-left font-semibold">Year</th>
                                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
                                                <th key={m} className="py-2 px-1 font-medium text-center">{m}</th>
                                            ))}
                                            <th className="py-2 px-2 font-bold text-slate-900 text-right">YTD</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {MONTHLY_RETURNS.map((row) => {
                                            const ytd = row.data.reduce((acc, val) => acc + (val || 0), 0).toFixed(1);
                                            return (
                                                <tr key={row.year}>
                                                    <td className="py-2 px-2 font-medium text-slate-900">{row.year}</td>
                                                    {row.data.map((val, idx) => (
                                                        <td key={idx} className={`py-2 px-1 text-center ${val > 0 ? "text-[#047857]" : val < 0 ? "text-[#DC2626]" : "text-slate-400"
                                                            }`}>
                                                            {val !== null ? val.toFixed(1) : "-"}
                                                        </td>
                                                    ))}
                                                    <td className="py-2 px-2 text-right font-bold text-slate-900">{ytd}%</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>

                    {/* Right Column (1/3) */}
                    <div className="space-y-8">

                        {/* Key Metrics */}
                        <section className="space-y-3">
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 border-b border-slate-200 pb-2">Key Metrics</h3>
                            <MetricCard label="CAGR (Inception)" value="22.5%" subtext="Annualized Return" icon={TrendingUp} />
                            <MetricCard label="Sharpe Ratio" value="2.8" subtext="Risk-Adjusted Return" icon={Activity} />
                            <MetricCard label="Max Drawdown" value="-8.4%" subtext="Peak to Trough" icon={ShieldCheck} />
                            <MetricCard label="Volatility" value="12.1%" subtext="Annualized Std Dev" icon={Globe} />
                        </section>

                        {/* Asset Allocation */}
                        <section>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 border-b border-slate-200 pb-2">Asset Allocation</h3>
                            <div className="h-48 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={ALLOCATION_DATA}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={40}
                                            outerRadius={70}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {ALLOCATION_DATA.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Legend
                                            layout="vertical"
                                            verticalAlign="middle"
                                            align="right"
                                            iconType="circle"
                                            wrapperStyle={{ fontSize: '10px' }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </section>

                        {/* Fund Facts */}
                        <section>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 border-b border-slate-200 pb-2">Fund Facts</h3>
                            <ul className="text-xs space-y-2 text-slate-600">
                                <li className="flex justify-between">
                                    <span>Inception Date</span>
                                    <span className="font-medium text-slate-900">Jan 2023</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>AUM</span>
                                    <span className="font-medium text-slate-900">$25M</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Liquidity</span>
                                    <span className="font-medium text-slate-900">Monthly</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Min Investment</span>
                                    <span className="font-medium text-slate-900">$100,000</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Management Fee</span>
                                    <span className="font-medium text-slate-900">2.0%</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Performance Fee</span>
                                    <span className="font-medium text-slate-900">20%</span>
                                </li>
                            </ul>
                        </section>

                    </div>
                </div>

                {/* Footer */}
                <footer className="absolute bottom-[15mm] left-[15mm] right-[15mm] border-t border-slate-200 pt-4">
                    <div className="flex justify-between items-center text-[10px] text-slate-400">
                        <p>© 2025 Aureus Sigma Capital. All rights reserved.</p>
                        <p>Strictly Private & Confidential</p>
                    </div>
                    <p className="mt-2 text-[9px] text-slate-300 text-justify leading-tight">
                        Disclaimer: This document is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities.
                        Past performance is not indicative of future results. Investment involves risk, including possible loss of principal.
                        The information contained herein is believed to be reliable but is not guaranteed as to accuracy or completeness.
                    </p>
                </footer>
            </div>
        </div>
    );
}
