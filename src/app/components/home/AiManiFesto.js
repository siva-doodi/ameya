'use client';
import React from "react";
import Image from 'next/image';
import MyImage from '../../components/MyImage'
import Button from "../../components/common/Button";
import Text from '../common/Text'
const AiManiFesto = () => {
    return (
        <>
            <section className="px-4 md:px-24 py-12 bg-[#608BC1] text-white">
                <div className="md:w-[80%] m-auto">
                    <div className="md:w-[45%] md:m-auto">
                        <div className="md:text-center text-2xl border-b-2 rounded border-[#0f1941] p-2 font-bold mb-4">
                            Overview: Ameya IT Solutions
                        </div>
                    </div>
                    <Text variant="span">
                        At Ameya IT Solutions, we deliver intelligent software solutions that empower businesses to streamline operations, enhance user experiences, and drive growth. Our team leverages advanced technologies, including AI, cloud computing, and enterprise software platforms, to create custom applications, automate workflows, and optimize business processes. From ideation to implementation, we focus on innovation, reliability, and measurable results, helping organizations achieve operational excellence and maximize their technology investments.
                    </Text>
                </div>

            </section>
            <section className="px-4 md:px-24 mt-20">
                {/* Section 1 */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="w-full md:w-[50%]">
                        <MyImage
                            src="/images/hemosect1.jpg"
                            alt="Next.js Logo"
                            width={500}
                            height={400}
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <Text variant="h3" className="text-[2rem] text-primary-text font-bold mb-4">
                            Intelligent Insights{" "}
                            <span className="text-[#5D5D5D] font-[300]">
                                to optimize your business operations
                            </span>
                        </Text>
                        <Text variant="p" className="text-justify mb-4">
                            Leverage your organization's data effectively to make smarter decisions. By integrating and analyzing all key information in one place, we create a unified view that empowers your business with actionable insights. Enhance efficiency, improve customer experiences, and drive growth with data-driven strategies designed for success.
                        </Text>
                        <Button text="Learn More" />
                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-20">
                    <div className="w-full md:w-[50%] order-2 md:order-1">
                        <Text variant="h3">
                            Business Intelligence{" "}
                            <span className="text-[#5D5D5D] font-[300]">
                                to optimize your operations
                            </span>
                        </Text>
                        <Text variant="p" className="text-justify mb-4">
                            Harness the power of your organization’s data to make smarter, faster decisions. By consolidating information into a unified platform, we provide actionable insights that streamline processes, enhance operational efficiency, and improve customer satisfaction across all touchpoints. Data-driven strategies pave the way for sustained growth and innovation.
                        </Text>

                        <Button text="Click Me" />
                    </div>
                    <div className="w-full md:w-[50%] order-1 md:order-2 ">
                        <MyImage
                            src="/images/herosection2.jpg"
                            alt="Next.js Logo"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
export default AiManiFesto;