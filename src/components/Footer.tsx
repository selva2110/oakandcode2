import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Oak & Code
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
              Building digital experiences that transform businesses and delight users.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter size={18} className="text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} className="text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github size={18} className="text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Why Us', 'Story', 'Services', 'Work', 'Testimonials'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Web Development',
                'App Development',
                'UI/UX Design',
                'Maintenance',
                'Social Media',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gray-500 mt-1 flex-shrink-0" />
                <a
                  href="mailto:hello@oakandcode.com"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 break-all"
                >
                  hello@oakandcode.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gray-500 mt-1 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-400">
                  123 Innovation Street,
                  <br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Oak & Code. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
    </footer>
  );
}
