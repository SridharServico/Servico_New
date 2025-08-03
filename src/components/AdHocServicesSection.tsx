import React from 'react';
import { Wrench, FileText, MessageSquare, Zap, Calendar, ArrowRight } from 'lucide-react';

interface AdHocServicesSectionProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
}

const AdHocServicesSection: React.FC<AdHocServicesSectionProps> = ({ onBookingClick, isDarkMode }) => {
  const services = [
    {
      icon: Wrench,
      title: "Custom AI Tool Development",
      description: "Bespoke AI solutions tailored to your specific practice needs and workflows",
      features: ["Custom integrations", "Specialized workflows", "Practice-specific tools"]
    },
    {
      icon: FileText,
      title: "Document Automation",
      description: "AI-powered document generation, review, and management systems",
      features: ["Template automation", "Contract analysis", "Compliance checking"]
    },
    {
      icon: MessageSquare,
      title: "AI Consultation & Strategy",
      description: "Expert guidance on AI implementation and digital transformation",
      features: ["Strategic planning", "Technology assessment", "Implementation roadmap"]
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description: "Streamline existing workflows with intelligent automation",
      features: ["Workflow analysis", "Bottleneck identification", "Efficiency improvements"]
    }
  ];

  return (
    <section id="adhoc-services-section" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/10 via-black to-gray-800/10"></div>
        
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 blur-xl animate-pulse"
            style={{
              width: `${60 + Math.random() * 100}px`,
              height: `${60 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">Additional Services</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            <span className="relative z-10">Ad-Hoc AI Services</span>
            <div className="absolute inset-0 text-blue-400/20 blur-sm">Ad-Hoc AI Services</div>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
            Flexible AI solutions for specific challenges and custom requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 group"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:shadow-white/50 transition-all duration-300">
                <service.icon className="w-8 h-8 text-black" />
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-900 backdrop-blur-xl rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-white/10 hover:shadow-2xl group hover:scale-105">
            <h3 className="text-3xl font-bold text-white mb-4 text-center group-hover:text-gray-200 transition-colors duration-300">
              Need Something Custom?
            </h3>
            <p className="text-gray-300 text-lg text-center leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
              Every practice is unique. Let's discuss your specific AI needs and create a tailored solution that delivers results.
            </p>
            
            <button
              onClick={onBookingClick}
              className="btn-primary group/btn btn-hover-effect"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Discuss Custom Requirements
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdHocServicesSection;