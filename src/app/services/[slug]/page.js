// 1️⃣ This tells Next.js which slugs to generate at build time
export function generateStaticParams() {
  return [
    { slug: 'web-development' },
    { slug: 'app-development' },
    { slug: 'sap-services' },
    { slug: 'ai-ml' },
    { slug: 'cloud-services' }
  ];
}

// 2️⃣ Main component
export default function ServicePage({ params }) {
  const { slug } = params;

  const servicesData = {
    'web-development': {
      title: 'Web Development',
      description: 'We build responsive websites.'
    },
    'app-development': {
      title: 'App Development',
      description: 'We create mobile apps for Android and iOS.'
    },
    'sap-services': {
      title: 'SAP Services',
      description: 'We provide SAP consulting services.'
    },
    'ai-ml': {
      title: 'AI & ML',
      description: 'We develop AI and machine learning solutions.'
    },
    'cloud-services': {
      title: 'Cloud Services',
      description: 'We offer AWS, Azure, and GCP solutions.'
    }
  };

  const service = servicesData[slug] || {
    title: 'Service Not Found',
    description: 'This service does not exist.'
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
}
