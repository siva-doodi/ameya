import React from "react";
import MyImage from '../components/MyImage'
import TextCard from '../components/common/TextCard'
import RoundButton from '../components/common/RoundButton'
import Text from '../components/common/Text'
import {
  Headphones,
  Wrench,
  Code,
  Brain,
  Cloud,
  Lightbulb,
  Zap, // Added Zap icon for a tech feel
  ShieldCheck, // Added ShieldCheck
  Globe, // Added Globe
  LightbulbOff // Added LightbulbOff
} from "lucide-react"; // install: npm i lucide-react
import Link from "next/link"; // Assuming Next.js or similar for Link/MyImage

const AboutPage = () => {
  const colors = {
    primaryText: "var(--color-primary-text)", // #334EAC (Deep Blue)
    secondaryText: "var(--color-secondary-text)", // #5D5D5D (Medium Gray)
    primaryBg: "var(--color-primary-bg)", // #D0E4F2 (Light Blue/Accent Background)
    secondaryBg: "var(--color-secondary-bg)", // #f9fafb (Off-White/Light Gray)
    tertiaryBg: "var(--color-tertiary-bg)", // #608BC1 (Mid Blue/Action Background)
    white: "var(--background)", // #ffffff
  };
  const cultureData = [
    {
      title: "Flexible Work",
      description: "Flexible hours, and supportive PTO policies that help you balance work and life.",
      icon: "/icons/working_3264753.png",
    },
    {
      title: "Innovation First",
      description: "Opportunities to experiment with new ideas, cutting-edge tools, and emerging technologies without fear of failure.",
      icon: "/icons/idea_13453744.png",
    },
    {
      title: "Collaborative Environment",
      description: "Open communication, team brainstorming sessions, and cross-functional projects to fuel creativity and problem-solving.",
      icon: "/icons/work-team_5085095.png",
    },
    {
      title: "Inclusive Culture",
      description: "A respectful, diverse, and welcoming workplace where every voice is heard and valued.",
      icon: "/icons/people_16441691.png",
    },
  ];
  const services = [
    {
      icon: <Headphones size={32} className="text-primary-text" />,
      title: "24/7 Dedicated Support & Maintenance",
      desc: "Round-the-clock technical assistance with proactive monitoring and rapid issue resolution."
    },
    {
      icon: <Wrench size={32} className="text-primary-text" />,
      title: "End-to-End SAP Solutions",
      desc: "Complete SAP CPI, ABAP, MM, and S/4HANA services from consultation to implementation and ongoing optimization."
    },
    {
      icon: <Code size={32} className="text-primary-text" />,
      title: "Custom Web & Application Development",
      desc: "Full-cycle development services creating scalable, secure applications tailored to your business needs."
    },
    {
      icon: <Brain size={32} className="text-primary-text" />,
      title: "AI-Powered Digital Transformation",
      desc: "Intelligent automation solutions that enhance operational efficiency and drive data-driven decision making."
    },
    {
      icon: <Cloud size={32} className="text-primary-text" />,
      title: "Secure Cloud Infrastructure Management",
      desc: "Complete cloud migration, optimization, and management services ensuring scalability and cost-effectiveness."
    },
    {
      icon: <Lightbulb size={32} className="text-primary-text" />,
      title: "Strategic IT Consulting & Integration",
      desc: "Expert technology guidance and seamless system integration aligned with your business objectives."
    },
  ];

 
  return (
    <>
      <section className="bg-white text-gray-800 ">
        {/* Hero Section - Elevated to be more punchy and use primary color */}
        <section className="bg-primary-bg mt-16 py-16 px-4 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col justify-center items-center lg:flex-row gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-sm font-semibold uppercase text-primary-text mb-2">Our Foundation</p>
              <h1 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold leading-tight mb-6 text-gray-900">
                We <span className="text-primary-text">engineer intelligence</span> and technology to redefine what’s possible.
              </h1>
              <p className="text-lg text-secondary-text mb-8 max-w-lg lg:max-w-none">
                At the pinnacle of progress, we weave AI, SAP, and Cloud expertise into powerful innovations that not only shape the future but redefine what’s possible for businesses and communities worldwide.
              </p>

            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden  bg-white shadow-2xl">
              <MyImage
                src="/images/about-hero.png"
                alt="Digital Transformation"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6 lg:px-24 py-24 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl shadow-lg bg-white border-t-8 border-primary-text transition-all duration-300 hover:shadow-xl">
            <Text variant="h3" className="text-2xl font-bold mb-4 text-primary-text">
              Our Mission
            </Text>
            <Text variant="p" className="text-gray-700">
              Ameya IT Solutions combines creativity and technology to deliver AI, SAP, cloud, and immersive solutions. We innovate to solve complex problems and empower clients to thrive in a connected, future-ready world.
            </Text>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-3xl shadow-lg bg-white border-t-8 border-primary-text transition-all duration-300 hover:shadow-xl">
            <Text variant="h3" className="text-2xl font-bold mb-4 text-primary-text">
              Our Vision
            </Text>
            <Text variant="p" className="text-gray-700">
              To be the catalyst for global digital transformation — turning bold ideas into intelligent, future-ready solutions that inspire continuous innovation, empower businesses, and accelerate their success worldwide.
            </Text>
          </div>
        </div>
        <section

          className="py-24 px-6 md:px-24 bg-secondary-bg"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 text-center md:text-left">
              <h2 className="text-4xl font-extrabold mb-4">
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

        {/* What We Offer (Services) - Clean and Professional Grid */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">

            {/* Heading */}
            <Text
              variant="h2"
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900"
            >
              Our Core Services
            </Text>

            <p className="text-lg text-secondary-text mb-16 max-w-3xl mx-auto">
              We provide a comprehensive suite of IT solutions, from strategic consulting
              to end-to-end implementation and support.
            </p>

            {/* Services Grid */}
            <section className="py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex flex-col items-start text-left p-6 bg-secondary-bg rounded-xl shadow-md
                       transition-all duration-300 hover:shadow-xl hover:border-primary-text
                       border border-transparent"
                  >
                    <div className="p-3 mb-4 rounded-lg bg-primary-bg text-primary-text">
                      {icon}
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA BUTTON */}
            <div className="mt-16 flex justify-center">
              <Link href="/services_categories">
                <RoundButton text="View All Services" />
              </Link>
            </div>

          </div>
        </div>


        <section className="py-28 bg-primary-bg px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-extrabold text-gray-900">
              Our Culture
            </h2>
            <p className="text-gray-700 text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
              We cultivate a culture rooted in innovation, collaboration, and accountability. Our teams are empowered to think boldly, work transparently, and continuously improve—ensuring we deliver high-quality solutions while growing together as professionals and partners to our clients.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-14 relative">
            <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-primary-text/20 hidden md:block"></div>

            {cultureData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-8 bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition"
              >
                {/* ICON */}
                <div className="shrink-0 relative z-10">
                  <div className="
                    w-16 h-16 rounded-full 
                    bg-secondary-bg text-white 
                    flex items-center justify-center
                    shadow-lg
                  ">
                    <MyImage
                      src={item.icon}
                      alt={item.title}
                      width={30}
                      height={30}
                      className="object-contain invert"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-2xl font-semibold text-primary-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
export default AboutPage