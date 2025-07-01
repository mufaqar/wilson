import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Subscription Section */}
      <div className="container mx-auto px-4 py-12 border-b border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscription Center</h2>
          <p className="mb-6">Stay in the know with our newsletter</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Wilson Consulting Group</h3>
            <p className="mb-4">
              Wilson Consulting Group (WCZ) is an innovative global cybersecurity consulting firm headquartered in Washington D.C., with a European office in London, England.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About us', 'Our Services', 'Cyber Security', 'Industries we Serve', 'Career', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['Cyber Security Assessment', 'Risk Management and Assessment', 'Cloud Services', 'Cybersecurity Maturity Model Certification (CMNC)'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@wilsoncgp.com" className="hover:text-blue-600 transition-colors duration-300">
                  info@wilsoncgp.com
                </a>
              </li>
              <li>2021 Idaho Avenue SW, Suite 2000, Washington DC 20004</li>
              <li>1862/RGASS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Wilson Consulting Group. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-600 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-300">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;