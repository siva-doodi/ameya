"use client";

import Link from "next/link";
// Using Lucide Icons for clean, professional SVG graphics
import { Monitor, Smartphone, Cpu, Cloud, Settings, BarChart2, ArrowRight, UserCheck, Clock, Shield } from 'lucide-react';

const services = [
    {
        id: "web-technologies",
        title: "Web Technologies",
        href: "/services/web-technologies",
        description:
            "Enterprise web apps, PWAs, performance-first frontends and API-driven backends.",
        bullets: [
            "React / Next.js / TypeScript",
            "Responsive & accessible UI",
            "Performance & SEO optimisations",
        ],
        icon: "Monitor",
    },
    {
        id: "application-development",
        title: "Application Development",
        href: "/services/application-development",
        description:
            "End-to-end app engineering: native & cross-platform mobile, desktop and SaaS products.",
        bullets: ["Mobile-first architecture", "CI/CD & testing", "Scalable microservices"],
        icon: "Smartphone",
    },
    {
        id: "artificial-intelligence",
        title: "Artificial Intelligence",
        href: "/services/artificial-intelligence",
        description:
            "Production-ready ML systems, NLP, recommendation engines and automation pipelines.",
        bullets: ["Model training & deployment", "NLP & Computer Vision", "MLOps & monitoring"],
        icon: "Cpu",
    },
    {
        id: "cloud-services",
        title: "Cloud Services",
        href: "/services/cloud-services",
        description:
            "Cloud architecture, infra-as-code, observability, and production reliability.",
        bullets: ["AWS / Azure / GCP", "IaC & automation", "Cost & security optimisations"],
        icon: "Cloud",
    },
    {
        id: "sap-services",
        title: "SAP Services",
        href: "/services/sap-services",
        description:
            "SAP consulting, implementations and integrations to modernize enterprise systems.",
        bullets: ["Module implementation", "Data migration", "Custom integrations"],
        icon: "Settings",
    },
    {
        id: "data-science",
        title: "Data Science",
        href: "/services/data-science",
        description:
            "BI, analytics, forecasting and data platforms that turn data into decisions.",
        bullets: ["Dashboards & reporting", "Forecasting models", "Data engineering"],
        icon: "BarChart2",
    },
];

// Simplified Icon mapping using Lucide React
function Icon({ name, className, style }) {
    const IconComponent = {
        Monitor,
        Smartphone,
        Cpu,
        Cloud,
        Settings,
        BarChart2,
        UserCheck,
        Clock,
        Shield,
    }[name];

    if (!IconComponent) return null;

    return <IconComponent className={className} strokeWidth={1.8} style={style} />;
}

export default function ServicesCategories() {

    const colors = {
        primaryText: "var(--color-primary-text)", // #334EAC (Deep Blue)
        secondaryText: "var(--color-secondary-text)", // #5D5D5D (Medium Gray)
        primaryBg: "var(--color-primary-bg)", // #D0E4F2 (Light Blue)
        secondaryBg: "var(--color-secondary-bg)", // #f9fafb (Off-White)
        tertiaryBg: "var(--color-tertiary-bg)", // #608BC1 (Mid Blue)
        white: "var(--background)", // #ffffff
    };

    return (
        <main className="min-h-screen font-sans mt-10" style={{ backgroundColor: colors.white }}>
            <section id="services-grid" className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold" style={{ color: colors.primaryText }}>Our Core Capabilities</h2>
                    <p className="mt-3 text-xl max-w-4xl mx-auto" style={{ color: colors.secondaryText }}>
                        Highly specialized engineering and consulting services tailored for the enterprise lifecycle.
                    </p>
                </div>

                {/* CARDS - New, shorter, icon-centered design with refined hover */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                        <Link
                            key={s.id}
                            href={s.href}
                            passHref
                            legacyBehavior
                        >
                            <a className="group relative block rounded-xl p-6 bg-white border-2 transition-all duration-300 ease-in-out"
                                style={{
                                    // Initial border color is a light gray, for a clean start
                                    borderColor: 'var(--color-secondary-bg)', // A light gray from your defined colors or a similar light gray
                                    boxShadow: '0 4px 12px -3px rgba(0,0,0,0.05)', // Subtle initial shadow
                                    cursor: 'pointer' // Explicitly indicate clickability
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = colors.primaryText;
                                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(51,78,172,0.2)'; // More pronounced blue-ish shadow
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-secondary-bg)'; // Reset to light gray
                                    e.currentTarget.style.boxShadow = '0 4px 12px -3px rgba(0,0,0,0.05)'; // Reset to subtle shadow
                                }}
                            >
                                <div className="flex flex-col items-center text-center">

                                    {/* ICON AREA - Centered, larger icon with a clean background */}
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4 flex-none"
                                        style={{ background: colors.primaryBg, border: `2px solid ${colors.tertiaryBg}` }}
                                    >
                                        <Icon name={s.icon} className="w-8 h-8" style={{ color: colors.primaryText }} />
                                    </div>

                                    {/* TEXT CONTENT - Title is the focus */}
                                    <h3 className="text-xl font-extrabold mb-2" style={{ color: colors.primaryText }}>
                                        {s.title}
                                    </h3>

                                    {/* Shortened Description */}
                                    <p className="text-sm text-gray-700 leading-normal mb-4 px-2">
                                        {s.description}
                                    </p>

                                    {/* Clear CTA line to reinforce clickability */}
                                    <div className="mt-2 inline-flex items-center gap-2 text-sm font-bold transition duration-300 group-hover:gap-3 group-hover:underline" style={{ color: colors.tertiaryBg }}>
                                        View Solutions <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 lg:px-12 my-20">
                <div
                    className="rounded-xl p-16 text-center shadow-2xl border-2"
                    style={{ background: `linear-gradient(135deg, ${colors.primaryBg}, ${colors.white})`, borderColor: colors.primaryText }}
                >
                    <h3 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
                        Your Next Engineering Challenge Starts Here
                    </h3>

                    <p className="mt-4 text-xl text-[var(--color-secondary-text)] max-w-3xl mx-auto">
                        Ready to elevate your product's performance and stability? Let's book a discovery call.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <Link href="/contact" passHref legacyBehavior>
                            <a className="px-10 py-4 rounded-full font-bold text-xl shadow-xl transition hover:scale-105"
                                style={{ background: colors.primaryText, color: colors.white }}>
                                Schedule Discovery Call
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}