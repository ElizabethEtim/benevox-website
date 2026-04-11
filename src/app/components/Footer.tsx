import { Linkedin, Twitter, Github, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-[#FFF8E7] border-t border-[#F4A900]/20 py-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F4A900]/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2691E]/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/*<div className="w-12 h-12 bg-gradient-to-br from-[#F4A900] to-[#CC5500] rounded-xl flex items-center justify-center rotate-45">
                <div className="w-6 h-6 bg-white rounded-sm -rotate-45" />
              </div>*/}
              <span className="text-3xl tracking-tight"><img src="/logo.jpg" alt="Benevox Logo" className="h-8 w-auto" /></span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Expert teams that integrate with your workflow and deliver exceptional results.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@benevox.com" className="flex items-center gap-3 text-gray-600 hover:text-[#CC5500] transition-colors">
                <Mail size={18} />
                <span>hello@benevox.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-[#CC5500]">Services</h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  Engineering Teams
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  Design Teams
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  Product Teams
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  Full-Stack Teams
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-[#CC5500]">Company</h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-[#CC5500]">Resources</h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-[#CC5500] transition-colors inline-block hover:translate-x-1 transition-transform">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#F4A900]/30 to-transparent mb-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-lg">
            © 2026 benevox. Empowering innovation across Africa.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F4A900]/10 to-[#CC5500]/10 flex items-center justify-center text-gray-600 hover:text-white hover:from-[#F4A900] hover:to-[#CC5500] transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F4A900]/10 to-[#CC5500]/10 flex items-center justify-center text-gray-600 hover:text-white hover:from-[#F4A900] hover:to-[#CC5500] transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F4A900]/10 to-[#CC5500]/10 flex items-center justify-center text-gray-600 hover:text-white hover:from-[#F4A900] hover:to-[#CC5500] transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* African-inspired decorative element */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#F4A900] to-[#CC5500]" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#CC5500] to-[#D2691E]" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#D2691E] to-[#8B4513]" />
        </div>
      </div>
    </footer>
  );
}
