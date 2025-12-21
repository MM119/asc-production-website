import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Users from "lucide-react/dist/esm/icons/users";
import Mail from "lucide-react/dist/esm/icons/mail";
import FileText from "lucide-react/dist/esm/icons/file-text";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import Handshake from "lucide-react/dist/esm/icons/handshake";
import Compass from "lucide-react/dist/esm/icons/compass";
import Shield from "lucide-react/dist/esm/icons/shield";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import BarChart3 from "lucide-react/dist/esm/icons/bar-chart-3";
import Landmark from "lucide-react/dist/esm/icons/landmark";
import Clock from "lucide-react/dist/esm/icons/clock";
import Database from "lucide-react/dist/esm/icons/database";
import Sliders from "lucide-react/dist/esm/icons/sliders";
import Activity from "lucide-react/dist/esm/icons/activity";
import Network from "lucide-react/dist/esm/icons/network";
import Building2 from "lucide-react/dist/esm/icons/building-2";

import fidesEnMd from "../content/insights/fides-en.md?raw";
import fidesViMd from "../content/insights/fides-vi.md?raw";
import fidesPilotEnMd from "../content/insights/fides-pilot-en.md?raw";
import fidesPilotViMd from "../content/insights/fides-pilot-vi.md?raw";
import rulesEnMd from "../content/insights/rules-en.md?raw";
import rulesViMd from "../content/insights/rules-vi.md?raw";
import lossesEnMd from "../content/insights/losses-en.md?raw";
import lossesViMd from "../content/insights/losses-vi.md?raw";

export const LOGO_SRC = "/asc-logo-transparent.png";
export const TEAM_PHOTOS = {
    founder: "/team-duc.jpg",
    cofounder: "/team-minh.png",
};

export const BRAND = {
    navy: "#0F172A",
    gold: "#D4AF37",
    slate: "#334155",
};

export const ICON_MAP = {
    handshake: Handshake,
    compass: Compass,
    shield: Shield,
    "shield-check": ShieldCheck,
    clock: Clock,
    map: MapPin,
    rules: BookOpen,
    skyline: Landmark,
    process: BarChart3,
    database: Database,
    sliders: Sliders,
    activity: Activity,
    network: Network,
    building: Building2,
};

export const INSIGHT_ICONS = {
    handshake: Handshake,
    compass: Compass,
    shield: Shield,
};

const parseMarkdown = (md) =>
    (md || "")
        .trim()
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim());

