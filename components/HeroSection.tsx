"use client";

import Image from "next/image";
import Link from "next/link";
import ComplianceExperts from "./ComplianceExperts";

export default function HeroSection() {
  return (
    <>
      <section className="bg-background px-6 md:px-14 py-10 md:py-20 rounded-b-[40px] md:pb-[200px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-5">

            <div className="flex items-center gap-4 bg-white text-wils_orang text-base font-bold px-5 py-4 w-fit border-[.5px] border-wils_orang rounded-full tracking-wide">
              <Image src="/images/certified.svg" alt="certified" width={32} height={32} />
              <span> CERTIFIED FEDRAMP & STATERAMP</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-medium text-black leading-tight">
              Fast-Track Your <br /> FedRAMP & <br /> StateRAMP
            </h1>

            <p className="text-black text-base md:text-lg font-normal max-w-lg">
              Achieve or maintain your FedRAMP & StateRAMP authorization with
              our Advisory and Assessment Services.
            </p>

            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="bg-wils_orang hover:bg-primary text-white px-5 py-2.5 rounded-lg text-xl font-semibold inline-flex md:w-[220px] text-center justify-center"
              >
                Read More
              </Link>
              <Link
                href="#"
                className="bg-transparent border-secondary border-2 text-secondary hover:bg-secondary hover:text-white px-5 py-2.5 rounded-lg text-xl font-semibold inline-flex md:w-[220px] text-center justify-center"
              >
                Services
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <Image
              src="/images/banner-img.png"
              alt="Professional Man"
              width={590}
              height={501}
              className="rounded-xl object-cover w-full mx-auto h-[501px]"
            />
              <Image
                src="/images/chart.png"
                alt="Chart"
                width={179}
                height={209}
                className="absolute -bottom-14 -left-16"
              />
          </div>
        </div>
      </section>
      <ComplianceExperts />
    </>
  );
}
