import Image from 'next/image';
import React from 'react';

const Partners = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto md:px-5 px-4">
        <div className='flex md:flex-row flex-col gap-5 items-center'>
          <div>
            <h2 className='md:text-6xl text-3xl font-normal text-black'>
              Proven Results that Speak for Themselves
            </h2>
          </div>
          <div>
            <p className='text-lg font-normal text-black font-satoshi'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-[#E3E3E3] my-16 pb-16 border-b border-black/15">
          {[
            { value: "500+", label: "PROJECTS COMPLETED" },
            { value: "200+", label: "SATISFIED CLIENTS" },
            { value: "15+", label: "COUNTRIES SERVED" },
            { value: "99.9%", label: "UPTIME ACHIEVED" },
          ].map((stat, index) => (
            <div key={index} className="text-center px-6">
              <h2 className="md:text-[56px] text-4xl font-semibold text-wils_orang mb-4">{stat.value}</h2>
              <div className="text-black uppercase text-sm font-bold tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {[
              { logo: "/images/womens-world.png" },
              { logo: "/images/penny-hoarder.png" },
              { logo: "/images/enterpreneur.png" },
              { logo: "/images/life-hack.png" },
              { logo: "/images/fitsmall-business.png" },
              { logo: "/images/inclogo.png" },
              { logo: "/images/penny-hoarder.png" },
            ].map((item, index) => (
              <div className='w-[242px] h-[116px]' key={index}>
                <Image src={item?.logo} alt={item?.logo} width={185} height={116} className='object-contain w-auto h-auto mx-auto' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;