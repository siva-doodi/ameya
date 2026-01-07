'use client';
import React from "react";
import Button from "../../components/common/Button";
import Image from 'next/image';
import RoundButton from "../common/RoundButton";
import MyImage from "../MyImage";
import Text from '../common/Text';
import { Lightbulb, Wrench, Target, Rocket, Vibrate, Server, BrainCircuit } from "lucide-react";
import { FaGlobe, FaMobileAlt, FaServer, FaCloud, FaRobot, FaDatabase } from "react-icons/fa";
const AiServiceSection = () => {
    const listOfServices = [
        { id: 1, icon: <FaGlobe size={25} />, name: "Web Technologies", description: " Engineering digital excellence through cutting-edge web technologies that transform your vision into powerful, scalable online experiences. "},
        { id: 2, icon: <Vibrate size={30} />, name: "Application Development ", description: " Crafting intelligent applications that streamline operations, boost productivity, and deliver competitive advantages through innovative software solutions " },
        { id: 3, icon: <BrainCircuit size={25} />, name: "AI (Artificial Intelligence)", description: " Unlocking business potential with advanced AI solutions that automate processes, predict trends, and drive intelligent decision-making across your enterprise. " },
        { id: 4, icon: <FaCloud size={25} />, name: "Cloud Services", description: " Accelerating digital transformation with secure, scalable cloud infrastructure that reduces costs while enhancing agility and operational excellence " },
        { id: 5, icon: <Server size={25} />, name: "SAP (CPI, ABAP, MM) ", description: " Optimizing enterprise performance through expert SAP implementations, integrations, and customizations that maximize your business intelligence and efficiency. " },
        { id: 6, icon: <FaDatabase size={25} />, name: "Data Science", description: "    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500    "}
    ];
    return (
        <>
            <section className="px-6 lg:px-24 py-20 bg-white">

                {/* TOP CONTENT */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Text variant="h2" className="mb-4">
                        What We Do
                    </Text>

                    <Text variant="p" className="mb-6">
                        At Ameya IT Solutions, we turn business challenges into opportunities using
                        innovative technology. We specialize in developing custom software,
                        implementing modern web solutions, and creating intelligent automation
                        systems that streamline operations and drive growth.
                    </Text>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex gap-4 p-6 border border-gray-200 rounded-md hover:shadow-lg transition">
                        <div className="shrink-0 rounded-full bg-[#608BC1] w-12 h-12 flex items-center justify-center text-white">
                            <Lightbulb size={26} />
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">
                                Creative Thinking
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Turn raw data into meaningful, actionable insights that power smarter decisions.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 border border-gray-200 rounded-md hover:shadow-lg transition">
                        <div className="shrink-0 rounded-full bg-[#b72960] w-12 h-12 flex items-center justify-center text-white">
                            <Wrench size={26} />
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">
                                Innovative Solutions
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                               Build scalable, secure, and high-performance digital products tailored to your business goals.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 border border-gray-200 rounded-md hover:shadow-lg transition">
                        <div className="shrink-0 rounded-full bg-[#608BC1] w-12 h-12 flex items-center justify-center text-white">
                            <Target size={26} />
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">
                                What Drives Us
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Empower organizations with technology that drives clarity, agility, and measurable results.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 border border-gray-200 rounded-md hover:shadow-lg transition">
                        <div className="shrink-0 rounded-full bg-[#b72960] w-12 h-12 flex items-center justify-center text-white">
                            <Rocket size={26} />
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">
                                Performance Optimized
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Engineer solutions designed for speed, reliability, and scalability—built to perform today and grow tomorrow.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default AiServiceSection;