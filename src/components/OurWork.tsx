import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function OurWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeProject, setActiveProject] = useState(0);

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
      gradient: 'from-blue-600 to-cyan-600',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Health & Wellness App',
      category: 'Mobile Development',
      description: 'Cross-platform fitness tracking app with AI-powered workout recommendations and social features.',
      tags: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
      gradient: 'from-green-600 to-emerald-600',
      image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      description: 'Intuitive financial analytics dashboard with real-time data visualization and customizable widgets.',
      tags: ['Figma', 'React', 'D3.js', 'TailwindCSS'],
      gradient: 'from-purple-600 to-pink-600',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'SaaS Management Tool',
      category: 'Full Stack',
      description: 'Comprehensive project management platform with team collaboration, time tracking, and reporting.',
      tags: ['Next.js', 'Supabase', 'TypeScript', 'Prisma'],
      gradient: 'from-orange-600 to-red-600',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <section
      id="our-work"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="text-center mb-20"
          style={{
            opacity: scrollProgress,
            transform: `translateY(${(1 - scrollProgress) * 50}px)`,
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const cardProgress = Math.max(0, scrollProgress * 2 - index * 0.1);

            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                style={{
                  opacity: Math.min(1, cardProgress),
                  transform: `translateY(${(1 - Math.min(1, cardProgress)) * 100}px)`,
                }}
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 rounded-3xl`}></div>

                <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-gray-600 transition-all duration-500 overflow-hidden group-hover:scale-[1.02]">
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        <button className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                          <Github size={18} className="text-gray-300" />
                        </button>
                        <button className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                          <ExternalLink size={18} className="text-gray-300" />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
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
          className="text-center mt-16"
          style={{
            opacity: Math.min(1, scrollProgress * 2 - 0.5),
            transform: `translateY(${(1 - Math.min(1, scrollProgress * 2 - 0.5)) * 50}px)`,
          }}
        >
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-medium text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
