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
      color: 'from-blue-500 to-cyan-500',
      features: ['React & Next.js', 'Modern UI/UX', 'SEO Optimized', 'Lightning Fast'],
    },
    {
      icon: Smartphone,
      title: 'Application Development',
      description: 'Cross-platform mobile & desktop apps',
      color: 'from-green-500 to-emerald-500',
      features: ['iOS & Android', 'Desktop Apps', 'Cloud Integration', 'Offline Support'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centred design and prototyping',
      color: 'from-purple-500 to-pink-500',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
    },
    {
      icon: Wrench,
      title: 'Product Maintenance',
      description: 'Reliable support & continuous improvement',
      color: 'from-orange-500 to-red-500',
      features: ['24/7 Support', 'Bug Fixes', 'Performance Tuning', 'Updates & Upgrades'],
    },
    {
      icon: TrendingUp,
      title: 'Social Media Optimisation',
      description: 'Creative Content Strategy & Writing (Print & Digital)',
      color: 'from-pink-500 to-rose-500',
      features: ['Content Strategy', 'Social Media Management', 'Copywriting', 'Brand Identity'],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="text-center mb-20"
          style={{
            opacity: scrollProgress,
            transform: `translateY(${(1 - scrollProgress) * 50}px)`,
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardProgress = Math.max(0, scrollProgress * 2 - index * 0.1);

            return (
              <div
                key={index}
                className="relative group"
                style={{
                  opacity: Math.min(1, cardProgress),
                  transform: `translateY(${(1 - Math.min(1, cardProgress)) * 100}px) scale(${0.8 + Math.min(1, cardProgress) * 0.2})`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 rounded-3xl`}></div>

                <div className="relative bg-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-gray-600 transition-all duration-500 h-full overflow-hidden group-hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 blur-2xl from-white to-transparent"></div>

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
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
