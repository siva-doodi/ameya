"use client";
import Link from "next/link";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPalette, FaRocket, FaRobot, FaCheckCircle, FaStar, FaHandshake, FaTrophy } from 'react-icons/fa';

export default function PortfolioPage() {
    
    // --- Re-mapping the provided CSS variables to local constants for cleaner JSX ---
    const colors = {
        primaryText: "var(--color-primary-text)", // #334EAC (Deep Blue)
        secondaryText: "var(--color-secondary-text)", // #5D5D5D (Medium Gray)
        primaryBg: "var(--color-primary-bg)", // #D0E4F2 (Light Blue/Accent Background)
        secondaryBg: "var(--color-secondary-bg)", // #f9fafb (Off-White/Light Gray)
        tertiaryBg: "var(--color-tertiary-bg)", // #608BC1 (Mid Blue/Action Background)
        white: "var(--background)", // #ffffff
    };

    const services = [
        { icon: FaLaptopCode, title: "Custom Web Applications", desc: "Scalable, high-performance systems built with modern frameworks." },
        { icon: FaMobileAlt, title: "Mobile App Development", desc: "Native-quality experiences for iOS and Android platforms." },
        { icon: FaRocket, title: "SaaS Product Development", desc: "From MVP to enterprise-ready cloud solutions." },
        { icon: FaCloud, title: "Cloud Architecture & DevOps", desc: "Optimizing deployments, security, and infrastructure costs." },
        { icon: FaPalette, title: "Strategic UI/UX Design", desc: "User-centric design focused on engagement and conversion." },
        { icon: FaRobot, title: "AI & Data Automation", desc: "Integrating intelligent systems to streamline operations." },
    ];

    return (
        <main 
            style={{ backgroundColor: colors.white, color: colors.secondaryText }}
            className="min-h-screen font-sans"
        >
            {/* ===================== HERO - Emphasis on Professionalism ===================== */}
            <section 
                style={{ backgroundColor: colors.primaryBg, color: colors.primaryText }} 
                className="px-6 md:px-24 py-32 text-center border-b-4 border-white shadow-inner"
            >
                <p className="text-xl font-medium mb-3">
                    Your Partner in Digital Innovation
                </p>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                    Engineering <span style={{ color: colors.primaryText }}>Reliability.</span> Delivering <span style={{ color: colors.tertiaryBg }}>Impact.</span>
                </h1>

                <p 
                    style={{ color: colors.secondaryText }} 
                    className="mt-6 text-xl max-w-4xl mx-auto"
                >
                    We help businesses design, build, and scale high-quality software products that are engineered for performance and sustained growth.
                </p>

                <div className="mt-12 flex justify-center gap-6">
                    <Link href="/contact" passHref legacyBehavior>
                        <a 
                            style={{ backgroundColor: colors.primaryText, color: colors.white }}
                            className="px-10 py-4 rounded-lg font-bold shadow-xl transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl"
                        >
                            Start Your Project Today
                        </a>
                    </Link>
                    <Link href="#work" passHref legacyBehavior>
                        <a
                            style={{ borderColor: colors.primaryText, color: colors.primaryText }}
                            className="px-10 py-4 border-2 rounded-lg font-semibold transition duration-300 hover:bg-white/50"
                        >
                            View Our Case Studies
                        </a>
                    </Link>
                </div>
            </section>

            {/* ===================== ABOUT - Clean Introduction ===================== */}
            <section 
                style={{ backgroundColor: colors.white }} 
                className="py-24 px-6 md:px-24"
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1 text-center md:text-left">
                        <h2 style={{ color: colors.primaryText }} className="text-4xl font-extrabold mb-4">
                            Who We Are
                        </h2>
                        <div style={{ backgroundColor: colors.tertiaryBg }} className="h-1 w-20 mx-auto md:mx-0 rounded-full"></div>
                    </div>
                    <p 
                        style={{ color: colors.secondaryText }} 
                        className="md:col-span-2 text-lg leading-relaxed"
                    >
                        We are a dedicated team of senior engineers and designers committed to ethical, transparent, and quality-driven software development. Our focus is not just on writing code, but on delivering measurable business value and setting a foundation for long-term technical excellence.
                    </p>
                </div>
            </section>

            {/* ===================== SERVICES - Clear Value Proposition ===================== */}
            <section 
                style={{ backgroundColor: colors.secondaryBg }} 
                className="py-24 px-6 md:px-24"
            >
                <div className="max-w-6xl mx-auto text-center">

                    <h2 style={{ color: colors.primaryText }} className="text-4xl font-extrabold mb-4">
                        Core Service Offerings
                    </h2>
                    <p style={{ color: colors.secondaryText }} className="max-w-3xl mx-auto mt-2 mb-16 text-lg">
                        End-to-end digital solutions covering the full software development lifecycle.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                style={{ backgroundColor: colors.white }}
                                className="p-8 rounded-xl border border-gray-200 shadow-md transition duration-300 hover:shadow-lg hover:-translate-y-1 text-left"
                            >
                                <service.icon style={{ color: colors.tertiaryBg }} className="w-8 h-8 mb-4" />
                                <h3 style={{ color: colors.primaryText }} className="text-xl font-bold">{service.title}</h3>
                                <p style={{ color: colors.secondaryText }} className="mt-3 text-base">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== STATS - Building Credibility ===================== */}
            <section 
                style={{ backgroundColor: colors.tertiaryBg }} 
                className="py-16 px-6 md:px-24"
            >
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
                    {[
                        ["120+", "Projects Successfully Delivered"],
                        ["98%", "Client Retention Rate"],
                        ["6+", "Years of Industry Experience"],
                        ["4.9/5", "Average Client Rating"],
                    ].map(([value, label], i) => (
                        <div key={i}>
                            <p className="text-5xl font-extrabold mb-1">{value}</p>
                            <p className="mt-2 text-sm font-light uppercase tracking-wider">{label}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* ===================== CASE STUDIES - Showcase (Key Selling Point) ===================== */}
            <section 
                id="work" 
                style={{ backgroundColor: colors.white }} 
                className="py-24 px-6 md:px-24"
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 style={{ color: colors.primaryText }} className="text-4xl font-extrabold mb-4">
                        Proof in the Products
                    </h2>

                    <p style={{ color: colors.secondaryText }} className="max-w-3xl mx-auto mt-2 mb-16 text-lg">
                        See how we translate engineering excellence into tangible business results.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Enterprise Workflow Automation",
                                desc: "Achieved 60% operational efficiency gain by migrating legacy systems to a secure, modern SaaS platform.",
                                tags: ["SaaS", "AWS", "Automation"]
                            },
                            {
                                title: "High-Volume Fintech Engine",
                                desc: "Developed a real-time transaction engine handling 1M+ daily requests with less than 10ms latency.",
                                tags: ["Performance", "Fintech", "Node.js"]
                            },
                            {
                                title: "E-commerce Conversion Uplift",
                                desc: "Boosted customer conversion by 32% through strategic UX/UI redesign and performance optimization (Next.js).",
                                tags: ["UI/UX", "E-commerce", "React"]
                            }
                        ].map((project, i) => (
                            <div
                                key={i}
                                className="p-7 rounded-xl border-t-4 border-b-4 border-gray-200 shadow-lg hover:shadow-xl transition duration-300 hover:border-l-4 hover:border-r-4 text-left"
                                style={{ borderColor: colors.primaryText }}
                            >
                                <h3 style={{ color: colors.primaryText }} className="text-xl font-bold">{project.title}</h3>
                                <p style={{ color: colors.secondaryText }} className="mt-3 text-base leading-relaxed">{project.desc}</p>
                                
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: colors.primaryBg, color: colors.primaryText }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href="#" passHref legacyBehavior>
                                    <a style={{ color: colors.tertiaryBg }} className="font-semibold inline-block mt-4 text-sm hover:underline">
                                        View Full Case Study →
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ===================== WHY CHOOSE US - Trust & Differentiation ===================== */}
            <section 
                style={{ backgroundColor: colors.secondaryBg }} 
                className="py-24 px-6 md:px-24"
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 style={{ color: colors.primaryText }} className="text-4xl font-extrabold mb-4">
                        The Advantage You Need
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10 mt-16 text-left">
                        {[
                            { icon: FaHandshake, title: "Total Transparency", desc: "Open communication, fixed budgets, and constant feedback loops." },
                            { icon: FaTrophy, title: "Senior Engineering Talent", desc: "No junior staff—only experienced problem-solvers on your project." },
                            { icon: FaStar, title: "Guaranteed Scalability", desc: "Architectures designed not just for today, but for 5x growth." },
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-xl shadow-lg bg-white border border-gray-100 hover:shadow-xl transition duration-300">
                                <item.icon style={{ color: colors.primaryText }} className="w-8 h-8 mb-3" />
                                <h3 style={{ color: colors.primaryText }} className="text-xl font-bold mb-2">{item.title}</h3>
                                <p style={{ color: colors.secondaryText }} className="text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ===================== CTA - Final Push ===================== */}
            <section 
                style={{ backgroundColor: colors.white }} 
                className="max-w-6xl mx-auto px-6 md:px-24 py-20"
            >
                <div 
                    className="rounded-xl p-14 text-center shadow-2xl border-2"
                    style={{ background: `linear-gradient(135deg, ${colors.primaryBg}, ${colors.white})`, borderColor: colors.primaryText }}
                >
                    <h3 style={{ color: colors.primaryText }} className="text-4xl md:text-5xl font-extrabold">
                        Ready to Discuss Your Vision?
                    </h3>

                    <p style={{ color: colors.secondaryText }} className="mt-4 text-xl max-w-xl mx-auto">
                        Schedule a free consultation to see how we can transform your product idea into reality.
                    </p>

                    <div className="mt-8 flex justify-center gap-4">
                        <Link href="/contact" passHref legacyBehavior>
                            <a 
                                style={{ backgroundColor: colors.primaryText, color: colors.white }}
                                className="px-10 py-4 rounded-lg font-bold shadow-xl transition duration-300 hover:scale-105"
                            >
                                Book Your Consultation
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}