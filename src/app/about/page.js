import React from "react";
import MyImage from '../components/MyImage'
import TextCard from '../components/common/TextCard'
import RoundButton from '../components/common/RoundButton'
import Text from '../components/common/Text'
const AboutPage = () => {
    const whychoose = [

        {
            icon: "💡",
            title: "Innovative Solutions",
            desc: "We craft modern software tailored to your unique business needs."
        },
        {
            icon: "🛡️",
            title: "Trusted Partner",
            desc: "Building long-term relationships based on transparency and trust."
        },
        {
            icon: "⚡",
            title: "Fast & Scalable",
            desc: "Our products grow with your business, without slowing you down."
        },
        {
            icon: "🌍",
            title: "Global Reach",
            desc: "Helping clients in multiple industries across the globe."
        }

    ]
    return (
        <>
            <section className="bg-white text-gray-800 ">
                <section className="bg-primary-bg text-gray-800 mt-16 py-10 px-4 md:px-24">
                    <div>
                        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center lg:flex-row gap-10">
                            <div className="lg:w-1/2 lg:text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-8 mb-4">
                                    About <span className="text-primary-text">Ameya Software</span>
                                </h1>
                                <div className="mb-4">
                                    <Text variant="p">We are a passionate team of innovators, designers, and engineers
                                    dedicated to building digital products that make a difference.</Text>
                                </div>
                                <RoundButton
                                    text="Join Our Journey 🚀"
                                />
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
                        description="To empower businesses worldwide by delivering innovative software
        solutions that solve real-world challenges and create lasting value."
                        className="bg-gradient-to-b from-pink-50 to-white text-[#b72960]"
                    />

                    <TextCard
                        title="Our Vision"
                        description="To be the most trusted and admired software development partner,
                            known for our creativity, quality, and commitment."
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
  <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">
    <Text variant="h2" className="mb-16 text-primary-color font-extrabold tracking-wide">
      What We Offer
    </Text>
    <div className="flex flex-wrap justify-center gap-16">
      {[
        { icon: "⚙️", title: "Custom Software", desc: "Tailored solutions crafted for your unique needs." },
        { icon: "🔒", title: "Secure Architecture", desc: "Built with top security practices for your peace of mind." },
        { icon: "🚀", title: "Fast Deployment", desc: "Quick launches to get you up and running fast." },
        { icon: "🤝", title: "Dedicated Support", desc: "We’re with you 24/7 for smooth operation." },
      ].map(({ icon, title, desc }) => (
        <div
          key={title}
          className="flex flex-col items-center max-w-xs cursor-pointer group transition-transform duration-300 hover:scale-110"
        >
          <div className="text-7xl mb-4 text-primary-text group-hover:text-[#b72960] transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-text transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">{desc}</p>
          <div className="mt-3 h-1 w-16 bg-transparent group-hover:bg-primary-text rounded-full transition-colors"></div>
        </div>
      ))}
    </div>
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