import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Cog, TrendingUp, Calendar, ArrowRight, Play, Pause } from 'lucide-react';

interface SystemsCarouselProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
  activeSystem: number;
  onSystemChange: (system: number) => void;
}

const SystemsCarousel: React.FC<SystemsCarouselProps> = ({ 
  onBookingClick, 
  isDarkMode, 
  activeSystem, 
  onSystemChange 
}) => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const systems = [
    {
      id: 1,
      icon: Users,
      title: "Client Acquisition Engine",
      subtitle: "Transform Leads into Clients",
      description: "AI-powered lead qualification, instant response system, and conversion optimization that delivers 21x higher conversion rates within 60 seconds of inquiry.",
      features: [
        "60-second lead response automation",
        "Intelligent lead qualification & scoring", 
        "Multi-channel communication orchestration",
        "Practice management system integration",
        "Conversion rate optimization analytics"
      ],
      metrics: {
        primary: "21x Higher",
        primaryLabel: "Conversion Rates",
        secondary: "60 Seconds",
        secondaryLabel: "Response Time"
      },
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Cog,
      title: "Operations Automation Hub", 
      subtitle: "Streamline Your Practice",
      description: "End-to-end workflow automation delivering 389% ROI with 9-day payback periods through intelligent process optimization and task automation.",
      features: [
        "Document generation & management automation",
        "Appointment scheduling & calendar optimization",
        "Billing & invoicing workflow automation", 
        "Client communication sequence automation",
        "Compliance & deadline tracking systems"
      ],
      metrics: {
        primary: "389% ROI",
        primaryLabel: "Return on Investment",
        secondary: "9 Days",
        secondaryLabel: "Payback Period"
      },
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Client Success Platform",
      subtitle: "Maximize Client Value",
      description: "Advanced analytics and client relationship optimization system that increases client lifetime value by 60% through predictive insights and automated success workflows.",
      features: [
        "Client satisfaction monitoring & alerts",
        "Predictive analytics for client retention",
        "Automated follow-up & check-in sequences",
        "Performance analytics & reporting dashboards",
        "Revenue optimization recommendations"
      ],
      metrics: {
        primary: "60% Increase",
        primaryLabel: "Client Lifetime Value", 
        secondary: "90%+ Satisfaction",
        secondaryLabel: "Client Retention"
      },
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      onSystemChange(activeSystem === 3 ? 1 : activeSystem + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSystem, isAutoPlaying, onSystemChange]);

  const currentSystem = systems.find(s => s.id === activeSystem) || systems[0];

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    onSystemChange(activeSystem === 1 ? 3 : activeSystem - 1);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    onSystemChange(activeSystem === 3 ? 1 : activeSystem + 1);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="systems-section" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/10 via-black to-gray-800/10"></div>
        
        {/* Dynamic Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${currentSystem.gradient} opacity-10 blur-xl animate-pulse`}
            style={{
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
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
              <span className="text-blue-400 text-sm font-medium">Our AI Systems</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            <span className="relative z-10">Three Integrated AI Systems</span>
            <div className="absolute inset-0 text-blue-400/20 blur-sm">Three Integrated AI Systems</div>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
            Comprehensive AI transformation designed specifically for professional services
          </p>

          {/* Auto-play Control */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={toggleAutoPlay}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
              <span className="text-white text-sm">{isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation</span>
            </button>
          </div>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* System Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-102">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img
                  src={currentSystem.image}
                  alt={currentSystem.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${currentSystem.gradient} opacity-20`}></div>
                
                {/* Metrics Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-2xl font-bold text-white mb-1">
                        {currentSystem.metrics.primary}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {currentSystem.metrics.primaryLabel}
                      </div>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-2xl font-bold text-white mb-1">
                        {currentSystem.metrics.secondary}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {currentSystem.metrics.secondaryLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* System Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentSystem.gradient} shadow-lg flex items-center justify-center mr-6`}>
                    <currentSystem.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {currentSystem.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {currentSystem.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  {currentSystem.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {currentSystem.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSystem.gradient}`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={onBookingClick}
                  className="btn-primary group btn-hover-effect w-full sm:w-auto"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Implementation Discussion
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* System Indicators */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {systems.map((system) => (
              <button
                key={system.id}
                onClick={() => {
                  setIsAutoPlaying(false);
                  onSystemChange(system.id);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeSystem === system.id
                    ? `bg-gradient-to-r ${system.gradient} scale-125`
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar for Auto-play */}
          {isAutoPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
              <div 
                className={`h-full bg-gradient-to-r ${currentSystem.gradient} transition-all duration-300 ease-out animate-pulse`}
                style={{ 
                  width: '100%',
                  animation: 'progress 5s linear infinite'
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* CSS Animation for Progress Bar */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default SystemsCarousel;