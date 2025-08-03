import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

interface FAQSectionProps {
  isDarkMode: boolean;
}

const FAQSection: React.FC<FAQSectionProps> = ({ isDarkMode }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can we see ROI from AI implementation?",
      answer: "Industry studies show professional services achieve 60-90 day payback periods on client acquisition systems and 9-30 day ROI on workflow automation. Our phased approach ensures you see measurable results at each milestone, with many clients reporting increased conversion rates within the first month."
    },
    {
      question: "Will AI systems integrate with our existing practice management software?",
      answer: "Yes, our systems are designed for seamless integration with popular practice management platforms including Clio, MyCase, QuickBooks, and others. We handle all technical integration during implementation, ensuring your existing workflows remain intact while being enhanced by AI capabilities."
    },
    {
      question: "How do you ensure client confidentiality and professional compliance?",
      answer: "We maintain the highest standards of professional compliance including attorney-client privilege protection, HIPAA compliance, and adherence to state bar association rules. All systems are SOC 2 Type II certified with enterprise-grade encryption and comprehensive audit trails."
    },
    {
      question: "What level of technical expertise is required from our team?",
      answer: "None. Our systems are designed for non-technical users with intuitive interfaces. We provide comprehensive training during implementation and ongoing support. Most team members become proficient within days, not weeks."
    },
    {
      question: "Can the systems be customized for our specific practice areas?",
      answer: "Absolutely. Each system is tailored to your specific practice areas, client types, and workflows. Whether you're a solo practitioner or large firm, we customize everything from lead qualification criteria to document templates to match your exact requirements."
    },
    {
      question: "What happens if we need support after implementation?",
      answer: "We provide 24/7 technical support for all clients, including emergency hotline access, live chat support, and a dedicated support portal. Our team includes both technical experts and professionals who understand the unique challenges of professional services."
    },
    {
      question: "How do you measure and report on system performance?",
      answer: "Each system includes comprehensive analytics dashboards showing key metrics like conversion rates, response times, client satisfaction scores, and ROI calculations. You'll receive regular performance reports with actionable insights for continuous optimization."
    },
    {
      question: "What's included in the 90-day implementation process?",
      answer: "Our three-phase approach includes: Phase 1 (30 days) - Client Acquisition Engine deployment with practice integration; Phase 2 (60 days) - Operations Automation Hub with workflow optimization; Phase 3 (90 days) - Client Success Platform with advanced analytics. Each phase includes training, testing, and optimization."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/10 via-black to-gray-800/10"></div>
        
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 blur-xl animate-pulse"
            style={{
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">Questions & Answers</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            <span className="relative z-10">Frequently Asked Questions</span>
            <div className="absolute inset-0 text-blue-400/20 blur-sm">Frequently Asked Questions</div>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
            Get answers to common questions about AI implementation in professional services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="pl-10">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gray-900 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-white/10 hover:shadow-2xl group hover:scale-105">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
              Our team is here to help you understand how AI can transform your practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-white/50 transition-all duration-300">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-white font-semibold mb-2">Live Chat</h4>
              <p className="text-gray-400 text-sm">Available 24/7 for existing clients</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-white/50 transition-all duration-300">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-white font-semibold mb-2">Phone Support</h4>
              <p className="text-gray-400 text-sm">+91 9059886228</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-white/50 transition-all duration-300">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-white font-semibold mb-2">Email Support</h4>
              <p className="text-gray-400 text-sm">sridhar.serviqo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;