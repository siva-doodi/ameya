"use client";

/* ===================== Imports ===================== */
import Link from "next/link";
import Text from "../components/common/Text";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaPalette,
  FaRocket,
  FaRobot,
  FaShoppingCart,
  FaUniversity,
  FaTruck,
  FaHeartbeat,
  FaUsers,
  FaIndustry,
} from "react-icons/fa";

import {
  Lightbulb,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";

/* ===================== Theme Colors ===================== */
const COLORS = {
  primaryText: "var(--color-primary-text)",
  secondaryText: "var(--color-secondary-text)",
  primaryBg: "var(--color-primary-bg)",
  secondaryBg: "var(--color-secondary-bg)",
  tertiaryBg: "var(--color-tertiary-bg)",
  white: "var(--background)",
};

/* ===================== Static Data ===================== */
const WHY_CHOOSE_US = [
  {
    icon: <Lightbulb size={24} className="text-white" />,
    title: "Innovative Solutions",
    desc: "We leverage emerging technologies to deliver cutting-edge solutions aligned with industry best practices.",
  },
  {
    icon: <ShieldCheck size={24} className="text-white" />,
    title: "Trusted Partnership",
    desc: "We build trust through transparency, open communication, and consistent delivery, backed by a proven record of long-term client success.",
  },
  {
    icon: <Zap size={24} className="text-white" />,
    title: "Core Expertise",
    desc: "We combine multi-domain expertise with industry knowledge to deliver high-quality solutions and align technology with business goals.",
  },
  {
    icon: <Globe size={24} className="text-white" />,
    title: "Scalable Solutions",
    desc: "Our scalable solutions adapt to evolving market conditions and business needs, ensuring future-proof operations.",
  },
];

const SERVICES = [
  {
    icon: FaLaptopCode,
    title: "Custom Software Development",
    desc: "Tailored software built for speed, security, and long-term performance.",
  },
  {
    icon: FaMobileAlt,
    title: "Web Application Development",
    desc: "Enterprise-grade web applications with modern UX and scalability.",
  },
  {
    icon: FaRocket,
    title: "Mobile App Development",
    desc: "High-performance iOS & Android apps using modern frameworks.",
  },
  {
    icon: FaCloud,
    title: "AI Development Services",
    desc: "AI-powered chatbots, automation engines, and predictive systems.",
  },
  {
    icon: FaPalette,
    title: "SaaS Application Development",
    desc: "Secure, multi-tenant SaaS platforms built for global scale.",
  },
  {
    icon: FaRobot,
    title: "Software Integration Services",
    desc: "Seamless integration across ERP, CRM, APIs, and cloud systems.",
  },
];

const INDUSTRIES = [
  { icon: FaLaptopCode, title: "IT & Software" },
  { icon: FaShoppingCart, title: "Retail & E-commerce" },
  { icon: FaUniversity, title: "Finance & Banking" },
  { icon: FaTruck, title: "Logistics & Supply Chain" },
  { icon: FaHeartbeat, title: "Healthcare" },
  { icon: FaUsers, title: "Service Marketplace" },
  { icon: FaIndustry, title: "Manufacturing & ERP" },
];

/* ===================== Page Component ===================== */
export default function PortfolioPage() {
  return (
    <main
      className="min-h-screen font-sans"
      style={{ backgroundColor: COLORS.white, color: COLORS.secondaryText }}
    >

      {/* ===================== HERO ===================== */}
      <section
        className="px-6 md:px-24 py-32 text-center border-b-4 border-white shadow-inner"
        style={{ backgroundColor: COLORS.primaryBg, color: COLORS.primaryText }}
      >
        <p className="text-xl font-medium mb-3">
          Your Partner in Digital Innovation
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Engineering <span>Reliability.</span> Delivering{" "}
          <span style={{ color: COLORS.tertiaryBg }}>Impact.</span>
        </h1>

        <p className="mt-6 text-xl max-w-4xl mx-auto">
          We help businesses design, build, and scale high-quality software products engineered for growth.
        </p>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section
        className="py-24 px-6 md:px-24"
        style={{ backgroundColor: COLORS.secondaryBg }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4" style={{ color: COLORS.primaryText }}>
            Core Service Offerings
          </h2>

          <p className="max-w-3xl mx-auto mb-16 text-lg">
            End-to-end digital solutions covering the full software lifecycle.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition text-left bg-white"
              >
                <Icon className="w-8 h-8 mb-4" style={{ color: COLORS.tertiaryBg }} />
                <h3 className="text-xl font-bold" style={{ color: COLORS.primaryText }}>
                  {title}
                </h3>
                <p className="mt-3 text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section
        className="py-24 px-6 md:px-24"
        style={{ backgroundColor: COLORS.primaryBg }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4" style={{ color: COLORS.primaryText }}>
            Industries We Serve
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left mt-12">
            {INDUSTRIES.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="p-8 bg-white rounded-xl border border-gray-200 shadow-md flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary-bg">
                  <Icon className="w-6 h-6" style={{ color: COLORS.primaryText }} />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">
          <Text variant="h2" className="text-4xl font-extrabold mb-4">
            Why Partner with Ameya?
          </Text>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {WHY_CHOOSE_US.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:-translate-y-1 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-text mx-auto mb-4">
                  {icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <Text variant="p" className="text-sm text-gray-600">
                  {desc}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="max-w-6xl mx-auto px-6 md:px-24 py-20">
        <div
          className="rounded-xl p-14 text-center shadow-2xl border-2"
          style={{
            background: `linear-gradient(135deg, ${COLORS.primaryBg}, ${COLORS.white})`,
            borderColor: COLORS.primaryText,
          }}
        >
          <h3 className="text-4xl md:text-5xl font-extrabold" style={{ color: COLORS.primaryText }}>
            Ready to Discuss Your Vision?
          </h3>

          <p className="mt-4 text-xl max-w-xl mx-auto">
            Schedule a free consultation and transform your idea into reality.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="px-10 py-4 rounded-lg font-bold shadow-xl inline-block bg-primary-text text-white">
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