export const i18n = {
    en: {
        nav: {
            home: "Home",
            whatWeDo: "What We Do",
            solutions: "Solutions",
            partnerships: "Partnerships",
            insights: "Insights",
            about: "About",
            contact: "Contact",
        },
        hero: {
            title: "Systematic Alpha in Vietnam",
            subtitle:
                "Aureus Sigma Capital (ASC) designs transparent, factor-based portfolios in Vietnam’s equity market, seeking attractive long-term, risk-adjusted returns with explicit drawdown controls. Through ASC’s licensed partners, institutional and professional investors can access these rules-based strategies within compliant mandates and products.",
            ctas: [
                { label: "Learn about ASC’s licensed partners", to: "/partnerships" },
                { label: "Explore our investment framework", to: "/what-we-do" },
            ],
            stats: [
                { label: "Strategies live since", value: "2025", icon: "clock" },
                { label: "Focus", value: "Vietnamese listed equities", icon: "map" },
                { label: "Implementation", value: "Via ASC’s licensed partners", icon: "shield-check" },
            ],
            highlights: [
                { label: "Institutional systematic discipline", body: "Decisions are grounded in data, documented research, and repeatable rules.", icon: "rules" },
                { label: "Vietnam-focused factor investing", body: "Portfolios tilt toward value, quality, and momentum in liquid Vietnamese equities.", icon: "skyline" },
                { label: "Explicit drawdown framework", body: "Portfolio construction targets long-term growth while actively managing capital behaviour during deep market stress.", icon: "shield" },
            ],
        },
        whatWeDo: {
            sectionTitle: "Why a structured approach matters in Vietnam",
            intro:
                "Vietnam’s equity market is fast-moving and often emotional. Prices can move sharply on headlines, flows, or policy expectations. Our philosophy is that investors are better served by rules-based, factor-driven strategies built on local data and explicit drawdown awareness.",
            principles: [
                { label: "Systematic", body: "Decisions are based on written rules, not ad hoc opinions or market stories." },
                { label: "Factor-driven", body: "Portfolios tilt toward value, quality, and momentum drivers." },
                { label: "Local by design", body: "Built on Vietnamese liquidity, regulation, and disclosure realities." },
                { label: "Risk-aware", body: "Drawdowns, liquidity, and behaviour are design inputs—not afterthoughts." },
            ],
            objective:
                "The objective is clear: seek to deliver attractive long-term, risk-adjusted returns from Vietnamese equities with a path that institutional allocators can understand, monitor, and challenge. ASC’s framework is anchored in well-documented value, quality, and momentum premia, complemented by a stability lens that incorporates low-volatility, drawdown behaviour, and liquidity considerations.",
            processTitle: "From philosophy to framework",
            processIntro: "We implement this philosophy as a research and engineering process that sits behind every ASC strategy.",
            process: [
                { label: "Data & diagnostics", body: "Collect and clean point-in-time data on Vietnamese companies and prices with a focus on liquidity and disclosure quality." },
                { label: "Factor research", body: "Identify how value, quality, and momentum have been rewarded across multiple market regimes, including stress periods." },
                { label: "Portfolio rules", body: "Codify insights into rules that determine what to own, how much to own, and how to adjust as fundamentals, prices, and risk change." },
                { label: "Testing & review", body: "Test changes before live deployment and review realised performance—including drawdowns—against expectations." },
            ],
            methodsTitle: "How we invest",
            methodsIntro: "Our core strategies apply ASC’s framework to a universe of liquid, exchange-listed Vietnamese equities.",
            blocks: [
                {
                    title: "Define the investable universe",
                    body:
                        "We focus on companies with sufficient trading volume, free float, and disclosure quality to support institutional execution and risk analysis. The universe is reviewed regularly as market depth evolves.",
                    icon: "database",
                },
                {
                    title: "Score companies on core factors",
                    body:
                        "Each company is evaluated across quality, value, and momentum characteristics, plus a stability lens that captures realised volatility, drawdown behaviour, and liquidity. These inputs combine into a structured profile that is updated on a defined schedule using point-in-time data.",
                    icon: "sliders",
                },
                {
                    title: "Construct the portfolio",
                    body:
                        "All eligible names compete side by side. Stronger, more resilient profiles receive larger but controlled allocations, while weaker or volatile names receive smaller weights or are excluded. Constraints cover concentration, factor exposure, turnover, and liquidity.",
                    icon: "compass",
                },
                {
                    title: "Risk Budgeting & Capital Preservation",
                    intro:
                        "Risk management is built into the framework. We use multiple layers of defense to make severe setbacks rarer and more manageable:",
                    points: [
                        "Diversification with limits keeps any single position or theme from dominating results.",
                        "Exposure controls monitor market sensitivity vs. mandate ranges.",
                        "Drawdown thresholds trigger gradual risk reductions—trimming volatile names or tilting toward quality.",
                        "We deliberately tilt away from uncompensated high volatility to reinforce the defensive profile.",
                    ],
                    icon: "shield",
                },
            ],
            humanJudgement: {
                title: "Human judgement and data working together",
                intro: "Our process is quantitative, but not automation for its own sake. Judgement enters where it adds the most value:",
                steps: [
                    "Selecting and cleaning the underlying market and company data.",
                    "Choosing which factors to emphasise and how to combine them.",
                    "Setting portfolio and risk limits that reflect Vietnamese market structure.",
                    "Reviewing how the portfolio behaves across different environments.",
                ],
                note: "Day-to-day implementation follows written rules so responses are consistent and auditable while research evolves in the background.",
            },
            flow: [
                { label: "Data", desc: "Prices, company information, market context.", icon: "database" },
                { label: "Rules", desc: "Predefined criteria for buying, sizing, and trimming.", icon: "sliders" },
                { label: "Portfolio", desc: "Diversified mix of leading, liquid Vietnamese stocks.", icon: "skyline" },
                { label: "Risk Checks", desc: "Limits and hedges to keep losses within tolerance.", icon: "shield-check" },
            ],
            comparison: {
                gutTitle: "Discretionary",
                gutDesc: "Subjective decisions often influenced by market noise.",
                rulesTitle: "Systematic",
                rulesDesc: "Disciplined execution grounded in statistical validation.",
            },
            riskBands: [
                { label: "Diversification with limits", desc: "Meaningful number of names across sectors, with caps to avoid concentrated bets.", color: "#CBD5E1" },
                { label: "Exposure controls", desc: "Monitor market sensitivity and adjust when risk moves outside mandate ranges.", color: "#94A3B8" },
                { label: "Drawdown ranges and responses", desc: "Track distance from peaks; reduce risk gradually when losses breach agreed thresholds.", color: "#D97706" },
            ],
            edge: {
                title: "Our edge in Vietnam",
                bullets: [
                    "Exclusive focus on Vietnamese equities calibrated to local data, liquidity, and regulation.",
                    "Transparent factor exposures (value, quality, momentum) instead of opaque black boxes.",
                    "Risk controls and drawdown awareness designed around emerging-market volatility.",
                    "Implementation through licensed managers that tailor mandates, reporting, and tax considerations.",
                ],
            },
            expectations: {
                title: "What investors can expect – and what they should not",
                goals: [
                    "Aim to deliver higher risk-adjusted returns than a simple “buy-the-index” approach over a full market cycle.",
                    "Limit the depth and duration of major drawdowns relative to the broad market.",
                    "Maintain a process that investors can understand, monitor, and challenge.",
                ],
                disclaimer:
                    "We do not promise outperformance in every period or protection from all market declines. Vietnam is a volatile market and equity investing involves the risk of capital loss. Our commitment is to a disciplined, transparent framework that treats risk management and drawdowns as central design problems, not marketing language.",
            },
            performance: {
                title: "Performance & Risk Analytics",
                intro: "How we present performance",
                presentation: [
                    "Results are shown net of estimated management fees and transaction costs unless noted.",
                    "Returns are compared against relevant benchmarks such as Vietnam’s main equity index.",
                    "We display multiple horizons (since inception plus rolling one-, three-, and five-year periods).",
                ],
                metricsTitle: "Risk and capital behaviour metrics",
                metrics: [
                    "Annualised volatility and tracking error.",
                    "Sharpe ratio and information ratio.",
                    "Maximum drawdown and time to recovery.",
                    "Exposure and concentration statistics by sector, factor, and single name.",
                ],
                historyTitle: "Live and simulated history",
                historyIntro:
                    "Vietnam remains a developing market, so live history is shorter than global indices. To give investors a fuller view we combine:",
                history: [
                    "Historical simulations built from point-in-time Vietnamese data to show how the framework behaves through different cycles and stress periods.",
                    "Realised live performance demonstrating how the framework operates with actual capital, trading costs, and implementation constraints.",
                ],
                historyNote:
                    "Backtests are tools, not promises—they help us and our investors understand sensitivity to different environments but are not forecasts. All results are accompanied by disclosures on methodology, assumptions, and limitations.",
                reportingTitle: "Access to detailed reporting",
                reportingBody:
                    "Institutional and professional investors can request detailed performance, risk, and attribution packs via ASC’s licensed partners, subject to product-level terms and governance requirements.",
            },
        },
        solutions: {
            title: "Client Solutions",
            intro: "Tailored mandates and transparent reporting for institutional allocators.",
        },
        partnerships: {
            intro:
                "ASC’s strategies are accessed through regulated mandates run by ASC’s licensed partners. ASC designs the systematic framework; licensed partners handle onboarding, suitability, execution, and regulatory reporting.",
            paragraphs: [
                "ASC works with licensed investment managers that provide regulated products and bespoke mandates, handle client onboarding and ongoing relationships, and implement portfolios with full regulatory reporting.",
                "Clients contract directly with the relevant licensed partner. That entity is responsible for ensuring suitability and compliance for each product or mandate.",
                "Aureus Sigma Capital is an independent, founder-owned quantitative firm focused exclusively on Vietnam’s equity market. We design and maintain the factor-based investment framework, provide research updates, portfolio construction rules, and risk analytics, and invest our own capital alongside investors who access the strategies through licensed partners.",
                "ASC does not manage client accounts or distribute products. Implementation is carried out exclusively by licensed partners.",
                "Under each partnership arrangement, responsibilities are clearly defined: ASC develops and maintains the systematic framework, while licensed partners decide how and where to deploy strategies, manage day-to-day portfolios under their licences, and deliver regulated reporting and client service. This separation supports institutional governance standards.",
                "As Vietnam’s markets deepen, ASC and its licensed partners plan to broaden the range of mandates and products that can incorporate ASC’s framework, while keeping research quality, risk control, and regulatory robustness at the centre.",
                "For investors interested in accessing ASC’s strategies, please contact an ASC licensed partner directly, or reach out to ASC for an introduction and more detail on how the framework is applied.",
            ],
            roles: [
                {
                    roleLabel: "The Capital",
                    title: "Investors",
                    bullets: ["Eligible local or cross-border investors", "Access regulated products via ASC’s licensed partners"],
                },
                {
                    roleLabel: "The Manager",
                    title: "Licensed partners",
                    bullets: ["Licensed managers under local regulation", "Client onboarding and servicing", "Portfolio implementation & reporting"],
                },
                {
                    roleLabel: "The Architect",
                    title: "Aureus Sigma Capital",
                    bullets: ["Designs rules-based strategies", "Provides research & risk inputs", "Monitors discipline against documented guardrails"],
                },
            ],
            cta: "View licensed partners",
            mechanicsTitle: "How the partnership works",
            investorNoticeTitle: "Important for Investors",
        },
        clientSolutions: {
            title: "Client Solutions",
            intro:
                "ASC’s framework supports mandates run by ASC’s licensed partners. We help structure solutions around specific objectives rather than leading with products.",
            objectivesTitle: "Solutions by client objective",
            objectives: [
                {
                    title: "Corporate treasuries",
                    body:
                        "For balance sheets seeking equity exposure with controlled downside risk, our quality-momentum strategies aim to participate in Vietnam’s growth while limiting deep, prolonged drawdowns relative to the market.",
                },
                {
                    title: "Pension funds and insurance portfolios",
                    body:
                        "For long-horizon capital, our diversified, factor-tilted portfolios provide systematic exposure to Vietnamese equities that can be analysed using familiar risk and factor metrics.",
                },
                {
                    title: "Family offices and HNW investors",
                    body:
                        "For sophisticated individuals and family capital, our rules-based approach offers a transparent complement to discretionary Vietnamese equity allocations, with clear documentation of process and risk controls.",
                },
            ],
            mandateTitle: "Mandate design parameters",
            mandateIntro:
                "Within the constraints of local regulation and each manager’s licences, strategies built on ASC’s framework can be tailored along dimensions such as:",
            mandateBullets: [
                "Target volatility and tracking-error ranges.",
                "Permissible sector and concentration limits.",
                "The role of cash and index futures in managing overall market exposure.",
                "Environmental, social, or governance screens where requested and feasible under local data availability.",
            ],
            mandateNote:
                "Minimum investment sizes, fee structures, and liquidity terms are set at the product or mandate level by licensed managers. ASC works with those partners to keep portfolio construction and reporting aligned with agreed risk and return objectives.",
            reportingTitle: "Reporting and transparency",
            reportingBody:
                "Institutional clients receive performance, risk, factor, and holdings reports from the licensed manager. ASC supports this by supplying analytics, diagnostics, and commentary on strategy behaviour, especially during stressed markets.",
        },
        insights: {
            sectionTitle: "Insights",
            intro:
                "We publish concise notes for investors who want to understand how we think about Vietnamese equities, risk management, and the role of systematic strategies in a broader portfolio. Each piece focuses on a single idea that matters for long-term allocators.",
            readMore: "Read article",
            comingSoonLabel: "Coming soon",
            modalClose: "Close",
            items: [
                {
                    category: "News",
                    // PILOT (Dec 2025)
                    title: "FIDES and Aureus Sigma Capital Sign Memorandum of Understanding (MOU)",
                    slug: "fides-aureus-sigma-capital-strategic-partnership",
                    summary:
                        "FIDES Vietnam and ASC signed an MOU at the FIDES office in Ho Chi Minh City on December 19, 2025 to cooperate on investment mandate execution, product development, and research within applicable regulations.",
                    icon: "handshake",
                    image: "/assets/others/fides-asc-mou-document-exchange-16x9.jpg",
                },
                {
                    category: "Perspectives",
                    title: "The Case for Systematic Factors in Vietnamese Equities",
                    slug: "why-we-use-rules-instead-of-gut-feeling",
                    summary:
                        "Vietnam’s equity market exhibits distinct microstructural inefficiencies. We discuss why a systematic, factor-based approach can support more consistent decision-making than discretionary trading.",
                    comingSoon: true,
                    icon: "compass",
                    image: "/assets/others/quant_office_dark_2.png",
                },
                {
                    category: "Perspectives",
                    title: "Drawdown Management Framework: A Systematic Approach",
                    slug: "how-we-try-to-limit-big-losses",
                    summary:
                        "Preserving capital during tail events is critical to long-term compounding. We outline our multi-layered defense mechanism, incorporating volatility targeting and regime-based allocation adjustments.",
                    comingSoon: true,
                    icon: "shield",
                    image: "/assets/others/abstract_equity_curve_2.png",
                },
            ],
        },
        about: {
            title: "About Aureus Sigma Capital",
            intro: "Independent. Systematic. Dedicated to Vietnam.",
            details: [
                "Aureus Sigma Capital (ASC) is an independent, founder-owned quantitative investment firm specializing in Vietnam’s listed equity market. We design and operate systematic, factor-based investment strategies, applying international asset management standards to the local data, trading, and legal context.",
                "ASC’s role is to build the investment engine for Vietnamese equity portfolios. We collect, clean, and organize market and corporate data; systematize signals on valuation, quality, and price trends; and then transform them into clear rules — determining which stocks to hold, at what weights, and when to adjust. Every investment in the portfolio can be traced back to this methodological framework.",
                "ASC does not directly manage client accounts or distribute investment products. Our strategies are implemented through licensed partners responsible for client onboarding, suitability assessment, trade execution, and reporting. This segregated model ensures that the interests of all parties are aligned, clients are served by entities with full legal standing, while ASC focuses entirely on research, portfolio design, and risk analysis — while investing the firm’s own capital according to the same strategy.",
            ],
            factSheet: {
                title: "Fact Sheet",
                items: [
                    { label: "Founded", value: "2025" },
                    { label: "Strategy", value: "Quantitative multi-factor Vietnamese equities" },
                    { label: "Implementation", value: "Via ASC’s licensed partners" },
                ]
            },
            highlights: [
                { label: "Systematic discipline", body: "Rules-based research and governance tailored to Vietnam.", icon: "rules" },
                { label: "Vietnam focus", body: "Dedicated to listed Vietnamese equities and local data.", icon: "map" },
                { label: "Licensed partners", body: "Implemented via ASC’s licensed partners.", icon: "shield-check" },
            ],
            bioDetails: [
                {
                    name: "Duc (Huy) Nguyen",
                    title: "Co-Founder, Chairman & Chief Investment Officer",
                    body: [
                        "Duc is the founding architect of Aureus Sigma Capital’s systematic Vietnamese equity strategies. As CIO, he sets ASC’s investment philosophy and research agenda, leading the research, design and development of the firm’s quantitative models, backtesting framework, portfolio construction and risk systems across current and future strategies.",
                        "His career has been anchored in Vietnam’s capital markets for more than two decades, including leadership roles as CEO of Techcom Capital, Managing Director of Techcom Securities and Chief Financial Officer of Orient Commercial Bank (OCB). Earlier, he led corporate finance and financial advisory at Deloitte Vietnam and later served as group CFO and investment head for Vietnamese and regional investment and real-estate platforms, applying quantitative models, scenario analysis and disciplined capital-allocation frameworks through multiple cycles.",
                        "At ASC, Duc brings this market, banking and advisory experience together with a systematic discipline, acting as the firm’s chief strategist and head of research. He is responsible for model development and governance, performance and risk oversight, and the ongoing evolution of ASC’s factor-based platform for institutional investors in Vietnam.",
                    ],
                },
                {
                    name: "Minh Mai, CFA",
                    title: "Co-Founder & Chief Executive Officer",
                    body: [
                        "Minh leads ASC’s execution, operations, and client delivery. As CEO, he is responsible for turning ASC’s research framework into live portfolios: overseeing trading workflows, broker relationships, operational risk controls, and day-to-day portfolio monitoring, and working with licensed managers to embed ASC strategies into regulated mandates and products.",
                        "Before co-founding ASC, Minh was Head of Research at Fujiwara Capital, a global macro hedge fund, where he led investment research across macro themes and systematic trading ideas. Prior to that, he served as Research Lead at Vietbridge Capital, focusing on fundamental and quantitative research on Vietnamese assets. Minh is a CFA charterholder and a graduate of ESCP Europe, bringing an international macro and multi-asset perspective to ASC’s Vietnam-focused, factor-based strategies.",
                        "At ASC, Minh ensures that the rules designed by the CIO are implemented cleanly, efficiently, and transparently in live portfolios, and that clients and partners receive clear, data-driven communication on how the strategies behave through different market environments.",
                    ],
                },
            ],
            teamTitle: "Leadership",
        },
        team: {
            founder: "Duc (Huy) Nguyen — Co-Founder, Chairman & Chief Investment Officer",
            founderBio:
                "Co-Founder and CIO of ASC. Former CEO of Techcom Capital and Managing Director of Techcom Securities, with earlier leadership roles at Deloitte Vietnam and regional investment groups. Brings 20+ years in Vietnam’s capital markets, now focused on systematic, factor-based Vietnamese equity strategies and institutional-grade risk management.",
            cofounder: "Minh Mai, CFA — Co-Founder & Chief Executive Officer",
            cofounderBio:
                "Leads ASC’s trading, operations, and client delivery. Former Head of Research at Fujiwara Capital (global macro hedge fund) and Research Lead at Vietbridge Capital. CFA charterholder and ESCP Europe graduate, responsible for implementing ASC’s systematic Vietnamese equity framework in live portfolios and coordinating with licensed managers on mandates and reporting.",
        },
        contact: {
            title: "Contact",
            desc:
                "For institutional or professional inquiries, or to discuss how ASC’s systematic Vietnamese equity strategies can be accessed via ASC’s licensed partners, please use the form below.",
            primaryCta: "Submit inquiry",
            emailLabel: "Email",
            email: "contact@ascap.vn",
            note:
                "For information about products, account types, or documentation, please contact ASC.",
        },
        legal: {
            body:
                "This website is for informational purposes only. It does not constitute an offer to sell, or a solicitation of an offer to buy, any security or investment product in any jurisdiction. Strategies and investment frameworks developed by Aureus Sigma Capital (ASC) are implemented by ASC’s licensed partners for eligible investors under applicable regulation.",
            rights: "© " + new Date().getFullYear() + " Aureus Sigma Capital. All rights reserved.",
        },
        cookie: {
            text: "We use minimal cookies for site functionality and to process institutional inquiries.",
            accept: "Accept",
        },
    },
    vi: {
        nav: {
            home: "Trang chủ",
            whatWeDo: "Phương pháp",
            solutions: "Giải pháp",
            partnerships: "Đối tác",
            insights: "Thông tin",
            about: "Giới thiệu",
            contact: "Liên hệ",
        },
        hero: {
            title: "Alpha Hệ thống tại Việt Nam",
            subtitle:
                "Aureus Sigma Capital (ASC) thiết kế các danh mục minh bạch, dựa trên nhân tố (factor-based) cho thị trường chứng khoán Việt Nam, hướng tới lợi nhuận điều chỉnh rủi ro hấp dẫn cùng khung kiểm soát drawdown rõ ràng. Thông qua các đối tác được cấp phép của ASC, nhà đầu tư tổ chức có thể tiếp cận các chiến lược hệ thống này.",
            ctas: [
                { label: "Tìm hiểu hợp tác với đối tác được cấp phép", to: "/partnerships" },
                { label: "Khám phá khung đầu tư", to: "/what-we-do" },
            ],
            stats: [
                { label: "Vận hành từ", value: "2025", icon: "clock" },
                { label: "Trọng tâm", value: "Cổ phiếu niêm yết tại Việt Nam", icon: "map" },
                { label: "Triển khai", value: "Qua các đối tác được cấp phép của ASC", icon: "shield-check" },
            ],
            highlights: [
                { label: "Kỷ luật hệ thống cấp tổ chức", body: "Quyết định dựa trên dữ liệu, nghiên cứu văn bản hóa và quy tắc lặp lại.", icon: "rules" },
                { label: "Đầu tư nhân tố tại Việt Nam", body: "Danh mục nghiêng về các yếu tố giá trị, chất lượng và động lượng trong nhóm cổ phiếu thanh khoản.", icon: "skyline" },
                { label: "Khung kiểm soát drawdown rõ ràng", body: "Mục tiêu tăng trưởng dài hạn đi kèm với các quy tắc phòng vệ cho các giai đoạn căng thẳng.", icon: "shield" },
            ],
        },
        whatWeDo: {
            sectionTitle: "Vì sao phương pháp có hệ thống lại quan trọng tại Việt Nam",
            intro:
                "Thị trường cổ phiếu Việt Nam biến động nhanh và thường bị chi phối bởi cảm xúc. Giá có thể dao động mạnh theo tin tức, dòng tiền hay kỳ vọng chính sách. Chúng tôi tin rằng các chiến lược dựa trên quy tắc, định hướng theo yếu tố (factor-driven), xây dựng từ dữ liệu và kiểm soát chặt chẽ rủi ro sụt giảm (drawdown) sẽ mang lại hiệu quả bền vững hơn cho nhà đầu tư.",
            principles: [
                { label: "Có hệ thống", body: "Mọi quyết định đều dựa trên quy tắc được văn bản hóa, không phải ý kiến tùy hứng hay những câu chuyện thị trường." },
                { label: "Dẫn dắt bởi nhân tố", body: "Danh mục nghiêng về các nhân tố giá trị, chất lượng và động lượng." },
                { label: "Thiết kế cho thị trường nội địa", body: "Xây dựng dựa trên thực tế về thanh khoản, quy định và công bổ thông tin tại Việt Nam." },
                { label: "Ý thức về rủi ro", body: "Mức sụt giảm, thanh khoản và hành vi thị trường là đầu vào trong thiết kế—không phải những yếu tố xem xét sau cùng." },
            ],
            objective:
                "Mục tiêu rõ ràng: hướng đến lợi nhuận dài hạn hấp dẫn sau điều chỉnh rủi ro từ cổ phiếu Việt Nam, với lộ trình mà các nhà phân bổ vốn tổ chức có thể hiểu, giám sát và đặt câu hỏi. Khung phương pháp của ASC được neo vào các phần bù giá trị, chất lượng và động lượng đã được nghiên cứu kỹ lưỡng, kết hợp với lăng kính ổn định bao gồm biến động thấp, hành vi sụt giảm và các yếu tố thanh khoản.",
            processTitle: "Từ triết lý đến khung phương pháp",
            processIntro: "Chúng tôi triển khai triết lý này như một quy trình nghiên cứu và kỹ thuật đứng sau mọi chiến lược của ASC.",
            process: [
                { label: "Bước 01: Dữ liệu & chẩn đoán", body: "Thu thập và làm sạch dữ liệu theo thời điểm về các công ty và giá cổ phiếu Việt Nam, tập trung vào thanh khoản và chất lượng công bố thông tin." },
                { label: "Bước 02: Nghiên cứu nhân tố", body: "Xác định cách các nhân tố giá trị, chất lượng và động lượng được thưởng qua nhiều giai đoạn thị trường khác nhau, bao gồm cả những thời kỳ căng thẳng." },
                { label: "Bước 03: Quy tắc danh mục", body: "Mã hóa các phát hiện thành quy tắc xác định nên sở hữu gì, bao nhiêu, và điều chỉnh như thế nào khi các yếu tố cơ bản, giá cả và rủi ro thay đổi." },
                { label: "Bước 04: Kiểm thử & đánh giá", body: "Kiểm thử các thay đổi trước khi triển khai thực tế và đánh giá hiệu suất thực—bao gồm mức sụt giảm—so với kỳ vọng." },
            ],
            blocks: [
                {
                    title: "Xác định vũ trụ đầu tư",
                    body:
                        "Chúng tôi tập trung vào các công ty có đủ khối lượng giao dịch, tỷ lệ tự do chuyển nhượng và chất lượng công bố thông tin để hỗ trợ việc thực thi và phân tích rủi ro cấp tổ chức. Vũ trụ này được đánh giá định kỳ.",
                    icon: "database",
                },
                {
                    title: "Chấm điểm công ty theo nhân tố cốt lõi",
                    body:
                        "Mỗi công ty được đánh giá qua các đặc tính chất lượng, giá trị và động lượng, cộng với lăng kính ổn định bao gồm biến động thực tế, hành vi drawdown và thanh khoản. Các đầu vào này kết hợp thành một hồ sơ cấu trúc được cập nhật theo lịch trình.",
                    icon: "sliders",
                },
                {
                    title: "Xây dựng danh mục",
                    body:
                        "Tất cả các mã đủ điều kiện được so sánh trực tiếp. Các hồ sơ mạnh hơn, bền bỉ hơn nhận phân bổ lớn hơn nhưng có kiểm soát, trong khi các mã yếu hơn hoặc biến động mạnh bị giảm tỷ trọng hoặc loại bỏ. Các ràng buộc bao gồm độ tập trung, phơi nhiễm nhân tố, vòng quay và thanh khoản.",
                    icon: "compass",
                },
                {
                    title: "Ngân sách Rủi ro & Bảo toàn Vốn",
                    intro:
                        "Quản trị rủi ro được tích hợp sẵn trong khung đầu tư. Chúng tôi sử dụng nhiều lớp phòng vệ để làm cho các đợt sụt giảm nghiêm trọng trở nên hiếm hơn và dễ quản lý hơn:",
                    points: [
                        "Đa dạng hóa có giới hạn giúp ngăn chặn bất kỳ vị thế hoặc chủ đề đơn lẻ nào chi phối kết quả.",
                        "Kiểm soát phơi nhiễm giám sát độ nhạy thị trường so với phạm vi ủy thác.",
                        "Ngưỡng drawdown kích hoạt việc giảm rủi ro dần dần—cắt giảm các mã biến động hoặc nghiêng về chất lượng.",
                        "Chúng tôi chủ động nghiêng tránh xa các biến động cao không được đền bù để củng cố tính phòng thủ.",
                    ],
                    icon: "shield",
                },
            ],
            humanJudgement: {
                title: "Phán đoán con người và dữ liệu cùng phối hợp",
                intro: "Quy trình của chúng tôi mang tính định lượng, nhưng không phải tự động hóa chỉ vì tự động hóa. Phán đoán con người được đưa vào ở những khâu mang lại giá trị cao nhất:",
                steps: [
                    "Lựa chọn và làm sạch dữ liệu thị trường và doanh nghiệp.",
                    "Quyết định nhấn mạnh nhân tố nào và kết hợp chúng ra sao.",
                    "Thiết lập giới hạn danh mục và rủi ro phản ánh cấu trúc thị trường Việt Nam.",
                    "Đánh giá cách danh mục vận hành trong các môi trường khác nhau.",
                ],
                note: "Việc triển khai hàng ngày tuân theo các quy tắc đã được văn bản hóa để đảm bảo phản ứng nhất quán và có thể kiểm toán, trong khi hoạt động nghiên cứu tiếp tục phát triển ở hậu trường.",
            },
            flow: [
                { label: "Dữ liệu", desc: "Giá, thông tin doanh nghiệp, bối cảnh thị trường.", icon: "database" },
                { label: "Quy tắc", desc: "Tiêu chí mua, quy mô và cắt giảm được xác định trước.", icon: "sliders" },
                { label: "Danh mục", desc: "Tập hợp đa dạng các cổ phiếu Việt Nam hàng đầu.", icon: "skyline" },
                { label: "Kiểm tra rủi ro", desc: "Giới hạn và phòng vệ để giữ mức lỗ trong phạm vi.", icon: "shield-check" },
            ],
            comparison: {
                gutTitle: "Phán đoán Chủ quan",
                gutDesc: "Quyết định chủ quan thường bị ảnh hưởng bởi nhiễu loạn thị trường.",
                rulesTitle: "Hệ thống hóa",
                rulesDesc: "Thực thi kỷ luật dựa trên kiểm chứng thống kê.",
            },
            riskBands: [
                { label: "Đa dạng hóa có giới hạn", desc: "Số lượng mã đảm bảo ý nghĩa đại diện, với trần tỷ trọng để tránh đánh cược tập trung.", color: "#CBD5E1" },
                { label: "Kiểm soát phơi nhiễm", desc: "Giám sát độ nhạy thị trường và điều chỉnh khi rủi ro vượt ra ngoài phạm vi ủy thác.", color: "#94A3B8" },
                { label: "Dải drawdown và phản ứng", desc: "Theo dõi khoảng cách từ đỉnh; giảm rủi ro dần dần khi mức lỗ phá vỡ các ngưỡng đã thống nhất.", color: "#D97706" },
            ],
            edge: {
                title: "Lợi thế của chúng tôi tại Việt Nam",
                bullets: [
                    "Tập trung chuyên biệt vào cổ phiếu Việt Nam, được hiệu chỉnh theo dữ liệu, thanh khoản và quy định nội địa.",
                    "Mức độ phơi nhiễm nhân tố minh bạch (giá trị, chất lượng, động lượng) thay vì các mô hình hộp đen thiếu rõ ràng.",
                    "Kiểm soát rủi ro và nhận diện drawdown được thiết kế dựa trên đặc thù biến động của thị trường mới nổi.",
                    "Triển khai thông qua các nhà quản lý được cấp phép để tùy chỉnh ủy thác, báo cáo và các vấn đề về thuế.",
                ],
            },
            expectations: {
                title: "Kỳ vọng của nhà đầu tư – và những gì không nên kỳ vọng",
                goals: [
                    "Hướng tới lợi nhuận điều chỉnh rủi ro cao hơn so với phương pháp “mua và nắm giữ chỉ số” thông thường qua một chu kỳ thị trường đầy đủ.",
                    "Hạn chế mức độ sụt giảm và thời gian hồi phục của các đợt drawdown lớn so với thị trường chung.",
                    "Duy trì một quy trình mà nhà đầu tư có thể hiểu, giám sát và phản biện.",
                ],
                disclaimer:
                    "Chúng tôi không hứa hẹn hiệu quả vượt trội trong mọi giai đoạn hoặc bảo vệ tuyệt đối khỏi mọi đợt sụt giảm của thị trường. Việt Nam là một thị trường đầy biến động và đầu tư cổ phiếu luôn đi kèm rủi ro mất vốn. Cam kết của chúng tôi là một khung đầu tư kỷ luật, minh bạch, coi quản trị rủi ro và drawdown là những vấn đề thiết kế cốt lõi, chứ không phải là ngôn từ quảng cáo.",
            },
            performance: {
                title: "Phân tích Hiệu quả & Rủi ro",
                intro: "Cách chúng tôi trình bày hiệu suất",
                presentation: [
                    "Kết quả được trình bày sau khi trừ phí quản lý ước tính và chi phí giao dịch, trừ khi có ghi chú khác.",
                    "Lợi nhuận được so sánh với các chỉ số tham chiếu phù hợp như chỉ số chứng khoán chính của Việt Nam.",
                    "Chúng tôi hiển thị nhiều mốc thời gian (từ khi bắt đầu cộng với các giai đoạn cuốn chiếu 1, 3 và 5 năm).",
                ],
                metricsTitle: "Các chỉ số rủi ro và hành vi vốn",
                metrics: [
                    "Biến động hàng năm và sai lệch theo dõi (tracking error).",
                    "Tỷ số Sharpe và tỷ số Information.",
                    "Mức sụt giảm lớn nhất và thời gian hồi phục.",
                    "Thống kê mức độ phơi nhiễm và tập trung theo ngành, nhân tố và từng mã cổ phiếu.",
                ],
                historyTitle: "Lịch sử thực tế và mô phỏng",
                historyIntro:
                    "Việt Nam vẫn là một thị trường đang phát triển, do đó lịch sử vận hành thực tế ngắn hơn so với các chỉ số toàn cầu. Để cung cấp cho nhà đầu tư cái nhìn đầy đủ hơn, chúng tôi kết hợp:",
                history: [
                    "Mô phỏng lịch sử được xây dựng từ dữ liệu point-in-time của Việt Nam để cho thấy khung đầu tư vận hành như thế nào qua các chu kỳ và giai đoạn căng thẳng khác nhau.",
                    "Hiệu quả thực tế cho thấy khung đầu tư vận hành như thế nào với nguồn vốn thật, chi phí giao dịch và các hạn chế triển khai thực tế.",
                ],
                historyNote:
                    "Backtest là công cụ, không phải lời hứa—chúng giúp chúng tôi và nhà đầu tư hiểu được độ nhạy đối với các môi trường khác nhau nhưng không phải là dự báo. Tất cả kết quả đều đi kèm với các công bổ về phương pháp luận, giả định và hạn chế.",
                reportingTitle: "Tiếp cận báo cáo chi tiết",
                reportingBody:
                    "Các nhà đầu tư tổ chức và chuyên nghiệp có thể yêu cầu các bộ báo cáo chi tiết về hiệu suất, rủi ro và phân bổ thông qua các đối tác được cấp phép của ASC, tùy thuộc vào các điều khoản cấp sản phẩm và yêu cầu quản trị.",
            },
        },
        solutions: {
            title: "Giải pháp cho Khách hàng",
            intro: "Ủy thác đầu tư được thiết kế riêng và báo cáo minh bạch dành cho các nhà phân bổ vốn tổ chức.",
        },
        partnerships: {
            intro:
                "Các chiến lược của ASC được tiếp cận thông qua các ủy thác được quản lý bởi các đối tác được cấp phép của ASC. ASC thiết kế khung hệ thống; đối tác được cấp phép của ASC chịu trách nhiệm tiếp nhận khách hàng, đánh giá sự phù hợp, thực thi giao dịch và báo cáo theo quy định.",
            paragraphs: [
                "ASC hợp tác với các nhà quản lý đầu tư được cấp phép, cung cấp sản phẩm được quản lý và các ủy thác riêng biệt, xử lý việc tiếp nhận khách hàng và duy trì quan hệ, đồng thời triển khai danh mục với báo cáo tuân thủ đầy đủ.",
                "Khách hàng ký kết hợp đồng trực tiếp với đối tác được cấp phép phù hợp. Đơn vị đó chịu trách nhiệm đảm bảo sự phù hợp và tuân thủ cho từng sản phẩm hoặc ủy thác.",
                "Aureus Sigma Capital là một công ty định lượng độc lập, tập trung vào thị trường cổ phiếu Việt Nam. Chúng tôi thiết kế và duy trì khung đầu tư dựa trên nhân tố, cung cấp cập nhật nghiên cứu, quy tắc xây dựng danh mục và phân tích rủi ro, đồng thời đầu tư vốn của chính mình cùng với các nhà đầu tư tiếp cận chiến lược qua các đối tác được cấp phép của ASC.",
                "ASC không quản lý tài khoản khách hàng hoặc phân phối sản phẩm. Việc triển khai được thực hiện độc quyền bởi các đối tác được cấp phép của ASC.",
                "Trong từng thỏa thuận hợp tác, trách nhiệm được phân định rõ ràng: ASC phát triển và duy trì khung hệ thống, trong khi các đối tác được cấp phép quyết định cách thức và địa điểm triển khai chiến lược, quản lý danh mục hàng ngày theo giấy phép của mình và cung cấp dịch vụ khách hàng cùng báo cáo theo quy định pháp luật. Sự phân tách này hỗ trợ các tiêu chuẩn quản trị cấp tổ chức.",
                "Khi thị trường Việt Nam phát triển sâu rộng hơn, ASC và các đối tác được cấp phép dự kiến mở rộng phạm vi các ủy thác và sản phẩm có thể tích hợp khung đầu tư của ASC, đồng thời giữ chất lượng nghiên cứu, kiểm soát rủi ro và sự vững chắc về pháp lý làm trọng tâm.",
                "Đối với nhà đầu tư quan tâm đến việc tiếp cận các chiến lược của ASC, vui lòng liên hệ trực tiếp với đối tác được cấp phép của ASC, hoặc liên hệ với ASC để được giới thiệu và biết thêm chi tiết về cách khung đầu tư được áp dụng.",
            ],
            roles: [
                {
                    roleLabel: "Vốn",
                    title: "Nhà đầu tư",
                    bullets: ["Nhà đầu tư đủ điều kiện trong hoặc ngoài nước", "Tiếp cận sản phẩm do các đối tác được cấp phép của ASC quản lý"],
                },
                {
                    roleLabel: "Quản Lý",
                    title: "Đối tác được cấp phép",
                    bullets: ["Nhà quản lý được cấp phép", "Tiếp nhận và phục vụ khách hàng", "Triển khai & Báo cáo danh mục"],
                },
                {
                    roleLabel: "Kiến Trúc",
                    title: "Aureus Sigma Capital",
                    bullets: ["Thiết kế chiến lược dựa trên quy tắc", "Cung cấp đầu vào nghiên cứu & rủi ro", "Giám sát kỷ luật so với rào chắn kỹ thuật"],
                },
            ],
            cta: "Xem đối tác được cấp phép",
            mechanicsTitle: "Về đối tác được cấp phép",
            investorNoticeTitle: "Quan trọng đối với nhà đầu tư",
        },
        clientSolutions: {
            title: "Giải pháp cho Khách hàng",
            intro: "Ủy thác đầu tư được thiết kế riêng và báo cáo minh bạch dành cho các nhà phân bổ vốn tổ chức.",
            objectivesTitle: "Giải pháp theo mục tiêu khách hàng",
            objectives: [
                {
                    title: "Khối Ngân quỹ Doanh nghiệp",
                    body:
                        "Dành cho các doanh nghiệp muốn phân bổ vốn vào cổ phiếu nhưng cần kiểm soát rủi ro giảm giá, chiến lược chất lượng-động lượng (quality-momentum) của chúng tôi hướng đến việc nắm bắt đà tăng trưởng của thị trường Việt Nam, đồng thời hạn chế các đợt sụt giảm sâu và kéo dài so với thị trường chung.",
                },
                {
                    title: "Quỹ Hưu trí & Danh mục Bảo hiểm",
                    body:
                        "Dành cho nguồn vốn dài hạn, danh mục đa dạng hóa theo phong cách yếu tố (factor-tilted) của chúng tôi mang đến phương pháp tiếp cận có hệ thống với cổ phiếu Việt Nam, có thể phân tích bằng các chỉ số rủi ro và yếu tố quen thuộc.",
                },
                {
                    title: "Văn phòng Gia đình & Nhà đầu tư Cá nhân Lớn",
                    body:
                        "Dành cho các nhà đầu tư tinh thông và nguồn vốn gia đình, phương pháp đầu tư dựa trên quy tắc của chúng tôi là sự bổ sung minh bạch cho các khoản đầu tư cổ phiếu Việt Nam theo phong cách chủ động, với quy trình và kiểm soát rủi ro được ghi chép rõ ràng.",
                },
            ],
            mandateTitle: "Các tham số thiết kế ủy thác",
            mandateIntro:
                "Trong khuôn khổ quy định pháp luật và giấy phép của từng nhà quản lý, các chiến lược xây dựng trên nền tảng ASC có thể được tùy chỉnh theo các yếu tố như:",
            mandateBullets: [
                "Mức biến động mục tiêu và phạm vi sai lệch theo dõi (tracking error).",
                "Giới hạn ngành và mức độ tập trung cho phép.",
                "Vai trò của tiền mặt và hợp đồng tương lai chỉ số trong quản lý mức độ tiếp xúc thị trường tổng thể.",
                "Bộ lọc môi trường, xã hội hoặc quản trị (ESG) khi có yêu cầu và khả thi theo nguồn dữ liệu sẵn có tại địa phương.",
            ],
            mandateNote:
                "Quy mô đầu tư tối thiểu, cơ cấu phí và điều khoản thanh khoản được xác định ở cấp sản phẩm hoặc ủy thác bởi các nhà quản lý được cấp phép. ASC phối hợp với các đối tác để đảm bảo việc xây dựng danh mục và báo cáo phù hợp với các mục tiêu rủi ro và lợi nhuận đã thống nhất.",
            reportingTitle: "Báo cáo và Minh bạch",
            reportingBody:
                "Khách hàng tổ chức nhận các báo cáo về hiệu suất, rủi ro, yếu tố và danh mục nắm giữ từ nhà quản lý được cấp phép. ASC hỗ trợ quá trình này bằng cách cung cấp phân tích, chẩn đoán và bình luận về hành vi chiến lược, đặc biệt trong các giai đoạn thị trường căng thẳng.",
        },
        insights: {
            sectionTitle: "Quan điểm",
            intro: "Chúng tôi xuất bản các ghi chú ngắn gọn cho nhà đầu tư muốn hiểu cách chúng tôi tư duy về cổ phiếu Việt Nam, quản trị rủi ro và vai trò của chiến lược hệ thống trong danh mục tổng thể.",
            readMore: "Đọc bài viết",
            comingSoonLabel: "Sắp ra mắt",
            modalClose: "Đóng",
            items: [
                {
                    category: "Tin tức",
                    // PILOT (T12/2025)
                    title: "FIDES và Aureus Sigma Capital ký Biên bản ghi nhớ (MOU) hợp tác nghiên cứu",
                    slug: "fides-aureus-sigma-capital-strategic-partnership",
                    summary:
                        "FIDES Việt Nam và ASC ký MOU tại văn phòng FIDES ở TP. Hồ Chí Minh ngày 19/12/2025 nhằm hợp tác trong thực hiện ủy thác đầu tư, phát triển sản phẩm và nghiên cứu phân tích trong khuôn khổ pháp luật hiện hành.",
                    icon: "handshake",
                    image: "/assets/others/fides-asc-mou-document-exchange-16x9.jpg",
                },
                {
                    category: "Góc nhìn",
                    title: "Luận điểm về Đầu tư Nhân tố Hệ thống tại Việt Nam",
                    slug: "why-we-use-rules-instead-of-gut-feeling",
                    summary:
                        "Thị trường cổ phiếu Việt Nam tồn tại những bất cập vi mô đặc thù. Chúng tôi thảo luận lý do tại sao phương pháp dựa trên nhân tố, hệ thống có thể hỗ trợ quyết định nhất quán hơn so với giao dịch chủ động.",
                    comingSoon: true,
                    icon: "compass",
                    image: "/assets/others/quant_office_dark_2.png",
                },
                {
                    category: "Góc nhìn",
                    title: "Khung Quản trị Drawdown: Tiếp cận Hệ thống & Ngân sách Rủi ro",
                    slug: "how-we-try-to-limit-big-losses",
                    summary:
                        "Bảo toàn vốn trong các sự kiện đuôi là yếu tố then chốt để lãi kép dài hạn. Chúng tôi phác thảo cơ chế phòng vệ đa lớp, kết hợp mục tiêu biến động và điều chỉnh phân bổ theo chế độ thị trường.",
                    comingSoon: true,
                    icon: "shield",
                    image: "/assets/others/abstract_equity_curve_2.png",
                },
            ],
        },
        about: {
            title: "Về Aureus Sigma Capital",
            intro:
                "Độc lập. Hệ thống hóa. Chuyên biệt cho Việt Nam.",
            details: [
                "Aureus Sigma Capital (ASC) là công ty đầu tư định lượng độc lập, do chính nhà sáng lập sở hữu, chuyên sâu vào thị trường cổ phiếu niêm yết tại Việt Nam. Chúng tôi thiết kế và vận hành các chiến lược đầu tư hệ thống dựa trên yếu tố nền tảng (factor-based), áp dụng chuẩn mực quản lý quỹ quốc tế vào bối cảnh dữ liệu, giao dịch và pháp lý trong nước.",
                "Vai trò của ASC là xây dựng bộ máy đầu tư cho các danh mục cổ phiếu Việt Nam. Chúng tôi thu thập, làm sạch và tổ chức dữ liệu thị trường cùng dữ liệu doanh nghiệp; hệ thống hóa các tín hiệu về định giá, chất lượng và xu hướng giá; rồi chuyển hóa thành các quy tắc rõ ràng — xác định nên nắm giữ cổ phiếu nào, với tỷ trọng bao nhiêu, và điều chỉnh vào thời điểm nào. Mỗi khoản đầu tư trong danh mục đều có thể truy ngược về khung phương pháp luận này.",
                "ASC không trực tiếp quản lý tài khoản khách hàng hay phân phối sản phẩm đầu tư. Các chiến lược của chúng tôi được triển khai thông qua đối tác được cấp phép, chịu trách nhiệm tiếp nhận khách hàng, đánh giá phù hợp, thực thi giao dịch và báo cáo. Mô hình phân tách này giúp đảm bảo lợi ích các bên luôn đồng nhất, khách hàng được phục vụ bởi đơn vị có đầy đủ tư cách pháp lý, còn ASC tập trung toàn lực vào nghiên cứu, thiết kế danh mục và phân tích rủi ro — đồng thời đầu tư vốn tự có của công ty theo đúng chiến lược đó.",
            ],
            factSheet: {
                title: "Thông tin tổng quan",
                items: [
                    { label: "Năm thành lập", value: "2025" },
                    { label: "Chiến lược", value: "Đầu tư cổ phiếu Việt Nam theo phương pháp định lượng đa yếu tố" },
                    { label: "Triển khai", value: "Thông qua đối tác được cấp phép của ASC" },
                ]
            },
            highlights: [
                { label: "Kỷ luật hệ thống", body: "Nghiên cứu và quản trị dựa trên quy tắc tinh chuẩn cho Việt Nam.", icon: "rules" },
                { label: "Tiêu điểm Việt Nam", body: "Chuyên sâu vào cổ phiếu niêm yết và dữ liệu thị trường nội địa.", icon: "map" },
                { label: "Đối tác cấp phép", body: "Chiến lược được triển khai thông qua các đối tác được cấp phép của ASC.", icon: "shield-check" },
            ],
            bioDetails: [
                {
                    name: "Nguyễn Đức Huy",
                    title: "Đồng sáng lập, Chủ tịch & Giám đốc Đầu tư (CIO)",
                    body: [
                        "Ông Huy là kiến trúc sư sáng lập các chiến lược cổ phiếu Việt Nam hệ thống của Aureus Sigma Capital. Với tư cách là CIO, ông thiết lập triết lý đầu tư và chương trình nghiên cứu của ASC, dẫn dắt việc nghiên cứu, thiết kế và phát triển các mô hình định lượng, khung kiểm chứng (backtesting), xây dựng danh mục và hệ thống rủi ro cho các chiến lược hiện tại và tương lai.",
                        "Sự nghiệp của ông gắn liền với thị trường vốn Việt Nam trong hơn hai thập kỷ, bao gồm các vai trò lãnh đạo như Tổng Giám đốc Techcom Capital, Giám đốc Điều hành Techcom Securities và Giám đốc Tài chính Ngân hàng Phương Đông (OCB). Trước đó, ông dẫn dắt bộ phận tài chính doanh nghiệp và tư vấn tài chính tại Deloitte Việt Nam và sau đó là Giám đốc Tài chính tập đoàn và trưởng bộ phận đầu tư cho các nền tảng đầu tư và bất động sản tại Việt Nam và khu vực, áp dụng các mô hình định lượng, phân tích kịch bản và khung phân bổ vốn kỷ luật qua nhiều chu kỳ.",
                        "Tại ASC, ông Huy kết hợp kinh nghiệm thị trường, ngân hàng và tư vấn này với kỷ luật hệ thống, đóng vai trò là chiến lược gia trưởng và trưởng bộ phận nghiên cứu của công ty. Ông chịu trách nhiệm phát triển và quản trị mô hình, giám sát hiệu suất và rủi ro, cũng như sự phát triển không ngừng của nền tảng dựa trên nhân tố của ASC cho các nhà đầu tư tổ chức tại Việt Nam.",
                    ],
                },
                {
                    name: "Mai Lâm Minh, CFA",
                    title: "Đồng sáng lập & Giám đốc Điều hành (CEO)",
                    body: [
                        "Ông Minh dẫn dắt hoạt động thực thi, vận hành và chuyển giao cho khách hàng của ASC. Với tư cách là CEO, ông chịu trách nhiệm chuyển hóa khung nghiên cứu của ASC thành các danh mục thực tế: giám sát quy trình giao dịch, quan hệ với các công ty môi giới, kiểm soát rủi ro vận hành và giám sát danh mục hàng ngày, đồng thời làm việc với các nhà quản lý được cấp phép để đưa các chiến lược của ASC vào các ủy thác và sản phẩm được quản lý.",
                        "Trước khi đồng sáng lập ASC, ông Minh là Trưởng bộ phận Nghiên cứu tại Fujiwara Capital, một quỹ phòng hộ vĩ mô toàn cầu, nơi ông dẫn dắt nghiên cứu đầu tư qua các chủ đề vĩ mô và ý tưởng giao dịch hệ thống. Trước đó, ông là Trưởng nhóm Nghiên cứu tại Vietbridge Capital, tập trung vào nghiên cứu cơ bản và định lượng cho tài sản Việt Nam. Ông Minh là chuyên gia phân tích tài chính (CFA charterholder) và tốt nghiệp ESCP Europe, mang lại góc nhìn vĩ mô quốc tế và đa tài sản cho các chiến lược nhân tố chuyên biệt cho Việt Nam của ASC.",
                        "Tại ASC, ông Minh đảm bảo các quy tắc do CIO thiết kế được thực hiện một cách sạch sẽ, hiệu quả và minh bạch trong các danh mục thực tế, đồng thời đảm bảo khách hàng và đối tác nhận được thông tin rõ ràng, dựa trên dữ liệu về cách các chiến lược vận hành qua các môi trường thị trường khác nhau.",
                    ],
                },
            ],
            teamTitle: "Ban Lãnh đạo",
        },
        team: {
            founder: "Nguyễn Đức Huy — Đồng sáng lập, Chủ tịch & Giám đốc Đầu tư (CIO)",
            founderBio:
                "Kiến trúc sư sáng lập các chiến lược cổ phiếu Việt Nam hệ thống của ASC. Cựu CEO Techcom Capital và Giám đốc Khối Ngân hàng Đầu tư tại Techcom Securities; nguyên CFO Ngân hàng Phương Đông (OCB). Với hơn 20 năm kinh nghiệm dẫn dắt tại thị trường vốn Việt Nam, ông chịu trách nhiệm phát triển mô hình định lượng và quản trị rủi ro cấp tổ chức.",
            cofounder: "Mai Lâm Minh, CFA — Đồng sáng lập & Giám đốc Điều hành (CEO)",
            cofounderBio:
                "CFA. Dẫn dắt hoạt động thực thi, vận hành và chuyển giao cho khách hàng của ASC. Cựu Trưởng bộ phận Nghiên cứu tại Fujiwara Capital (quỹ phòng hộ vĩ mô toàn cầu) và Trưởng nhóm Nghiên cứu tại Vietbridge Capital. Tốt nghiệp ESCP Europe. Ông chịu trách nhiệm triển khai khung hệ thống vào danh mục thực tế và phối hợp với các đối tác được cấp phép của ASC.",
        },
        contact: {
            title: "Liên hệ",
            desc:
                "Đối với các yêu cầu từ tổ chức hoặc chuyên nghiệp, hoặc để thảo luận về cách tiếp cận các chiến lược cổ phiếu Việt Nam hệ thống của ASC thông qua các đối tác được cấp phép của ASC, vui lòng sử dụng biểu mẫu bên dưới.",
            primaryCta: "Gửi yêu cầu",
            emailLabel: "Email",
            email: "contact@ascap.vn",
            note: "Để biết thông tin về sản phẩm, loại tài khoản hoặc tài liệu, vui lòng liên hệ ASC.",
        },
        legal: {
            body:
                "Trang web này chỉ nhằm mục đích cung cấp thông tin. Đây không phải là lời chào bán hay mời gọi chào mua bất kỳ chứng khoán hay sản phẩm đầu tư nào tại bất kỳ khu vực pháp lý nào. Các chiến lược và khung đầu tư do Aureus Sigma Capital (ASC) phát triển được triển khai bởi các đối tác được cấp phép của ASC cho nhà đầu tư đủ điều kiện theo quy định pháp luật hiện hành.",
            rights: "© " + new Date().getFullYear() + " Aureus Sigma Capital. Bảo lưu mọi quyền.",
        },
        cookie: {
            text: "Chúng tôi sử dụng cookie tối thiểu cho chức năng trang web và để xử lý các yêu cầu từ tổ chức.",
            accept: "Đồng ý",
        },
    },
};

