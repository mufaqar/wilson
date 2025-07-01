'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CaseStudy {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const caseStudies: CaseStudy[] = [
  {
    image: '/case1.jpg',
    title: 'Cloud Security Transformation',
    description: 'How our client achieved FedRAMP compliance in record time through our cloud security strategy.',
    link: '#',
  },
  {
    image: '/case2.jpg',
    title: 'Public Sector Modernization',
    description: 'Helping a government agency streamline compliance and modernize legacy infrastructure.',
    link: '#',
  },
  {
    image: '/case3.jpg',
    title: 'GDPR Compliance Across Borders',
    description: 'Guiding a global tech company to meet complex GDPR obligations efficiently.',
    link: '#',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#F4FBFF] px-6 md:px-14 py-16 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C2D4A]">Case Studies</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-2">
            See how we’ve helped organizations across industries meet compliance and security goals with speed and confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#0C2D4A] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                {item.link && (
                  <Link href={item.link} className="text-[#00AEEF] text-sm font-semibold hover:underline">
                    Read More →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
