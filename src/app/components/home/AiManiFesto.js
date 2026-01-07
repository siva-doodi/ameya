"use client";
import MyImage from "../../components/MyImage";
import Button from "../../components/common/Button";
import Text from "../common/Text";

export default function AiManiFesto() {
    return (
        <>
            {/* OVERVIEW */}
            <section className="px-6 md:px-24 py-20 bg-[#608BC1] text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold  inline-block pb-2 mb-6">
                        Overview: Ameya IT Solutions
                    </h2>

                    <Text variant="p" className="text-lg leading-relaxed text-white">
                        At Ameya IT Solutions, we deliver intelligent software solutions that empower businesses to streamline operations, enhance user experiences, and drive growth. Our team leverages advanced technologies, including AI, cloud computing, and enterprise software platforms, to create custom applications, automate workflows, and optimize business processes. From ideation to implementation, we focus on innovation, reliability, and measurable results, helping organizations achieve operational excellence and maximize their technology investments.
                    </Text>
                </div>
            </section>

            {/* SECTION 1 */}
            <section className="bg-primary-bg py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-24 grid md:grid-cols-2 gap-12 items-center">

                    {/* IMAGE LEFT */}
                    <MyImage
                        src="/images/hemosect1.jpg"
                        alt="Intelligent Insights"
                        width={600}
                        height={450}
                        className="rounded-lg"
                    />

                    {/* TEXT */}
                    <div>
                        <Text variant="h3" className="text-3xl font-bold text-primary-text mb-4">
                            Intelligent Insights{" "}
                            <span className="text-[#5D5D5D] font-light">to optimize operations</span>
                        </Text>

                        <Text variant="p" className="text-justify mb-6">
                            Leverage your organization's data effectively to make smarter decisions. By integrating and analyzing all key information in one place, we create a unified view that empowers your business with actionable insights. Enhance efficiency, improve customer experiences, and drive growth with data-driven strategies designed for success.
                        </Text>                  
                    </div>
                </div>
            </section>

            {/* DIVIDER */}
            <section className="bg-primary-bg py-2">
                <div className="flex justify-center items-center relative">
                    <div className="w-[70%] h-[2px] bg-gradient-to-r from-transparent via-[#608BC1] to-transparent"></div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="bg-primary-bg py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-24 grid md:grid-cols-2 gap-12 items-center">

                    {/* TEXT LEFT */}
                    <div>
                        <Text variant="h3" className="text-3xl font-bold text-primary-text mb-4">
                            Business Intelligence{" "}
                            <span className="text-[#5D5D5D] font-light">to optimize your operations</span>
                        </Text>

                        <Text variant="p" className="text-justify mb-6">
                            Harness the power of your organization’s data to make smarter, faster decisions. By consolidating information into a unified platform, we provide actionable insights that streamline processes, enhance operational efficiency, and improve customer satisfaction across all touchpoints. Data-driven strategies pave the way for sustained growth and innovation.
                        </Text>

                        
                    </div>

                    <MyImage
                        src="/images/herosection2.jpg"
                        alt="Business Intelligence"
                        width={600}
                        height={450}
                        className="rounded-lg"
                    />
                </div>
            </section>
        </>
    );
}