export const INSIGHTS_CONTENT = {
    // PILOT VERSION (December 2025) - Switch to full version (fidesEnMd/fidesViMd) for Q1 2026 launch
    "fides-aureus-sigma-capital-strategic-partnership": {
        en: {
            title: "FIDES and Aureus Sigma Capital Sign Memorandum of Understanding (MOU)",
            dateLine: "Ho Chi Minh City (FIDES Office), Vietnam – December 19, 2025",
            heroImage: {
                src: "/assets/others/fides-asc-mou-team-16x9.jpg",
                alt: "FIDES and ASC team photo at the MOU signing.",
                caption: "FIDES and ASC team at the MOU signing.",
            },
            body: parseMarkdown(fidesPilotEnMd),
        },
        vi: {
            title: "FIDES và Aureus Sigma Capital ký Biên bản ghi nhớ (MOU) hợp tác nghiên cứu",
            dateLine: "TP. Hồ Chí Minh (văn phòng FIDES) – Ngày 19 tháng 12 năm 2025",
            heroImage: {
                src: "/assets/others/fides-asc-mou-team-16x9.jpg",
                alt: "Ảnh tập thể FIDES và ASC tại lễ ký MOU.",
                caption: "FIDES và ASC chụp ảnh tập thể tại lễ ký MOU.",
            },
            body: parseMarkdown(fidesPilotViMd),
        },
    },
    // FULL VERSION (Q1 2026) - Uncomment and replace above when launching products
    // "fides-aureus-sigma-capital-strategic-partnership": {
    //     en: {
    //         title: "FIDES and Aureus Sigma Capital Sign Partnership to Develop Systematic Strategies for Vietnam",
    //         dateLine: "Ho Chi Minh City, Vietnam – [Q1 2026 Date]",
    //         body: parseMarkdown(fidesEnMd),
    //     },
    //     vi: {
    //         title: "FIDES và Aureus Sigma Capital ký kết hợp tác phát triển chiến lược hệ thống cho Việt Nam",
    //         dateLine: "TP. Hồ Chí Minh – [Ngày Q1 2026]",
    //         body: parseMarkdown(fidesViMd),
    //     },
    // },
    "why-we-use-rules-instead-of-gut-feeling": {
        en: {
            title: "The Case for Systematic Factors in Vietnamese Equities",
            body: parseMarkdown(rulesEnMd),
        },
        vi: {
            title: "Luận điểm về Đầu tư Nhân tố Hệ thống tại Việt Nam",
            body: parseMarkdown(rulesViMd),
        },
    },
    "how-we-try-to-limit-big-losses": {
        en: {
            title: "Drawdown Management Framework: A Systematic Approach",
            body: parseMarkdown(lossesEnMd),
        },
        vi: {
            title: "Khung Quản trị Drawdown: Tiếp cận Hệ thống & Ngân sách Rủi ro",
            body: parseMarkdown(lossesViMd),
        },
    },
};

export const NAV_LINKS = [
    { labelKey: "home", path: "/" },
    { labelKey: "whatWeDo", path: "/what-we-do" },
    { labelKey: "solutions", path: "/solutions" },
    { labelKey: "partnerships", path: "/partnerships" },
    { labelKey: "insights", path: "/insights" },
    { labelKey: "about", path: "/about" },
    { labelKey: "contact", path: "/contact" },
];
