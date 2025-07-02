"use client";

import Image from "next/image";

interface Service {
  icon: any;
  title: string;
  description: string;
  highlighted?: boolean;
}

const services: Service[] = [
  {
    icon: <Image src="/images/assessment.svg" alt="assessment" width={70} height={70} />,
    title: "Vulnerability Assessment",
    description:
      "Vulnerability Assessment is the practice of identifying, classifying, remediating.",
    highlighted: true,
  },
  {
    icon: <Image src="/images/fedramp.svg" alt="fedramp" width={70} height={70} />,
    title: "FedRAMP Advisory",
    description: "Achieve and maintain your FedRAMP Authority to Operate (ATO)",
  },
  {
    icon: <Image src="/images/fisma.svg" alt="fisma" width={70} height={70} />,
    title: "FISMA Assessment",
    description: "Whereby is the super simple way to great connect over video.",
  },
  {
    icon: <Image src="/images/governance.svg" alt="governance" width={70} height={70} />,
    title: "IT Governance",
    description: "Whereby is the super simple way to great connect over video.",
  },
  {
    icon: <Image src="/images/consulting.svg" alt="consulting" width={70} height={70} />,
    title: "CMMC Consulting",
    description:
      "Vulnerability Assessment is the practice of identifying, classifying remediating.",
  },
  {
    icon: <Image src="/images/gdpr.svg" alt="gdpr" width={70} height={70} />,
    title: "GDPR Compliance Consulting",
    description: "Whereby is the super simple way to great connect over video.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto md:px-5 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-medium text-black">
            Our Services
          </h2>
          <p className="text-black text-base md:text-lg font-medium max-w-2xl mx-auto mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-[20px] px-8 pt-14 pb-16 w-full max-h-[328px] h-full first:md:col-span-2 last:md:col-span-2  ${service.highlighted
                  ? "bg-background shadow-[0px_3px_0px_0px] shadow-wils_orang"
                  : "bg-white shadow-[0px_0px_0px_1px] shadow-[#DDEAF9]"
                } `}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="md:text-2xl text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="md:text-lg text-base font-normal text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
