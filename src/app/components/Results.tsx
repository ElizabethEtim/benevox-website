import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Award, Target } from "lucide-react";

const results = [
  {
    metric: "6 weeks",
    label: "MVP to market",
    description: "Healthcare startup launched their patient portal 3x faster than estimated with in-house team.",
    icon: Target,
    color: "from-[#F4A900] to-[#CC5500]",
  },
  {
    metric: "$2.1M",
    label: "Funding raised",
    description: "FinTech company secured Series A after shipping production-ready platform in 12 weeks.",
    icon: Award,
    color: "from-[#CC5500] to-[#D2691E]",
  },
  {
    metric: "10K+",
    label: "Active users",
    description: "E-commerce brand scaled from concept to 10,000 paying customers in their first quarter.",
    icon: Star,
    color: "from-[#D2691E] to-[#8B4513]",
  },
];

export function Results() {
  return (
    <section id="results" className="relative py-32 bg-gradient-to-b from-white via-[#FFF8E7] to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F4A900]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D2691E]/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24 text-center mx-auto"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-[#F4A900] to-[#CC5500]" />
            <span className="text-[#CC5500] uppercase tracking-wider">Success Stories</span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#CC5500] to-[#F4A900]" />
          </div>
          <h2 className="text-6xl lg:text-7xl tracking-tight mb-8 leading-[1.05]">
            Real <span className="italic">results</span>,
            <br />
            <span className="bg-gradient-to-r from-[#F4A900] via-[#CC5500] to-[#D2691E] bg-clip-text text-transparent">
              real impact
            </span>
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Our teams have helped startups and enterprises ship products that drive growth and delight users across Africa and beyond.
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${result.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Metric */}
                <div className={`text-6xl mb-4 ${(result.metric === "6 weeks" || result.metric === "$2.1M" || result.metric === "10K+") ? "text-[#030405]" : `bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}`}>
                  {result.metric}
                </div>
                
                {/* Label */}
                <div className="text-sm uppercase tracking-wider text-[#CC5500] mb-6 flex items-center gap-2">
                  <div className={`w-8 h-0.5 bg-gradient-to-r ${result.color}`} />
                  {result.label}
                </div>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  {result.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Image Gallery with dramatic presentation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 mb-24"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-[#F4A900]/20"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1657449707059-6c78d1c2d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjB0ZWNoJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTQyMTg2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Professional focused work"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#CC5500]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-[#D2691E]/20"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759310610480-48649b55fbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGVudHJlcHJlbmV1cnMlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzE0MjE4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Diverse team collaboration"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#D2691E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        {/* Testimonial with African-inspired styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#F4A900] via-[#CC5500] to-[#D2691E] rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-12 lg:p-16">
              {/* Quote marks */}
              <div className="text-8xl text-[#F4A900]/20 leading-none mb-6">"</div>
              
              <blockquote className="text-3xl lg:text-4xl leading-relaxed mb-10 text-gray-900">
                benevox gave us the <span className="bg-gradient-to-r from-[#F4A900] to-[#CC5500] bg-clip-text text-transparent">velocity</span> we needed without sacrificing quality. Their team integrated seamlessly and helped us ship features our customers had been requesting for months.
              </blockquote>
              
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F4A900] to-[#CC5500] flex items-center justify-center text-white text-2xl shadow-lg">
                  SC
                </div>
                <div>
                  <div className="text-xl">Sarah Chen</div>
                  <div className="text-gray-600 text-lg">VP Product, TechFlow</div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#F4A900] text-[#F4A900]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements around testimonial */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#F4A900]/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D2691E]/20 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
