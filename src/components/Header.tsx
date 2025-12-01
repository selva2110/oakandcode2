import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => setAnimationComplete(true), 3000);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="relative overflow-hidden h-10 flex items-center">
          {!animationComplete ? (
            <div className="flex items-center space-x-2">
              <div className="animate-[drop_1s_ease-out] text-4xl font-bold">O</div>
              <div className="animate-[drop_1.2s_ease-out] text-4xl font-bold">&</div>
              <div className="animate-[drop_1.4s_ease-out] text-4xl font-bold">C</div>
            </div>
          ) : (
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-[fadeIn_0.5s_ease-in]">
              Oak & Code
            </div>
          )}
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl animate-[slideDown_0.3s_ease-out]">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-white font-medium">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
