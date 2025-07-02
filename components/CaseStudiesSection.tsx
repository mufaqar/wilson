'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CaseStudy {
  image: string;
  title: string;
  description: string;
  link: string;
  tag: string;
}

const caseStudies: CaseStudy[] = [
  {
    image: '/images/howard.png',
    tag: 'Case Study',
    title: 'Howard University – School of Social Work | Case History',
    description:
      'WCG conducted a review of the E. Franklin Frazier Center’s systems, and then provided recommendations and developed a strategic plan.',
    link: '#',
  },
  {
    image: '/images/howard.png',
    tag: 'Case Study',
    title: 'Howard University – School of Social Work | Case History',
    description:
      'WCG conducted a review of the E. Franklin Frazier Center’s systems, and then provided recommendations and developed a strategic plan.',
    link: '#',
  },
  {
    image: '/images/howard.png',
    tag: 'Case Study',
    title: 'Howard University – School of Social Work | Case History',
    description:
      'WCG conducted a review of the E. Franklin Frazier Center’s systems, and then provided recommendations and developed a strategic plan.',
    link: '#',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-background py-16 rounded-[35px]">
      <div className="container mx-auto md:px-5 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-medium text-black">
            Client Case Studies
          </h2>
          <p className="text-black text-base md:text-lg font-medium max-w-2xl mx-auto mt-2">
            Check How We Have Helped Our Clients
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white"
            >
              <div className='bg-primary rounded-t-3xl h-[259px] flex items-center justify-center'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={224}
                  height={93}
                  className="object-contain"
                />
              </div>

              <div className="px-4 pb-10 pt-5 flex flex-col flex-grow">
                {/* Tag Badge */}
                <Link href="#" className="md:text-lg text-base font-bold text-wils_orang mb3">
                  {item.tag}
                </Link>

                <Link href={item?.link} className="md:text-3xl text-2xl font-medium text-black mb-2">
                  {item.title}
                </Link>
                <p className="md:text-lg text-base text-black font-normal">
                  {item.description}
                </p>               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
