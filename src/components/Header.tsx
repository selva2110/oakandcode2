import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Story', href: '#our-story' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#our-work' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-white/70 backdrop-blur-2xl shadow-sm py-3' : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="relative overflow-hidden h-10 flex items-center group">
          <div className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            Oak & Code
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                scrolled ? 'bg-gray-900' : 'bg-white'
              }`}></span>
            </a>
          ))}
          <button className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
            scrolled
              ? 'bg-gray-900 text-white hover:bg-gray-800'
              : 'bg-white text-gray-900 hover:bg-gray-100'
          }`}>
            Contact Us
          </button>
        </div>

        <button
          className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl shadow-lg animate-[slideDown_0.3s_ease-out]">
          <div className="px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-base font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 mt-4">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
