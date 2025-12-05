import { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Palette, Wrench, TrendingUp } from 'lucide-react';

export default function Services() {
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

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive, performant websites',
      features: ['React & Next.js', 'Modern UI/UX', 'SEO Optimized', 'Lightning Fast'],
    },
    {
      icon: Smartphone,
      title: 'Application Development',
      description: 'Cross-platform mobile & desktop apps',
      features: ['iOS & Android', 'Desktop Apps', 'Cloud Integration', 'Offline Support'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centred design and prototyping',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
    },
    {
      icon: Wrench,
      title: 'Product Maintenance',
      description: 'Reliable support & continuous improvement',
      features: ['24/7 Support', 'Bug Fixes', 'Performance Tuning', 'Updates & Upgrades'],
    },
    {
      icon: TrendingUp,
      title: 'Social Media Optimisation',
      description: 'Creative Content Strategy & Writing (Print & Digital)',
      features: ['Content Strategy', 'Social Media Management', 'Copywriting', 'Brand Identity'],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-gray-50"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="text-center mb-16 sm:mb-20"
          style={{
            opacity: scrollProgress,
            transform: `translateY(${(1 - scrollProgress) * 50}px)`,
          }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 perspective-2000">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardProgress = Math.max(0, scrollProgress * 2 - index * 0.1);

            return (
              <div
                key={index}
                className="relative group"
                style={{
                  opacity: Math.min(1, cardProgress),
                  transform: `translateY(${(1 - Math.min(1, cardProgress)) * 100}px) scale(${0.9 + Math.min(1, cardProgress) * 0.1}) rotateY(${(1 - Math.min(1, cardProgress)) * 10}deg)`,
                }}
              >
                <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 transition-all duration-700 h-full overflow-hidden group-hover:shadow-2xl group-hover:scale-105 transform-3d">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>

                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-900 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
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
