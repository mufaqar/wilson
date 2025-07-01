"use client";

import {
  FaShieldAlt,
  FaCertificate,
  FaClipboardCheck,
  FaUserShield,
  FaLock,
  FaGavel,
} from "react-icons/fa";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  highlighted?: boolean;
}

const services: Service[] = [
  {
    icon: <FaShieldAlt className="text-2xl text-[#E86C40]" />,
    title: "Vulnerability Assessment",
    description:
      "Vulnerability Assessment is the practice of identifying, classifying, remediating.",
    highlighted: true,
  },
  {
    icon: <FaCertificate className="text-2xl text-[#E86C40]" />,
    title: "FedRAMP Advisory",
    description: "Achieve and maintain your FedRAMP Authority to Operate (ATO)",
  },
  {
    icon: <FaClipboardCheck className="text-2xl text-[#E86C40]" />,
    title: "FISMA Assessment",
    description: "Whereby is the super simple way to great connect over video.",
  },
  {
    icon: <FaUserShield className="text-2xl text-[#E86C40]" />,
    title: "IT Governance",
    description: "Whereby is the super simple way to great connect over video.",
  },
  {
    icon: <FaLock className="text-2xl text-[#E86C40]" />,
    title: "CMMC Consulting",
    description:
      "Vulnerability Assessment is the practice of identifying, classifying remediating.",
  },
  {
    icon: <FaGavel className="text-2xl text-[#E86C40]" />,
    title: "GDPR Compliance Consulting",
    description: "Whereby is the super simple way to great connect over video.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white px-6 md:px-14 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C2D4A]">
            Our Services
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 w-full h-full ${
                service.highlighted
                  ? "bg-[#E9F5FF] border-[#D4EBFF]"
                  : "bg-white border-[#EEE]"
              } shadow-sm hover:shadow-md transition`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-semibold text-lg text-[#0C2D4A] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
