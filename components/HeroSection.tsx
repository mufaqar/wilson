"use client";

import Image from "next/image";
import Link from "next/link";
import ComplianceExperts from "./ComplianceExperts";

export default function HeroSection() {
  return (
    <>
      <section className="bg-background md:px-14 py-10 md:pt-20 rounded-b-[35px] pb-[200px]">
        <div className="container mx-auto md:px-5 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <div className="Grad_BG w-fit p-[1px] rounded-full">
              <div className="flex items-center gap-2.5 bg-white pl-2.5 pr-5 py-2.5 w-fit rounded-full">
                <Image src="/images/certified.svg" alt="certified" width={32} height={32} />
                <span className="text-base font-bold uppercase tracking-wide"> CERTIFIED FEDRAMP & STATERAMP</span>
              </div>
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

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <Image
              src="/images/banner-img.png"
              alt="Professional Man"
              width={590}
              height={501}
              className="rounded-xl object-cover w-full mx-auto md:h-[501px] h-full"
            />
            <Image
              src="/images/chart.png"
              alt="Chart"
              width={179}
              height={209}
              className="absolute -bottom-14 md:-left-16 -left-10"
            />
          </div>
        </div>
      </section>
      <ComplianceExperts />
    </>
  );
}
