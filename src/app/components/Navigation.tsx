import { motion } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#D4AF37]/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
          {/* Logo with African accent */}
          <div className="flex-shrink-0 flex items-center gap-2">
            {/*<div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#A0522D] rounded-lg flex items-center justify-center rotate-45">
              <Sparkles className="w-5 h-5 text-white -rotate-45" />
            </div>*/}
            <span className="text-3xl tracking-tight"><img src="/logo.jpg" alt="Benevox Logo" className="h-8 w-auto" /></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#services" className="text-[#030405] font-medium hover:text-[#A0522D] transition-colors text-lg">
              Services
            </a>
            <a href="#how-it-works" className="text-[#030405] font-medium hover:text-[#A0522D] transition-colors text-lg">
              How It Works
            </a>
            <a href="#results" className="text-[#030405] font-medium hover:text-[#A0522D] transition-colors text-lg">
              Results
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#A0522D] text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-8 border-t border-[#D4AF37]/20"
          >
            <div className="flex flex-col gap-6">
              <a href="#services" className="text-[#030405] font-medium hover:text-[#A0522D] py-2 text-lg">
                Services
              </a>
              <a href="#how-it-works" className="text-[#030405] font-medium hover:text-[#A0522D] py-2 text-lg">
                How It Works
              </a>
              <a href="#results" className="text-[#030405] font-medium hover:text-[#A0522D] py-2 text-lg">
                Results
              </a>
              <button className="mt-4 px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#A0522D] text-white rounded-full hover:shadow-2xl transition-all">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
