import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function OurWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern, scalable e-commerce solution with real-time inventory management and seamless checkout experience.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Health & Wellness App',
      category: 'Mobile Development',
      description: 'Cross-platform fitness tracking app with AI-powered workout recommendations and social features.',
      tags: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
      image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      description: 'Intuitive financial analytics dashboard with real-time data visualization and customizable widgets.',
      tags: ['Figma', 'React', 'D3.js', 'TailwindCSS'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'SaaS Management Tool',
      category: 'Full Stack',
      description: 'Comprehensive project management platform with team collaboration, time tracking, and reporting.',
      tags: ['Next.js', 'Supabase', 'TypeScript', 'Prisma'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <section
      id="our-work"
      ref={sectionRef}
      className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-white"
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
            Our Work
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 perspective-2000">
          {projects.map((project, index) => {
            const cardProgress = Math.max(0, scrollProgress * 2 - index * 0.1);

            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                style={{
                  opacity: Math.min(1, cardProgress),
                  transform: `translateY(${(1 - Math.min(1, cardProgress)) * 100}px) rotateX(${(1 - Math.min(1, cardProgress)) * 10}deg)`,
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-white rounded-3xl border border-gray-200 transition-all duration-700 overflow-hidden group-hover:shadow-2xl group-hover:scale-[1.02] transform-3d">
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-900">
                        {project.category}
                      </span>
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center transition-colors duration-300">
                          <Github size={16} className="text-gray-900" />
                        </button>
                        <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center transition-colors duration-300">
                          <ExternalLink size={16} className="text-gray-900" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="text-center mt-12 sm:mt-16"
          style={{
            opacity: Math.min(1, scrollProgress * 2 - 0.5),
            transform: `translateY(${(1 - Math.min(1, scrollProgress * 2 - 0.5)) * 50}px)`,
          }}
        >
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/20">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
