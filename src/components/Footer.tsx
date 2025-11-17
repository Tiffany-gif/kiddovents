import { Mail, Phone, Clock, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#2D1B4E] to-[#1A0F2E] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Contact Us Section */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center text-[#A855F7]">
            <Mail className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#A855F7]" />
            Contact Us
          </h3>
          <div className="space-y-4">
            <p
              className="flex items-center text-gray-300 hover:text-[#A855F7] transition-colors group"
            >
              <Phone className="w-5 h-5 mr-3 text-[#A855F7] group-hover:scale-110 transition-transform" />
              <span className="underline group-hover:text-[#A855F7]">+250 781 610 267</span>
            </p>
            <p
              className="flex items-center text-gray-300 hover:text-[#A855F7] transition-colors group"
            >
              <Mail className="w-5 h-5 mr-3 text-[#A855F7] group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-[#A855F7]">Kiddovents@gmail.com</span>
            </p>
            <div className="flex items-center text-gray-300">
              <Clock className="w-5 h-5 mr-3 text-[#A855F7]" />
              <span>Mon - sun: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-gray-400 text-sm mb-4 flex items-center justify-center md:justify-start flex-wrap gap-2">
            <span>© 2025 Kiddovents. All rights reserved.</span>
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-[#A855F7] fill-[#A855F7]" /> for kids everywhere!
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <a
              href="#privacy"
              className="hover:text-[#A855F7] transition-colors"
            >
              Privacy
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#terms"
              className="hover:text-[#A855F7] transition-colors"
            >
              Terms
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#cookies"
              className="hover:text-[#A855F7] transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
