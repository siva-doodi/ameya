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
} from "lucide-react"; // install: npm i lucide-react
const AboutPage = () => {
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
      icon: <Headphones size={56} />,
      title: "24/7 Dedicated Support & Maintenance",
      desc: "Round-the-clock technical assistance with proactive monitoring and rapid issue resolution."
    },
    {
      icon: <Wrench size={56} />,
      title: "End-to-End SAP Solutions",
      desc: "Complete SAP CPI, ABAP, MM, and S/4HANA services from consultation to implementation and ongoing optimization."
    },
    {
      icon: <Code size={56} />,
      title: "Custom Web & Application Development",
      desc: "Full-cycle development services creating scalable, secure applications tailored to your business needs."
    },
    {
      icon: <Brain size={56} />,
      title: "AI-Powered Digital Transformation",
      desc: "Intelligent automation solutions that enhance operational efficiency and drive data-driven decision making."
    },
    {
      icon: <Cloud size={56} />,
      title: "Secure Cloud Infrastructure Management",
      desc: "Complete cloud migration, optimization, and management services ensuring scalability and cost-effectiveness."
    },
    {
      icon: <Lightbulb size={56} />,
      title: "Strategic IT Consulting & Integration",
      desc: "Expert technology guidance and seamless system integration aligned with your business objectives."
    },
  ];

  const whychoose = [

    {
      icon: "💡",
      title: "Innovative Solutions",
      desc: "We leverage emerging technologies to deliver cutting-edge solutions aligned with industry best practices."
    },
    {
      icon: "🛡️",
      title: "Trusted Partnership",
      desc: "We build trust through transparency, open communication, and consistent delivery, backed by a proven record of long-term client success."
    },
    {
      icon: "⚡",
      title: "Our Core Expertise",
      desc: "We combine multi-domain expertise with industry knowledge to deliver high-quality solutions and align technology with business goals."
    },
    {
      icon: "🌍",
      title: "Scalable Solution",
      desc: "Our scalable solutions adapt to evolving market conditions and business needs."
    }

  ]
  return (
    <>
      <section className="bg-white text-gray-800 ">
        <section className="bg-primary-bg text-gray-800 mt-16 py-10 px-4 md:px-24">
          <div>
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center lg:flex-row gap-10">
              <div className="lg:w-1/2 lg:text-center lg:text-left">
                <h1 className="text-xl sm:text-4xl lg:text-2xl font-bold mt-8 mb-4">
                  At the pinnacle of progress,<span className="text-primary-text"> we weave intelligence and technology into powerful innovations that not only shape the future but redefine what’s possible for businesses and communities worldwide.</span>
                </h1>
              </div>
              <div className="lg:w-1/2 shadow-md bg-white rounded-lg p-4">
                <MyImage
                  src="/images/about-hero.png"
                  alt="About Ameya"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6 lg:px-24 py-20 grid md:grid-cols-2 gap-10">
          <TextCard
            title="Our Mission"
            description="Ameya IT Solutions combines creativity and technology to deliver AI, SAP, cloud, and immersive solutions.
We innovate to solve problems and empower clients in a connected future.
"
            className="bg-gradient-to-b from-pink-50 to-white text-[#b72960]"
          />

          <TextCard
            title="Our Vision"
            description="To be the catalyst for global digital transformation — turning bold ideas into intelligent, future-ready solutions that inspire innovation, empower businesses, and accelerate success. "
            className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-yellow-50 to-white hover:shadow-xl transition"
          />
        </div>
        {/* <div className="bg-secondary-bg py-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <Text variant="h2">Our Journey</Text>
                        <div className="relative border-l-4 border-[#b72960] pl-6">
                            <div className="mb-10">
                                <Text variant="h6">2018 - Founded</Text>
                                <Text variant="p">Started with a small but passionate team.</Text>
                            </div>
                            <div className="mb-10">
                                <Text variant="h6">2020 - First Major Product</Text>
                                <Text variant="p">Launched our flagship SaaS platform.</Text>
                            </div>
                            <div>
                                <Text variant="h6">2023 - Global Expansion</Text>
                                <Text className="text-gray-600">Serving clients in over 10 countries.</Text>
                            </div>
                        </div>
                    </div>
                </div> */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center ">
            <Text variant="h2" className="mb-16 text-primary-color font-extrabold tracking-wide">
              What We Offer
            </Text>
            <section className="py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                {services.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
                  >
                    <div className="mb-4 text-primary-text group-hover:text-[#b72960] transition-colors">
                      {icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary-text transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{desc}</p>
                    <div className="mt-3 h-1 w-16 bg-transparent group-hover:bg-primary-text rounded-full transition-colors"></div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
        <section className="bg-primary-bg py-20 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

            {/* Image side */}
            <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/about-team.jpg"
                alt="Ameya Software Team"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Text side */}
            <div className="lg:w-1/2 text-gray-900">
              <h2 className="text-4xl font-extrabold mb-6 text-primary-text">
                About Ameya Software
              </h2>
              <p className="mb-6 text-lg leading-relaxed">
                At Ameya Software, we are passionate about delivering innovative digital solutions that empower businesses to thrive. Our expert team combines creativity, technology, and dedication to bring your ideas to life.
              </p>
              <ul className="space-y-4">
                {[
                  "Cutting-edge technology tailored to your needs",
                  "Reliable and transparent communication",
                  "Commitment to quality and customer success",
                  "Global reach with a personal touch",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-primary-text">
                    <span className="text-2xl">✔️</span> {point}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-10 px-8 py-3 bg-primary-text text-white rounded-full font-semibold hover:bg-[#9f1d4d] transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
        <section className="bg-white py-20 px-6 md:px-18">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              At Ameya IT Solutions, we blend creativity, technology, and teamwork. We believe in ownership, curiosity, and continuous growth — building solutions we’re proud of and results that matter.
            </p>
          </div>

          {/* <div className="shadow-lg p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto ">
              {cultureData.map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <MyImage
                      src={item.icon}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div> */}
        </section>
        <section className="lg:px-20 py-20 bg-secondary-bg">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 shadow-lg lg:p-6 rounded-lg bg-white">
            {cultureData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-2 p-4">
                
                <MyImage 
                  src={item.icon}
                  alt="icon-1"
                  width="50"
                  height="50"
                />
                <Text variant="h5" className="font-semibold">{item.title}</Text>
                <Text variant="p" className="text-gray-600">{item.description}</Text>
              </div>
            ))}
          </div>
        </section>
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">
            <Text variant="h2">
              Why Choose Ameya Software?
            </Text>
            <Text variant="p">
              At Ameya Software, we combine innovation, expertise, and passion to deliver
              solutions that help businesses thrive in the digital era.
            </Text>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {
                whychoose.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h4 className="text-lg font-semibold text-primary-color mb-2">{item.title}</h4>
                    <Text variant="p" className="text-sm text-secondary-color">{item.desc}</Text>
                  </div>
                ))
              }

            </div>
          </div>
        </div>

      </section>

    </>
  )
}
export default AboutPage