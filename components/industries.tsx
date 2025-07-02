'use client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

interface Faqs {
  title: string;
  description: string;
}

const faqs: Faqs[] = [
  {
    title: "Government and public service",
    description: "Government agencies are constantly looking for more efficient and effective IT governance, service, and security tools to address various challenges.",
  },
  {
    title: "Healthecare Industry",
    description: "Government agencies are constantly looking for more efficient and effective IT governance, service, and security tools to address various challenges.",
  },
  {
    title: "Financial Institutions",
    description: "Government agencies are constantly looking for more efficient and effective IT governance, service, and security tools to address various challenges.",
  },
  {
    title: "Power and utilites",
    description: "Government agencies are constantly looking for more efficient and effective IT governance, service, and security tools to address various challenges.",
  },
  {
    title: "Oil and gas",
    description: "Government agencies are constantly looking for more efficient and effective IT governance, service, and security tools to address various challenges.",
  },
];

export default function Industries() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 👈 default open

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className='bg-foreground md:py-24 py-16 rounded-[35px]'>
      <div className='container mx-auto md:px-5 px-4 '>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-medium text-white">
           Industries We Serve
          </h2>
          <p className="text-white text-base md:text-lg font-medium max-w-2xl mx-auto mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
          <div>
            <Image src="/images/industry.png" alt="industry" width={579} height={590} className='h-full w-full' />
          </div>
          <div className='flex flex-col gap-6'>
            {faqs.map((faq, index) => (
              <div
                onClick={() => toggleFAQ(index)}
                key={index}
                className='flex flex-row'>
                <div className='pt-5 w-1/12'>
                  <Image src="/images/circle_check.svg" alt="circle_check" width={41} height={41} className='' />
                </div>
                <div className='py-5 border-b border-white/20 w-11/12'>
                  <h4 className='flex gap-3 justify-between cursor-pointer'>
                    <span className='md:text-[28px] text-2xl font-medium text-white mb-3'>{faq.title}</span>
                    <Image src="/images/circle_arrow.svg" alt="circle_arrow" width={40} height={40}
                      className={`transition-transform duration-300 ${openIndex === index ? '-rotate-90' : ''
                        }`} />
                  </h4>
                  {openIndex === index && (
                    <p className="text-white md:text-xl text-lg font-normal">{faq.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 justify-center mt-14">
          <Link
            href="#"
            className="bg-wils_orang hover:bg-primary text-white px-5 py-2.5 rounded-lg md:text-xl text-base font-semibold inline-flex md:w-[220px] w-1/2 text-center justify-center"
          >
            Read More
          </Link>
          <Link
            href="#"
            className="bg-transparent border-secondary border-2 text-secondary hover:bg-secondary hover:text-white px-5 py-2.5 rounded-lg md:text-xl text-base font-semibold inline-flex md:w-[220px] w-1/2 text-center justify-center"
          >
            Services
          </Link>
        </div>
      </div>
    </section>
  )
}