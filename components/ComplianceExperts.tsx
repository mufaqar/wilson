import React from 'react';

const ComplianceExperts = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-4">
          COMPLIANCE EXPERTS
        </div>
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Trusted By Government <br className="hidden md:block" />
          And Industry Leaders
        </h2>
        
        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Recognized for our expertise in regulatory compliance, we help organizations achieve 
          <span className="font-semibold"> FeqRAMP</span> and 
          <span className="font-semibold"> StateRAMP</span> authorizations with integrity, 
          insight, and proven results.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
            Learn About Our Process
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors duration-300">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceExperts;