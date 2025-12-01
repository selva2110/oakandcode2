import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Oak & Code transformed our vision into reality. Their attention to detail and innovative approach exceeded all our expectations. The team is incredibly talented and professional.',
      rating: 5,
      company: 'TechStart Inc',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateLab',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Working with Oak & Code was a game-changer for our product. They delivered a stunning UI/UX that our users absolutely love. Highly recommended!',
      rating: 5,
      company: 'InnovateLab',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GrowthHub',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The team at Oak & Code is simply brilliant. They understood our needs perfectly and created a platform that has become the cornerstone of our business.',
      rating: 5,
      company: 'GrowthHub',
    },
    {
      name: 'David Kim',
      role: 'CTO, DigitalWave',
      image: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Exceptional work from start to finish. Oak & Code delivered a robust, scalable solution that has helped us grow exponentially. True professionals!',
      rating: 5,
      company: 'DigitalWave',
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="text-center mb-20"
          style={{
            opacity: scrollProgress,
            transform: `translateY(${(1 - scrollProgress) * 50}px)`,
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === activeTestimonial
                    ? 'opacity-100 scale-100 relative'
                    : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-12 rounded-3xl border border-gray-700">
                  <div className="absolute top-8 left-8 text-purple-500/20">
                    <Quote size={64} />
                  </div>

                  <div className="relative">
                    <div className="flex items-center mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={24}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400">{testimonial.role}</p>
                        <p className="text-sm text-purple-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeTestimonial
                    ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
          style={{
            opacity: Math.min(1, scrollProgress * 2 - 0.5),
            transform: `translateY(${(1 - Math.min(1, scrollProgress * 2 - 0.5)) * 50}px)`,
          }}
        >
          <div className="p-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="p-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              40+
            </div>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="p-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
