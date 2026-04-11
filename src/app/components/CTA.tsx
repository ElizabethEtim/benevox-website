import { motion } from "motion/react";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { AfricanPattern } from "./AfricanPattern";

const benefits = [

  "Flexible engagements. No long-term lock-ins",
  "Scale your team anytime",
  "Risk-free first sprint guarantee",
  "Kick off in as little as 3 days",
];

export function CTA() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#1a1a1a] via-[#2d2416] to-[#1a1a1a] text-white overflow-hidden">
      {/* African pattern overlay */}
      <div className="absolute inset-0 text-[#D4AF37]">
        <AfricanPattern />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#D4AF37] to-[#A0522D] rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#8B4513] to-[#654321] rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#A0522D]" />
            </div>

            <h2 className="text-6xl lg:text-7xl tracking-tight mb-8 leading-[1.05]">
              <span className="text-white">Build faster with a</span>
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent">
                team that delivers
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
              Get a tailored team proposal and project estimate within 24 hours. At BVX, we help you move from idea to execution with a reliable and scalable team for your goals.
            </p><br />
            <p className="text-2xl text-gray-200 mb-6">
              Why work with BVX:
            </p>
            <ul className="space-y-5 mb-12">
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F4A900] to-[#CC5500] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <span className="text-xl text-gray-200">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-2xl text-gray-200 mb-6">
              Build smarter. Launch faster. Grow with BVX.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-gradient-to-r from-[#F4A900] to-[#CC5500] text-white rounded-full text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
              >
                Book a Call
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-[#F4A900] text-[#F4A900] rounded-full text-xl hover:bg-[#F4A900] hover:text-white transition-all"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Form card with gradient border */}
            <div className="relative bg-gradient-to-br from-[#F4A900] via-[#CC5500] to-[#D2691E] rounded-3xl p-1 shadow-2xl">
              <div className="bg-white text-gray-900 rounded-3xl p-10">
                <div className="flex items-center gap-3 mb-8">
                  <h3 className="text-3xl">Get started today</h3>
                  <Sparkles className="w-6 h-6 text-[#F4A900]" />
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#CC5500] transition-colors text-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@company.com"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#CC5500] transition-colors text-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm mb-2 text-gray-700">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Your Company"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#CC5500] transition-colors text-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm mb-2 text-gray-700">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="project"
                      rows={4}
                      placeholder="What are you looking to build?"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#CC5500] transition-colors resize-none text-lg"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-10 py-5 bg-gradient-to-r from-[#F4A900] to-[#CC5500] text-white rounded-full text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                  >
                    Submit Request
                    <ArrowRight size={24} />
                  </motion.button>

                  <p className="text-sm text-gray-500 text-center flex items-center justify-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    We'll respond within 24 hours
                  </p>
                </form>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F4A900]/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D2691E]/30 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
