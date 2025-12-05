import { useEffect, useRef, useState } from 'react';
import { Zap, Target, Users, Rocket } from 'lucide-react';

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / windowHeight)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reasons = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'We deliver high-performance solutions that load instantly and run smoothly.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Precision Design',
      description: 'Every pixel matters. We craft interfaces with meticulous attention to detail.',
      color: 'bg-gradient-to-br from-gray-700 to-gray-900',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'We build experiences that users love, focusing on intuitive and engaging design.',
      color: 'bg-gradient-to-br from-gray-600 to-gray-800',
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'Scalable, maintainable solutions built with cutting-edge technologies.',
      color: 'bg-gradient-to-br from-gray-800 to-black',
    },
  ];

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto relative z-10 perspective-2000">
        <div
          className="text-center mb-16 sm:mb-20"
          style={{
            opacity: scrollProgress,
            transform: `translateY(${(1 - scrollProgress) * 50}px)`,
          }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-gray-900">
            Why Choose Us?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We don't just build products. We create experiences that transform businesses and delight users.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const cardProgress = Math.max(0, scrollProgress * 2 - index * 0.15);

            return (
              <div
                key={index}
                className="relative group"
                style={{
                  opacity: Math.min(1, cardProgress),
                  transform: `translateY(${(1 - Math.min(1, cardProgress)) * 100}px) rotateX(${(1 - Math.min(1, cardProgress)) * 15}deg)`,
                }}
              >
                <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-700 h-full group-hover:shadow-2xl transform-3d hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>

                  <div className="relative">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${reason.color} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                      {reason.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
