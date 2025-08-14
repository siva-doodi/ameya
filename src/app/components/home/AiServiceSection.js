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
        { id: 1, icon: <FaGlobe size={25} />, name: "Web Technologies", description: "Engineering digital excellence through cutting-edge web technologies that transform your vision into powerful, scalable online experiences." },
        { id: 2, icon: <Vibrate size={30} />, name: "Application Development ", description: "Crafting intelligent applications that streamline operations, boost productivity, and deliver competitive advantages through innovative software solutions" },
        { id: 3, icon: <BrainCircuit size={25} />, name: "AI (Artificial Intelligence) ", description: "Unlocking business potential with advanced AI solutions that automate processes, predict trends, and drive intelligent decision-making across your enterprise." },
        { id: 4, icon: <FaCloud size={25} />, name: "Cloud Services", description: "Accelerating digital transformation with secure, scalable cloud infrastructure that reduces costs while enhancing agility and operational excellence" },
        { id: 5, icon: <Server size={25} />, name: "SAP (CPI, ABAP, MM) ", description: "Optimizing enterprise performance through expert SAP implementations, integrations, and customizations that maximize your business intelligence and efficiency." },
        { id: 6, icon: <FaDatabase size={25} />, name: "Data Science", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" }
    ];

    return (
        <>
            <section className="mt-20 px-4 md:px-24 py-12 bg-sky-600 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listOfServices.map((item) => (
                        <div className="flex flex-col gap-2" key={item.id}>
                            <div className="text-4xl mb-2">
                                {
                                    item.icon
                                }
                            </div>
                            <Text variant="h4">
                                {item.name}
                            </Text>
                            <Text variant="span">{item.description}</Text>
                            <a
                                className="font-bold"
                                style={{ color: item.color }}
                                href="#"
                            >
                                Know More
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col lg:flex-row md:justify-center items-center gap-12 lg:gap-20 px-6 lg:px-24 py-20 bg-white">

                {/* Text Content */}
                <div className="lg:w-1/2 md:text-center lg:text-left">
                    <Text variant="h2">What We Do</Text>
                    <Text variant="p" className="mb-4">At Ameya IT Solutions, we turn business challenges into opportunities using innovative technology. We specialize in developing custom software, implementing modern web solutions, and creating intelligent automation systems that streamline operations and drive growth.</Text>
                    <RoundButton
                        text="Read More"
                    />
                </div>

                {/* Service Cards */}
                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="flex  justify-center gap-4 p-6 h-[180px] border border-gray-200 rounded-sm hover:shadow-lg transition">
                        <div className="flex-shrink-0 rounded-full bg-[#608BC1] w-12 h-12 flex justify-center items-center text-white text-lg">
                            <Lightbulb size={28} />
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">
                                Creative Ideas
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Transform raw data into actionable insights.
                            </p>
                        </div>
                    </div>
                    <div className="flex  justify-center gap-4 p-6 h-[210px] border border-gray-200 rounded-sm  hover:shadow-lg transition">
                        <div className="flex-shrink-0 rounded-full bg-[#b72960] w-12 h-12 flex justify-center items-center text-white text-lg">
                            <Wrench size={28} />
                        </div>
                        <div>
                            <Text variant="h5">Innovative Tools</Text>
                            <Text variant="p">
                                Build scalable, high-performance software tailored to your business needs.
                            </Text>
                        </div>
                    </div>
                    <div className="flex  justify-center gap-4 p-6 h-[180px] border border-gray-200 rounded-sm hover:shadow-lg transition">
                        <div className="flex-shrink-0 rounded-full bg-[#608BC1] w-12 h-12 flex justify-center items-center text-white text-lg">
                            <Target size={28} />
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">
                                Goal
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Transform raw data into actionable insights.
                            </p>
                        </div>
                    </div>
                    <div className="flex  justify-center gap-4 p-6 h-[210px] border border-gray-200 rounded-sm  hover:shadow-lg transition">
                        <div className="flex-shrink-0 rounded-full bg-[#b72960] w-12 h-12 flex justify-center items-center text-white text-lg">

                            <Rocket size={28} />
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">
                                Performance Optmized
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Build scalable, high-performance software tailored to your business needs.
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
export default AiServiceSection;