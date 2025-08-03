import React from 'react';
import { AlertTriangle, Clock, TrendingDown, Users, DollarSign, Target } from 'lucide-react';

interface ProblemSectionProps {
  isDarkMode: boolean;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ isDarkMode }) => {
  const problems = [
    {
      icon: Clock,
      title: "Slow Lead Response Times",
      description: "Studies show 78% of customers buy from the first responder. Every minute of delay costs potential clients.",
      stat: "78% of customers",
      statLabel: "buy from first responder"
    },
    {
      icon: TrendingDown,
      title: "Low Conversion Rates",
      description: "Traditional follow-up methods convert only 2-5% of leads. Most potential clients are lost in the process.",
      stat: "2-5% conversion",
      statLabel: "with traditional methods"
    },
    {
      icon: Users,
      title: "Manual Process Bottlenecks",
      description: "Administrative tasks consume 40-60% of billable time, reducing profitability and client service quality.",
      stat: "40-60% of time",
      statLabel: "spent on admin tasks"
    },
    {
      icon: DollarSign,
      title: "Revenue Leakage",
      description: "Poor lead management and inefficient processes result in $50K-150K annual revenue loss for typical practices.",
      stat: "$50K-150K lost",
      statLabel: "annually per practice"
    },
    {
      icon: Target,
      title: "Inconsistent Client Experience",
      description: "Manual processes lead to inconsistent service delivery, affecting client satisfaction and referral rates.",
      stat: "Inconsistent service",
      statLabel: "reduces referrals by 30%"
    },
    {
      icon: AlertTriangle,
      title: "Competitive Disadvantage",
      description: "Practices without AI automation are losing clients to more responsive, efficient competitors.",
      stat: "43% of firms",
      statLabel: "plan $100M+ AI investment"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 via-black to-orange-900/10"></div>
        
        {/* Warning-themed floating elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-red-500/10 blur-xl animate-pulse"
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
            <div className="h-px bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1"></div>
            <div className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
              <span className="text-red-400 text-sm font-medium">The Challenge</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            <span className="relative z-10">The Cost of Inefficiency</span>
            <div className="absolute inset-0 text-red-400/20 blur-sm">The Cost of Inefficiency</div>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
            Professional services face unprecedented challenges in client acquisition and operational efficiency
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 group relative overflow-hidden"
            >
              {/* Subtle warning glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Problem Icon */}
                <div className="w-16 h-16 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-all duration-300">
                  <problem.icon className="w-8 h-8 text-red-400" />
                </div>

                {/* Problem Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {problem.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  {problem.description}
                </p>

                {/* Problem Statistic */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-red-400 mb-1">
                    {problem.stat}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {problem.statLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="bg-gray-900 backdrop-blur-xl rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl border border-gray-800 hover:border-red-500/30 transition-all duration-500 hover:shadow-red-500/10 hover:shadow-2xl group">
          <div className="text-center">
            <div className="w-20 h-20 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500/20 transition-all duration-300">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
              The Bottom Line Impact
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
              Without AI automation, professional services practices lose an average of <span className="text-red-400 font-semibold">$100K-300K annually</span> in 
              missed opportunities, inefficient processes, and competitive disadvantage. The question isn't whether you can afford AI implementation—
              it's whether you can afford to wait.
            </p>

            {/* Key Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">$100K-300K</div>
                <div className="text-gray-400 text-sm">Annual Revenue Loss</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">40-60%</div>
                <div className="text-gray-400 text-sm">Time Wasted on Admin</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">78%</div>
                <div className="text-gray-400 text-sm">Leads Lost to Competitors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;