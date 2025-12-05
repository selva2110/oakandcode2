import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top / rect.height);
        setScrollY(scrollProgress);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) scale(${1 + scrollY * 0.5})`,
            opacity: 1 - scrollY,
          }}
        ></div>
        <div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-gray-300/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * 40}px) scale(${1 + scrollY * 0.3})`,
            opacity: 1 - scrollY,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gray-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * -20}px) scale(${1 + scrollY * 0.4})`,
            opacity: 1 - scrollY,
          }}
        ></div>
      </div>

      <div className="absolute inset-0 grid-background opacity-30"></div>

      <div
        className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto"
        style={{
          transform: `translateY(${scrollY * 100}px) scale(${1 - scrollY * 0.2})`,
          opacity: 1 - scrollY * 2,
        }}
      >
        <div
          className="inline-block mb-8 px-6 py-2 bg-gray-900/5 backdrop-blur-sm rounded-full text-sm text-gray-600 font-medium animate-[fadeInUp_1s_ease-out_0.3s_both]"
        >
          Innovation • Design • Excellence
        </div>

        <div className="mb-8 perspective-1000">
          <div
            className="text-[clamp(2.5rem,8vw,5rem)] md:text-[clamp(4rem,10vw,7rem)] font-bold leading-tight"
            style={{
              transform: `rotateX(${scrollY * 20}deg) translateZ(${scrollY * -100}px)`,
            }}
          >
            <div className="animate-[fadeInUp_1s_ease-out_0.5s_both] mb-2 text-gray-900">
              Oak & Code
            </div>
            <div className="animate-[fadeInUp_1s_ease-out_0.7s_both] text-[clamp(1.8rem,6vw,4rem)] font-semibold text-gray-500">
              Where Innovation Meets Creativity
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_1s_ease-out_0.9s_both] px-4">
          Building digital experiences that transform businesses. From web development to UI/UX design,
          we craft solutions that make an impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_1s_ease-out_1.1s_both] px-4">
          <button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/20">
            Start Your Project
          </button>
          <button className="w-full sm:w-auto border-2 border-gray-300 px-8 py-4 rounded-full text-gray-900 font-medium text-base hover:border-gray-900 hover:bg-gray-50 transition-all duration-300">
            View Our Work
          </button>
        </div>

        <div
          className="mt-12 sm:mt-20 relative animate-[fadeInUp_1s_ease-out_1.3s_both]"
          style={{
            transform: `translateZ(${scrollY * -50}px) rotateX(${scrollY * 30}deg)`,
          }}
        >
          <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-200/50 backdrop-blur-sm">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
              <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-700">O&C</div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#why-choose-us"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-900 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
