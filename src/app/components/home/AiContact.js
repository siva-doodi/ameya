import React from "react";
import Text from "../common/Text";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AiContact = () => {
  return (
    <section className="px-6 py-12 bg-[#608BC1] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Connect With Us</h2>
          <Text variant="span">
            Have a project in mind or need help with your software solutions?
            Our team is here to assist you. Fill out the form and we’ll get back to you shortly.
          </Text>

          <div className="space-y-5 mt-6">

            {/* ADDRESS */}
            <Link
              href="https://www.google.com/maps?q=3rd+floor,+Plot+No.+37/A,+Vengal+Rao+Nagar,+Sunder+Nagar,+Hyderabad,+Telangana+500038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:underline"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
                <FaMapMarkerAlt size={16} />
              </span>
              <span className="text-sm leading-relaxed">
                3rd floor, Plot No. 37/A, Vengal Rao Nagar, Sunder Nagar,
                Hyderabad, Telangana 500038
              </span>
            </Link>

            {/* PHONE */}
            <a
              href="tel:+917993174833"
              className="flex items-center gap-4 hover:underline"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
                <FaPhoneAlt size={15} />
              </span>
              <span className="text-sm">+91 7993174833</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:info@ameyait.com"
              className="flex items-center gap-4 hover:underline"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
                <FaEnvelope size={15} />
              </span>
              <span className="text-sm">info@ameyait.com</span>
            </a>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-gray-800">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Contact Form
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full cursor-pointer py-3 bg-[#608BC1] hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default AiContact;