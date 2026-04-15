import { motion } from "motion/react";
import { Code, Palette, Rocket, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Engineering Teams",
    description: "Full-stack developers, mobile engineers, and DevOps specialists ready to transform your vision into reality.",
    features: [
      "React, Node.js, Python experts",
      "2-6 week sprint cycles",
      "Daily standups included",
    ],
    color: "from-[#F4A900] to-[#CC5500]",
  },
  {
    icon: Palette,
    title: "Design Teams",
    description: "Product designers and UX researchers who craft experiences that resonate with your users.",
    features: [
      "User research & testing",
      "Complete design systems",
      "Figma to production",
    ],
    color: "from-[#CC5500] to-[#D2691E]",
  },
  {
    icon: Rocket,
    title: "Product Teams",
    description: "Strategic product managers who define roadmaps and drive your product vision forward.",
    features: [
      "Product strategy & roadmaps",
      "Backlog management",
      "Stakeholder alignment",
    ],
    color: "from-[#D2691E] to-[#8B4513]",
  },
  {
    icon: Users,
    title: "Full-Stack Teams",
    description: "Complete cross-functional teams with all the expertise you need to dominate your market.",
    features: [
      "PM, design, and engineering",
      "Integrated workflows",
      "End-to-end delivery",
    ],
    color: "from-[#8B4513] to-[#DAA520]",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 pb-12 bg-gradient-to-b from-white to-[#FFF8E7] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#F4A900]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#CC5500]/10 rounded-full blur-3xl" />
      
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
            <div className="w-12 h-1 bg-gradient-to-r from-[#F4A900] to-[#CC5500]" />
            <span className="text-[#CC5500] uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="text-6xl lg:text-7xl tracking-tight mb-8 leading-[1.05]">
            The <span className="italic">right</span> team,
            <br />
            {/*<span className="bg-gradient-to-r from-[#F4A900] via-[#CC5500] to-[#D2691E] bg-clip-text text-transparent">*/}
              exactly when you need it
            {/*</span>*/}
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Scale your team up or down based on project needs. No hiring timelines, no benefits management, no office space required.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-3xl p-10 hover:shadow-2xl transition-all border border-gray-100"
              >
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />
                
                {/* Icon with gradient background */}
                <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon size={32} className="text-white" />
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl`}
                  />
                </div>
                
                <h3 className="text-3xl mb-5">{service.title}</h3>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2.5 flex-shrink-0`} />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Sparkle decoration */}
                <Sparkles className="absolute top-8 right-8 w-6 h-6 text-[#F4A900]/20 group-hover:text-[#F4A900] transition-colors" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-[#8B4513] text-white rounded-full text-xl hover:shadow-2xl transition-all"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
