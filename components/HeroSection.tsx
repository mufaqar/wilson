"use client";

import Image from "next/image";
import Link from "next/link";
import ComplianceExperts from "./ComplianceExperts";

export default function HeroSection() {
  return (
    <>
      <section className="bg-[#F4FBFF] px-6 md:px-14 py-10 md:py-20 rounded-b-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <span className="inline-block bg-[#FFEFEA] text-[#E86C40] text-xs font-bold px-4 py-1 rounded-full tracking-wide">
              CERTIFIED FEDRAMP & STATERAMP
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0C2D4A] leading-tight">
              Fast-Track Your <br /> FedRAMP & <br /> StateRAMP
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-lg">
              Achieve or maintain your FedRAMP & StateRAMP authorization with
              our Advisory and Assessment Services.
            </p>

            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="bg-[#E86C40] hover:bg-[#d3592d] text-white px-5 py-2.5 rounded-lg text-sm font-semibold"
              >
                Read More
              </Link>
              <Link
                href="#"
                className="border-2 border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition"
              >
                Services
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <Image
              src="/hero-man.jpg"
              alt="Professional Man"
              width={500}
              height={400}
              className="rounded-xl object-cover w-full max-w-md mx-auto"
            />

            {/* ROI Card */}
            <div className="absolute -bottom-5 left-5 bg-white shadow-md rounded-xl px-4 py-3 w-48">
              <p className="text-sm font-semibold text-gray-500">
                Increase in ROI
              </p>
              <p className="text-2xl font-bold text-[#0C2D4A] mt-1">187%</p>
              <Image
                src="/chart-placeholder.png"
                alt="Chart"
                width={120}
                height={60}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </section>
      <ComplianceExperts />
    </>
  );
}
