import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top / rect.height);
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
          style={{
            transform: `scale(${1 + scrollY * 0.5})`,
            opacity: 1 - scrollY,
          }}
        ></div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: Math.random() * 400 + 30 + 'px',
                height: Math.random() * 400 + 30 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                background: i % 3 === 0
                  ? 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)'
                  : i % 3 === 1
                  ? 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
                animationDelay: Math.random() * 10 + 's',
                animationDuration: Math.random() * 20 + 15 + 's',
              }}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-[blob-animation_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-[blob-animation_10s_ease-in-out_infinite_7s]"></div>
          <div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-[blob-animation_9s_ease-in-out_infinite_3s]"></div>
        </div>
      </div>

      <div
        className="relative z-10 text-center px-6 max-w-5xl"
        style={{
          transform: `translateY(${scrollY * 100}px)`,
          opacity: 1 - scrollY * 2,
        }}
      >
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-6 h-20 flex-wrap">
            <div className="text-6xl md:text-7xl font-black animate-[slideInFromLeft_1.2s_cubic-bezier(0.34,1.56,0.64,1)_0s]">
              <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">
                OAK
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-500 animate-[slideInFromTop_1.2s_cubic-bezier(0.34,1.56,0.64,1)_0.3s_both]">
              &
            </div>
            <div className="text-6xl md:text-7xl font-black animate-[slideInFromRight_1.2s_cubic-bezier(0.34,1.56,0.64,1)_0.6s_both]">
              <span className="bg-gradient-to-br from-purple-400 via-pink-400 to-pink-600 bg-clip-text text-transparent">
                CODE
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-[fadeInUp_1s_ease-out_1s_both]">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Where Innovation Meets Creativity
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_1.3s_both]">
          Building digital experiences that transform businesses. From web development to UI/UX design,
          we craft solutions that make an impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_1s_ease-out_1.6s_both]">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-medium text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Start Your Project
          </button>
          <button className="border-2 border-gray-600 px-8 py-4 rounded-full text-white font-medium text-lg hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            View Our Work
          </button>
        </div>
      </div>

      <a
        href="#why-choose-us"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
