'use client';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import Text from "./common/Text";
import MyImage from "./MyImage";
import { FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <footer className="bg-gray-600 text-white py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid gap-10 md:grid-cols-4">
                        <div>
                            <Link href="/">
                                <MyImage
                                    src="/images/foo-img.png"
                                    alt="Ameya Logo"
                                    width="160"
                                    height="120"
                                    className="mb-1"
                                />
                            </Link>
                            <Text variant="span">
                                Ameya delivers innovative software solutions that empower businesses
                                to grow, transform, and thrive in a digital world.
                            </Text>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                            <ul className="space-y-2 ">
                                <li><Link href="/" className="hover:underline">Home</Link></li>
                                <li><Link href="/about" className="hover:underline">About</Link></li>
                                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Services</h3>
                            <ul className="space-y-2 text-[13px]">
                                <li><Link href="/services/web-technologies" className="hover:underline">Web Development</Link></li>
                                <li><Link href="/services/app-development" className="hover:underline">App Development</Link></li>
                                <li><Link href="/services/web-development" className="hover:underline">Web Development</Link></li>
                                <li><Link href="/services/sap-services" className="hover:underline">SAP Services</Link></li>
                                <li><Link href="/services/ai-ml" className="hover:underline">AI-ML</Link></li>
                                <li><Link href="/services/sap-services" className="hover:underline">SAP Services</Link></li>
                                <li><Link href="/services/cloud-services" role="menuitem" className="hover:underline">Cloud Services</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

                            {/* Address */}
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt size={30}/>
                                <Link
                                    href="https://www.google.com/maps?q=37/A,+Susheela+Sadan,+Vengal+Rao+Nagar,+Hyderabad,+Telangana+500038"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-white hover:underline"
                                >
                                    37/A, Susheela Sadan, Vengal Rao Nagar, Hyderabad, Telangana 500038
                                </Link>

                            </div>
                            {/* Phone */}
                            <div className="flex items-center gap-2 text-sm mt-2">
                                <FaPhoneAlt size={18}/>
                                +1 234 567 890
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-2 text-sm mt-2">
                                <MdEmail size={18}/>
                                contact@ameya.com
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-4 text-2xl text-primary-bg  transition-colors">
                                <FaLinkedin className="cursor-pointer " />
                                <FaXTwitter className="cursor-pointer" />
                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-primary-bg mt-10 pt-6 text-center  text-sm">
                        © {new Date().getFullYear()} Ameya Software. All Rights Reserved.
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer