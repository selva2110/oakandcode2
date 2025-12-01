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
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Target,
      title: 'Precision Design',
      description: 'Every pixel matters. We craft interfaces with meticulous attention to detail.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'We build experiences that users love, focusing on intuitive and engaging design.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'Scalable, maintainable solutions built with cutting-edge technologies.',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="text-center mb-20"
          style={{
            opacity: scrollProgress,
            transform: `translateY(${(1 - scrollProgress) * 50}px)`,
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just build products. We create experiences that transform businesses and delight users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const cardProgress = Math.max(0, scrollProgress * 2 - index * 0.2);

            return (
              <div
                key={index}
                className="relative group"
                style={{
                  opacity: cardProgress,
                  transform: `translateY(${(1 - cardProgress) * 100}px)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl from-blue-500/30 to-purple-500/30"></div>

                <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-500 h-full group-hover:scale-105">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {reason.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
