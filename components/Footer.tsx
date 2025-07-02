import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

// JSON arrays
const socialLinks = [
  { icon: <FaFacebook />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaYoutube />, url: "#" },
];

const quickLinks = [
  "About us",
  "Our Services",
  "Cyber Security",
  "Industries we Serve",
  "Career",
  "Contact",
  "Privacy Policy",
];

const services = [
  "Cyber Security Assessment",
  "Risk Management and Assessment",
  "Cloud Services",
  "Cybersecurity Maturity Model Certification (CMMC)",
];

const contactInfo = [
  {
    icon: <FaEnvelope />,
    text: "sales@wilsoncgrp.com",
    url: "#",
  },
  {
    icon: <FaLocationDot />,
    text: "800 Maine Avenue SW, Suite 200, Washington DC 20024",
    url: "#",
  },
  {
    icon: <FaPhoneAlt />,
    text: "1.866.780.1655",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground pt-[96px] rounded-t-[35px] md:px-0 px-4">
      {/* Subscription */}
      <div className="container mx-auto rounded-[20px] py-11 px-4 sm:px-7 lg:px-9 mb-5 shadow-[0px_0px_0px_3px] shadow-[#28A0CF1F]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div>
            <h2 className="md:text-5xl text-3xl font-medium text-white mb-3">
              Subscription Center
            </h2>
            <p className="md:text-xl text-lg font-normal text-white">
              Stay In The Know With Our Newsletter
            </p>
          </div>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="text-lg font-normal text-white placeholder:text-white border border-white/60 px-4 py-3 rounded-[8px] focus:outline-0 w-full"
            />
            <button className="bg-wils_orang hover:bg-primary text-white px-5 py-3.5 rounded-lg md:text-xl text-base font-semibold md:px-[60px]">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex md:flex-row flex-col md:gap-10 gap-8">
          {/* Logo & Description */}
          <div className="w-full md:w-[475px]">
            <Link href="/">
              <Image
                src="/images/footer-logo.png"
                alt="logo"
                width={327}
                height={64}
              />
            </Link>
            <p className="text-base font-normal text-white mt-4 mb-10">
              Wilson Consulting Group (WCG) is an innovative global
              cybersecurity consulting firm headquartered in Washington D.C.,
              with a European office in London, England.
            </p>
            <h6 className="text-base font-medium text-white mb-4">
              Follow Us On
            </h6>
            <ul className="flex flex-wrap gap-4">
              {socialLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.url}
                    className="text-xl text-[#EF6C33] hover:text-white"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-[220px]">
            <h6 className="text-lg font-bold text-wils_orang mb-4">
              Quick Links
            </h6>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-base font-normal text-white hover:text-wils_orang"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-lg font-bold text-wils_orang mb-4">
              Our Services
            </h6>
            <ul className="flex flex-col gap-4">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-base font-normal text-white hover:text-wils_orang"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-bold text-wils_orang mb-4">
              Contact Info
            </h6>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.url}
                    className="text-base font-normal text-white hover:text-wils_orang flex gap-3.5 items-center underline"
                  >
                    <span className="text-wils_orang">{item.icon}</span>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 pb-[50px] pt-[38px] border-t border-white/15 flex justify-between flex-wrap gap-4">
        <p className="text-base font-normal text-white">
          © 2024 Wilson Consulting Group. All Rights Reserved.
        </p>
        <ul className="flex flex-wrap gap-4">
          {["Terms of Service", "Privacy Policy"].map((item, idx) => (
            <li key={idx}>
              <Link
                href="#"
                className="text-base font-normal text-white hover:text-wils_orang"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
