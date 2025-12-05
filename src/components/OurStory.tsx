import { useEffect, useRef, useState } from 'react';
import { Heart, Palette, Lightbulb, Sparkles } from 'lucide-react';

export default function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / (rect.height + windowHeight))
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stories = [
    {
      icon: Heart,
      title: 'The Accidental Employee',
      description:
        'He showed up for a job interview, not to get the job, but to see his crush. Anyway, destiny loves playing with him; by the time he arrived, she was gone. So, what did he do? He went ahead and attended the interview anyway!',
      fullDescription: 'We\'re not sure if the girl ever liked him, but the HR definitely did, and boom, he got the job, where he met the other two "so-called founders."',
      year: '2020',
    },
    {
      icon: Palette,
      title: 'The Designer Who Took a Detour',
      description:
        'From designing clothes to designing apps, it\'s been one wild ride.',
      fullDescription: 'Now, he picks colour palettes and crafts UI like a pro. His designs are so good that users almost forget the app even has bugs.',
      year: '2020',
    },
    {
      icon: Lightbulb,
      title: 'The "Bada Karna Hai" Guy',
      description:
        'And then there\'s the CEO, the "Bhai log, mujhe life mein kuch bada karna hai" guy.',
      fullDescription: 'He didn\'t know what that "bada" thing was, but he said it with such confidence that the other two jumped into business anyway. Leadership, baby!',
      year: '2021',
    },
    {
      icon: Sparkles,
      title: 'The Unplanned Addition',
      description:
        'Introducing the girl, the copywriter, and the social media specialist your brand dreams of.',
      fullDescription: 'A friend of the hopeless romantic, and a stranger to the other two founders, she got pulled into this fun chaos through a five-minute phone call.',
      year: '2021',
    },
  ];

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-gray-50"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-gray-900"
            style={{
              opacity: Math.min(1, scrollProgress * 2),
              transform: `translateY(${(1 - Math.min(1, scrollProgress * 2)) * 50}px)`,
            }}
          >
            Our Founders Met
          </h2>
          <p
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-3 sm:mb-4"
            style={{
              opacity: Math.min(1, scrollProgress * 2 - 0.2),
              transform: `translateY(${(1 - Math.min(1, scrollProgress * 2 - 0.2)) * 50}px)`,
            }}
          >
            with an Accident
          </p>
          <p
            className="text-lg sm:text-xl text-gray-600 px-4"
            style={{
              opacity: Math.min(1, scrollProgress * 2 - 0.4),
              transform: `translateY(${(1 - Math.min(1, scrollProgress * 2 - 0.4)) * 50}px)`,
            }}
          >
            But the good kind!
          </p>
        </div>

        <div className="relative mb-12 space-y-8 sm:space-y-12 perspective-2000">
          {stories.map((story, index) => {
            const Icon = story.icon;
            const storyProgress = Math.max(0, scrollProgress * 3 - index * 0.15);

            return (
              <div
                key={index}
                className="relative"
                style={{
                  opacity: Math.min(1, storyProgress),
                  transform: `translateY(${(1 - Math.min(1, storyProgress)) * 80}px) rotateX(${(1 - Math.min(1, storyProgress)) * 10}deg)`,
                }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                  <div className="w-full md:flex-1">
                    <div className="relative group bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-700 hover:shadow-2xl transform-3d">
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gray-900 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                              {story.title}
                            </h3>
                            <span className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-gray-900 text-white">
                              {story.year}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                            {story.description}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                            {story.fullDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="text-center max-w-4xl mx-auto px-4"
          style={{
            opacity: Math.min(1, scrollProgress * 2 - 1),
            transform: `translateY(${(1 - Math.min(1, scrollProgress * 2 - 1)) * 50}px)`,
          }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
            And just like that, heartbreak, design flair, TED-Talk confidence and marketing prowess came together to create and innovate your dream, your business.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">Welcome to our story,</p>
          <p className="text-base sm:text-lg text-gray-500 italic">
            A startup built on missed dates, good looks, and questionable confidence
          </p>
        </div>
      </div>
    </section>
  );
}
