import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Problem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the challenges you face
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;