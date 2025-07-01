import React from 'react';
import Image from 'next/image';

const StatsSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Proven Results That Speak For Themselves</h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { value: "500+", label: "PROJECTS COMPLETED" },
            { value: "200+", label: "SATISFIED CLIENTS" },
            { value: "15+", label: "COUNTRIES SERVED" },
            { value: "99.9%", label: "UPTIME ACHIEVED" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 uppercase text-sm tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">Trusted By</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {/* Replace these with your actual client logos */}
            <div className="flex justify-center">
              <div className="bg-gray-100 p-4 rounded-lg w-32 h-24 flex items-center justify-center">
                <span className="font-bold">Womans World</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-100 p-4 rounded-lg w-32 h-24 flex items-center justify-center">
                <span className="font-bold">Fishwir HOMBER</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-100 p-4 rounded-lg w-32 h-24 flex items-center justify-center">
                <span className="font-bold">Entrepreneur</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-100 p-4 rounded-lg w-32 h-24 flex items-center justify-center">
                <span className="font-bold">Lifehack</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-100 p-4 rounded-lg w-32 h-24 flex items-center justify-center">
                <span className="font-bold">Fishmall</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default StatsSection;