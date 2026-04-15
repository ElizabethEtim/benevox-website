import { motion } from "motion/react";
import { ArrowRight, Zap, Globe, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AfricanPattern } from "./AfricanPattern";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E7] via-white to-[#F5DEB3]" />
      
      {/* African pattern overlay */}
      <div className="absolute inset-0 text-[#D4AF37]">
        <AfricanPattern />
      </div>

      {/* Floating accent shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-[#D4AF37]/20 to-[#A0522D]/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-[#8B4513]/20 to-[#B8860B]/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 lg:pt-22">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-1 text-black rounded-full shadow-lg mb-6"
            >
              <Zap className="w-4 h-4 text-[#f8ac03]" />
              <span>Team-as-a-Service Excellence</span>
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl tracking-tight leading-[0.95]">
              Build <span className="italic bg-gradient-to-r from-[#D4AF37] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent">faster</span> with
              <br />
               <span className="italic bg-gradient-to-r from-[#D4AF37] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent">
              expert
              </span> teams
              
            </h1>

            <p className="text-2xl text-gray-700 leading-relaxed max-w-xl">
              We provide high-performing tech teams to build your project and drive high quality results in record time. 
              {/*<span className="text-[#A0522D]"> No hiring overhead, no long-term commitments.</span>*/}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#A0522D] text-white rounded-full text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
              >
                Start Your Project
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </motion.button>
              {/*<motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-[#A0522D] text-[#A0522D] rounded-full text-xl hover:bg-[#A0522D] hover:text-white transition-all"
              >
                View Case Studies
              </motion.button>*/}
            </div>

            {/* Stats with African-inspired accents */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-[#D4AF37]/30">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-8 h-8 text-[#D4AF37]" />
                  <div className="text-5xl text-[#030405]">2-3</div>
                </div>
                <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">Days to Deploy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-8 h-8 text-[#A0522D]" />
                  <div className="text-5xl text-[#030405]">40%</div>
                </div>
                <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">Cost Savings</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-8 h-8 text-[#8B4513]" />
                  <div className="text-5xl text-[#030405] pr-1">100+</div>
                </div>
                <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">Projects Delivered</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image with dramatic styling */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#D4AF37] to-[#A0522D] rounded-3xl rotate-12 opacity-20 blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-[#8B4513] to-[#654321] rounded-3xl -rotate-12 opacity-20 blur-xl" />
            
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/30"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519291531-e96279895745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzcxNDE3Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional team in modern office"
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/40 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#A0522D] rounded-xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
