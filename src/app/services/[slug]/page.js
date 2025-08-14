// 1️⃣ This tells Next.js which slugs to generate at build time
import React from 'react';
import Text from '../../components/common/Text';
export function generateStaticParams() {
  return [
    { slug: 'web-technologies' },
    { slug: 'application-development' },
    {slug:'artificial-intelligence'},
    { slug: 'cloud-services' },
    { slug: 'sap-services' }, 
    { slug: 'data-science' }
  ];
}
export default function ServicePage({ params }) {
  const { slug } = params;

  const serviceContent = {
  'web-technologies': {
    title: 'Web Development',
    description:
      'We build fast, secure, and responsive websites tailored to your business needs. From concept to deployment, our team ensures a seamless online experience that drives engagement and growth.',
    features: [
      'Custom Websites',
      'E-commerce Solutions',
      'SEO Optimization',
      'Responsive Design',
    ],
  },
  'application-development': {
    title: 'App Development',
    description:
      'We craft high-performance, scalable, and visually stunning applications for mobile, web, and cross-platform solutions. Our team combines design thinking with cutting-edge technology to deliver seamless user experiences.',
    features: [
      'Custom Mobile App Development',
      'Cross-platform Solutions',
      'Performance Optimization',
      'End-to-End Testing',
    ],
  },
  'artificial-intelligence': {
    title: 'Artificial Intelligence',
    description:
      'Empowering businesses with AI-driven solutions that automate processes, enhance decision-making, and unlock new opportunities for growth.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Predictive Analytics',
      'AI Chatbots & Automation',
    ],
  },
  'cloud-services': {
    title: 'Cloud Services',
    description:
      'Leverage the power of the cloud to enhance scalability, security, and performance. We provide tailored cloud solutions to meet your evolving business needs.',
    features: [
      'Cloud Migration',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Cloud Security & Compliance',
    ],
  },
  'sap-services': {
    title: 'SAP Services',
    description:
      'Providing end-to-end SAP solutions from consultation to implementation, enabling businesses to streamline operations and boost efficiency.',
    features: [
      'SAP S/4HANA Implementation',
      'SAP ABAP & CPI Development',
      'SAP MM & Functional Support',
      'Ongoing Optimization & Maintenance',
    ],
  },
  'data-science': {
    title: 'Data Science',
    description:
      'Transform your data into actionable insights with advanced analytics and data-driven strategies that help you stay ahead of the competition.',
    features: [
      'Data Visualization',
      'Big Data Processing',
      'Predictive Modeling',
      'Business Intelligence Solutions',
    ],
  },
};

  const content = serviceContent[slug] || {
    title: 'Service Not Found',
    description: 'This service does not exist.',
    features: [],
  };

  return (
    <>
      <div className="min-h-screen mt-8">
        <section className="text-center py-20 bg-primary-bg">
          <div className=' w-[50%] m-auto'>
            <h1 className="text-5xl font-bold text-[#b72960] mb-2">{content.title}</h1>
            <Text variant="p">{content.description}</Text>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#b72960] mb-6">About Our {content.title}</h2>
          <Text variant="p">
            We believe in delivering excellence through creativity, innovation, and attention to detail.
            Our team ensures every project is tailored specifically to your needs, blending aesthetic
            appeal with functionality for the best possible results.
          </Text>
        </section>

        <section className="py-16 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-[#b72960] mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition duration-300"
                >
                  <h3 className="text-xl font-bold text-[#b72960] mb-3">{feature}</h3>
                  <p className="text-gray-600">
                    Our {feature} service ensures top-notch quality and attention to detail for maximum impact.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <h2 className="text-3xl font-semibold text-[#b72960] mb-10 text-center">Our Process</h2>
          <div className="space-y-10">
            {['Research & Planning', 'Creative Design', 'Development & Execution', 'Delivery & Support'].map(
              (step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-xl font-bold text-[#b72960] mb-2">{step}</h3>
                  <p className="text-gray-600">
                    We follow a structured process to ensure every step is executed with precision and creativity.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-[#b72960] mb-10 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Priya Sharma', feedback: 'Absolutely loved the service! The team is highly skilled and professional.' },
                { name: 'Amit Verma', feedback: 'The final output exceeded my expectations. Great communication throughout.' },
                { name: 'Sara Khan', feedback: 'Creative, fast, and reliable. Will definitely work with them again.' },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
                  <h4 className="font-bold text-[#b72960]">{testimonial.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-[#608BC1] text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and let’s bring your vision to life.
          </p>
          <a
            href="/contact"
            className="bg-white text-[#b72960] px-6 py-3 rounded-lg font-semibold hover:bg-pink-100 transition"
          >
            Contact Us
          </a>
        </section>
      </div>
    </>
  );
}
