import { motion } from "motion/react";
import { MessageSquare, Users, Zap, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We learn about your project goals, timeline, and required expertise in a comprehensive 30-minute call.",
    timeline: "Day 1",
    color: "from-[#D4AF37] to-[#A0522D]",
  },
  {
    number: "02",
    icon: Users,
    title: "Team Match",
    description: "We assemble your custom team from our vetted pool of 200+ specialists based on your specific needs.",
    timeline: "Day 2",
    color: "from-[#A0522D] to-[#8B4513]",
  },
  {
    number: "03",
    icon: Zap,
    title: "Quick Start",
    description: "Your team integrates seamlessly with your workflow, tools, and communication channels immediately.",
    timeline: "Day 3",
    color: "from-[#8B4513] to-[#654321]",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Ship & Iterate",
    description: "Begin delivery in sprint cycles with weekly reviews and continuous optimization for maximum impact.",
    timeline: "Week 1+",
    color: "from-[#654321] to-[#B8860B]",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-[#FFF8E7] to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#8B4513]/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-1 bg-gradient-to-r from-[#D4AF37] to-[#A0522D]" />
            <span className="text-[#A0522D] uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-6xl lg:text-7xl tracking-tight mb-8 leading-[1.05]">
            From <span className="italic">idea</span> to execution
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent">
              in just 3 days
            </span>
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Our streamlined process gets you from initial conversation to active development faster than traditional hiring.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connector Line - visible on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-1 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                      className={`h-full bg-gradient-to-r ${step.color} origin-left`}
                    />
                  </div>
                )}

                {/* Card */}
                <motion.div
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  {/* Icon and Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <span className="text-7xl bg-gradient-to-br from-gray-100 to-gray-200 bg-clip-text text-transparent font-light">
                      {step.number}
                    </span>
                  </div>

                  {/* Timeline Badge */}
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${step.color} text-white rounded-full text-sm mb-6 shadow-md`}>
                    {step.timeline}
                  </div>

                  <h3 className="text-2xl mb-4">{step.title}</h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Arrow decoration */}
                  <div className="mt-6 flex items-center gap-2 text-[#A0522D] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA with dramatic styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative mt-20 bg-gradient-to-br from-[#D4AF37] via-[#A0522D] to-[#8B4513] rounded-3xl p-12 text-center overflow-hidden shadow-2xl"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`
            }} />
          </div>
          
          <div className="relative">
            <h3 className="text-4xl lg:text-5xl text-white mb-6">
              Ready to accelerate your project?
            </h3>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Schedule your discovery call and get a custom team proposal within 24 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-[#A0522D] rounded-full text-xl hover:shadow-2xl transition-all inline-flex items-center gap-3"
            >
              Schedule Your Discovery Call
              <ArrowRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
