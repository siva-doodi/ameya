'use client';
import { useState } from 'react';
import Text from '../components/common/Text'
import Link from 'next/link';
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="py-16 bg-primary-bg mt-20">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="bg-gray-50 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-primary-text mb-4">Get in Touch</h2>
              <Text variant='p'>
                We’re always happy to connect! Whether you’re seeking answers, sharing feedback, or simply reaching out, our team is here to assist you
              </Text>
              <ul className="space-y-3 text-gray-700 mt-6">
                <li>📍  <Link
                  href="https://www.google.com/maps?q=3rd+floor,+Plot+No.+37/A,+Vengal+Rao+Nagar,+Sunder+Nagar,+Hyderabad,+Telangana+500038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  3rd floor, Plot No. 37/A, Vengal Rao Nagar, Sunder Nagar,
                Hyderabad, Telangana 500038
                </Link></li>
                <li>📧 info@ameyait.com</li>
                <li>📞 +91 7993174833</li>
              </ul>
            </div>

            {/* Right side - Form */}
            <div className="p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b72960]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b72960]"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b72960]"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary-text rounded-sm  text-white py-3  font-semibold shadow-md cursor-pointer transition-transform transform hover:scale-105"
                >
                  Send Message 🚀
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
