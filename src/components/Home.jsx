

import { useRef, useState, useEffect } from "react"
import { delay, motion } from "framer-motion"
// import { FaChevronDown } from "react-icons/fa";
import { FaChevronDown, FaArrowRight, FaArrowUp } from "react-icons/fa";
import CategoryGrid from "./CategoryGrid";
export default function Home() {
    const ecommerceRef = useRef(null);
    const energyRef = useRef(null);
    const travelRef = useRef(null);
    const telecomRef = useRef(null);
    const [activeSection, setActiveSection] = useState(null);


    const categories = [
        {
            id: "ecommerce",
            title: "E-commerce",
            image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90",
            bullets: [
                "20%lower CAC through precision targeting",
                "Lead Partner-<Partner Name>",
                "8-12% conversion uplifts via personalization"
            ],
            ref: ecommerceRef
        },
        {
            id: "energy",
            title: "Energy & Utilities",
            image: "https://s3.wns.com/S3_5/Images/Articles/HeaderImage/7064/96/2040px.jpg",
            bullets: [
                "20%lower CAC through precision targeting",
                "Lead Partner-<Partner Name>",
                "8-12% conversion uplifts via personalization"
            ],
            ref: energyRef
        },
        {
            id: "travel",
            title: "Travel & Hospitality",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6T85ApPL47mlBIqTQ3TiUJ1zWQR4IwssUQ&s",
            bullets: [
                "20%lower CAC through precision targeting",
                "Lead Partner-<Partner Name>",
                "8-12% conversion uplifts via personalization"
            ],
            ref: travelRef
        },
        {
            id: "media",
            title: "Media",
            image: "https://www.telecomreviewasia.com/wp-content/uploads/2023/06/Strategies_for_Telecom_Companies_to_Thrive_in_Dynamic_Asia-Pacific_Market.jpg",
            bullets: [
                "20%lower CAC through precision targeting",
                "Lead Partner-<Partner Name>",
                "8-12% conversion uplifts via personalization"
            ],
            ref: telecomRef
        }
    ]

    const ecommerceItems = [
        {id:1,title:"Digital LLM",img:"https://images.unsplash.com/photo-1645839072940-bb2a4f189ed3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGlnaXRhbCUyMExMTXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",desc:"Conversational analytics agent that turns clickstream data into instant journey insights with built-in guardrails and semantic intelligence.",href:""},
        { id: 2, title: "Digital Audit", img: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", desc: "Automated website scanner that validates tagging, consent setup, and data quality to ensure compliant and accurate digital tracking.", href: "" },
        { id: 3, title: "Experimentation Agent", img: "https://images.unsplash.com/photo-1674027326254-88c960d8e561?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VhcmNoJTIwZW5naW5lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", desc: "AI-powered experimentation assistant that speeds hypothesis creation and produces brand-aligned test variants for rapid A/B testing.", href: "" },
        { id: 4, title: "AI Shopping Assistant", img: "", desc: "Personalized AI shopping companion offering multimodal search and tailored product recommendations.", href: "" },
        { id: 5, title: "Price Comparison Agent", img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJpY2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", desc: "Autonomous pricing intelligence tool benchmarking property pricing and occupancy across OTAs for competitive revenue decisions.", href: "" },
        { id: 6, title: "Customer Experience", img:"https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN1c3RvbWVyJTIwZXhwZXJpZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" , desc: "AI engine that mines customer reviews to pinpoint friction points and suggest tailored actions to elevate brand experience.", href: "" },
    ]
    const energyItems = [
        { id: 1, title: "SolverBuddy.AI", img: "", desc: " AI driven tool providing 360° view of customer account health  with root cause and 'Best Next Action', enabling Front and Back-office teams to improve customer experience while driving operational performance like reduction in KPIs viz. AHT, backlogs, repeats and transfers.", href: "" },
        { id: 2, title: "Imbalance and Settlement", img: "", desc: "AI driven indicators to identify imbalance and settlement across the supplier portfolio.Create imbalance scan and Generate workflows based on the account issue ", href: "" },
        { id: 3, title: "Smart Meter Health Check", img: "", desc: "To proactively monitor smart meters, detect early signs of faliure, predict potential issues before they impact billing and plan site visits.Includes smart meter events (from BOL layer)", href: "" },
        { id: 4, title: "Cognitive Data Platform", img: "", desc: "Integrated data covering structured and unstructured data including Images to reduce field cancellation and aborts.Uncover revenue generation opportunities through AI driven theft leads", href: "" },
        { id: 5, title: "SmartDebt.AI", img: "", desc: "AI driven debt collection strategies based on risk segmentation and account health.Improve debt collections and mobilise stuck debt on the account driven by Best Next action", href: "" },
        { id: 6, title: "Data Quality assessment", img: "", desc: "AI data led platform to identify inaccurate, inconsistent and incomplete customer and account attributes.Enable suppliers/ asset management companies to have consistent data across systems or during migration", href: "" },
    ]
    const travelItems = [
        { id: 1, title: "ECOMMERCE ACCELERATORS", img: "", desc: "", href: "" },
        { id: 2, title: "Conversatioanl BI", img: "", desc: "", href: "" },
        { id: 3, title: "Personalized Recommendation Engine", img: "", desc: "", href: "" },
        { id: 4, title: "CLTV Predictor", img: "", desc: "", href: "" },
        { id: 5, title: "Inventory Optimization Engine", img: "", desc: "", href: "" },
        { id: 6, title: "Dynamic Pricing", img: "", desc: "", href: "" },
    ]
    const mediaItems = [
        { id: 1, title: "ECOMMERCE ACCELERATORS", img: "", desc: "", href: "" },
        { id: 2, title: "Conversatioanl BI", img: "", desc: "", href: "" },
        { id: 3, title: "Personalized Recommendation Engine", img: "", desc: "", href: "" },
        { id: 4, title: "CLTV Predictor", img: "", desc: "", href: "" },
        { id: 5, title: "Inventory Optimization Engine", img: "", desc: "", href: "" },
        { id: 6, title: "Dynamic Pricing", img: "", desc: "", href: "" },
    ]

    function scrollToCategory(ref) {
        if (!ref || !ref.current) return;
        const header = document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const top = ref.current.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
        window.scrollTo({ top, behavior: 'smooth' });

        try { ref.current.focus({ preventScroll: true }); } catch (e) { }
        setActiveSection(id);
    }

    useEffect(() => {
        const items = [
            { ref: ecommerceRef, id: 'ecommerce' },
            { ref: energyRef, id: 'energy' },
            { ref: travelRef, id: 'travel' },
            { ref: telecomRef, id: 'media' }
        ];
        const observers = items.map(item => {
            const el = item.ref.current;
            if (!el) return null;
            const obs = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
                    setActiveSection(item.id);
                } else {
                    // if leaving and it was active, clear it
                    setActiveSection(prev => (prev === item.id ? null : prev));
                }
            }, { root: null, threshold: [0.0, 0.35, 0.75] });
            obs.observe(el);
            return obs;
        }).filter(Boolean);

        return () => observers.forEach(o => o.disconnect());
    }, [ecommerceRef, energyRef, travelRef, telecomRef]);

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 text-black">
            <header className="fixed top-0 left-0 right-0 h-16
         bg-white rounded-xl shadow-2xl border-b border-[#ececf1]
          flex items-center px-6 z-50">
                <div className="flex items-center h-full">
                    <img
                        src="/exl-effects.png"
                        alt="Logo"
                        className="w-28  object-contain"
                    />
                </div>
            </header>
            <main className="pt-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-lg sm:text-4xl font-normal leading-tight text-center">
                        <span className="block text-black">Diversified Industries</span>
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl font-normal leading-tight text-center">
                        <span className="text-indigo-500 "> <span className="text-black"> Accelerating Growth Across Industries with Data, Intelligence & Innovation​</span>
                        </span>
                    </p>

                    {/* divider aligned to the p tag width */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-tr from-indigo-700 via-sky-600 to-emerald-500 rounded-t-xl"></div>
                        </div>
                        <div className="relative flex justify-center text-sm my-4">
                            <span className="px-3 bg-white text-indigo-500"><FaChevronDown /></span>
                        </div>
                    </div>
                    </div>
            </main>
            <section className="max-w-7xl mx-auto px-6 py-16">
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-4 sm-grid-cols-1 lg-grid-cols-4 gap-8"
                >
                    {categories.map((cat, idx) => (
                        <motion.article
                            key={cat.id}
                            custom={idx}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: (i) => ({ opacity: 1, y: 0, transistiob: { delay: i * 0.12, type: "spring", stiffness: 220, damping: 20 } }),
                            }}
                            whileHover={{ y: -8 }}
                            onClick={() => scrollToCategory(cat.ref, cat.id)}
                            className="group relative cursor-pointer bg-white rounded-3xl overflow-hidden
        shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300
        border border-slate-100 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                        >
                            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl bg-white/30 blur-2xl opacity-30 pointer-events-none" />
                            <div className="absolute -bottom-6 -right-10 w-36 h-36 rounded-2xl bg-white/20 blur-3xl opacity-25 pointer-events-none" />
                            <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent to-white/30 opacitu-60" />

                            <div className="w-full h-44 sm:h-56 md:h-48 lg:h-56 overflow-hidden">
                                <img
                                    src={cat.image}
                                    alt={`${cat.title} visual`}
                                    className="w-full h-full object-cover block transform transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                                />
                            </div>

                            <div className="relative p-6 flex flex-col h-full">

                                <div className="flex items-start justify-between ">
                                    <h3 className="text-xl font-semibold text-black underline ">
                                        {cat.title}
                                    </h3>
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-100 text-black">
                                        Industry
                                    </span>
                                </div>

                                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                                    {cat.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1 inline-flex w-3 h-3 rounded-full bg-slate-300/80 ring-1 ring-white/20" />
                                            <div>
                                                <div className="font-medium text-slate-700">{b}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className=" pt-6 flex items-center justify-between">
                                    <button
                                        className=" inline-flex items-center gap-2 text-sm font-semibold text-slate-700
                        hover:text-slate-900 transition-colors">
                                        Learn More <FaArrowRight />
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 grid grid-cols-3 gap-1">
                                            <span className="block w-full h-full rounded-sm bg-slate-200" />
                                            <span className="block w-full h-full rounded-sm bg-slate-300" />
                                            <span className="block w-full h-full rounded-sm bg-slate-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>

                    ))}
                </motion.section>
                <main className="mt-24 space-y-10">
                    {[ecommerceRef, energyRef, travelRef, telecomRef].map((ref, idx) => (
                        <div key={idx} ref={ref} className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-100 relative overflow-visible"
                            tabIndex={-1}>
                            {/* <h3 className="text-2xl font-bold text-slate-800 mb-3">{categories[idx].title}-Details</h3> */}
                            <p className=" text-center text-xl font-bold text-slate-600 tracking-wide underline">
                                AI Solution for <span className="text-indigo-600 font-semibold">{categories[idx].title}</span>
                            </p>
                            <p className=" text-center text-lg font-medium text-slate-600 tracking-wide ">
                                Range of AI Solutions ranging from digital data foundation to imporving customer experince
                            </p>
                            {idx === 0 && <CategoryGrid  items={ecommerceItems} columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" openInNewTab={true} />}
                            {idx === 1 && <CategoryGrid title='Energy & Utilities Solutions' items={energyItems} columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" openInNewTab={true} />}
                            {idx === 2 && <CategoryGrid title='Travel & Hospitality Solutions' items={travelItems} columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" openInNewTab={true} />}
                            {idx === 3 && <CategoryGrid title='Media Solutions' items={mediaItems} columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" openInNewTab={true} />}

                            {/* dynamic right-side "go to top" button for the active section */}
                            {activeSection === categories[idx].id && (
                                <button
                                    aria-label="Go to top"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="absolute -right-16 top-10 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg focus:outline-none transition z-50"
                                >
                                    <FaArrowUp />
                                </button>
                            )}
                        </div>
                    ))}
                </main>
            </section>

        </div>
    )
}

