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
      color: 'from-pink-400 to-rose-500',
      year: '2020',
      position: 'left',
    },
    {
      icon: Palette,
      title: 'The Designer Who Took a Detour',
      description:
        'From designing clothes to designing apps, it\'s been one wild ride.',
      fullDescription: 'Now, he picks colour palettes and crafts UI like a pro. His designs are so good that users almost forget the app even has bugs.',
      color: 'from-purple-400 to-indigo-500',
      year: '2020',
      position: 'right',
    },
    {
      icon: Lightbulb,
      title: 'The "Bada Karna Hai" Guy',
      description:
        'And then there\'s the CEO, the "Bhai log, mujhe life mein kuch bada karna hai" guy.',
      fullDescription: 'He didn\'t know what that "bada" thing was, but he said it with such confidence that the other two jumped into business anyway. Leadership, baby!',
      color: 'from-yellow-400 to-orange-500',
      year: '2021',
      position: 'left',
    },
    {
      icon: Sparkles,
      title: 'The Unplanned Addition',
      description:
        'Introducing the girl, the copywriter, and the social media specialist your brand dreams of.',
      fullDescription: 'A friend of the hopeless romantic, and a stranger to the other two founders, she got pulled into this fun chaos through a five-minute phone call.',
      color: 'from-cyan-400 to-blue-500',
      year: '2021',
      position: 'right',
    },
  ];

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-5 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-[blob-animation_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-[blob-animation_15s_ease-in-out_infinite_8s]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              opacity: Math.min(1, scrollProgress * 2),
              transform: `translateY(${(1 - Math.min(1, scrollProgress * 2)) * 50}px)`,
            }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Founders Met
            </span>
          </h2>
          <p
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{
              opacity: Math.min(1, scrollProgress * 2 - 0.2),
              transform: `translateY(${(1 - Math.min(1, scrollProgress * 2 - 0.2)) * 50}px)`,
            }}
          >
            with an Accident
          </p>
          <p
            className="text-xl text-gray-400"
            style={{
              opacity: Math.min(1, scrollProgress * 2 - 0.4),
              transform: `translateY(${(1 - Math.min(1, scrollProgress * 2 - 0.4)) * 50}px)`,
            }}
          >
            But the good kind!
          </p>
        </div>

        <div className="relative mb-12">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {stories.map((story, index) => {
              const Icon = story.icon;
              const storyProgress = Math.max(0, scrollProgress * 3 - index * 0.15);
              const isLeft = story.position === 'left';

              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    opacity: Math.min(1, storyProgress),
                  }}
                >
                  <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${isLeft ? 'pr-12' : 'pl-12'}`}>
                      <div
                        style={{
                          transform: `translateX(${(1 - Math.min(1, storyProgress)) * (isLeft ? -100 : 100)}px)`,
                        }}
                      >
                        <div className="relative group">
                          <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 rounded-2xl`}></div>

                          <div className="relative bg-gray-900/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-500 group-hover:scale-[1.02]">
                            <h3 className="text-xl font-bold mb-2 text-white">
                              {story.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-3">
                              {story.description}
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed">
                              {story.fullDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-auto flex justify-center">
                      <div
                        className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${story.color} flex items-center justify-center shadow-2xl animate-[pulse-glow_3s_ease-in-out_infinite]`}
                        style={{
                          transform: `scale(${0.8 + Math.min(1, storyProgress) * 0.2})`,
                          transition: 'transform 0.6s ease-out',
                        }}
                      >
                        <Icon size={40} className="text-white" />
                      </div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>

                  <div
                    className="text-center mt-6"
                    style={{
                      opacity: Math.min(1, storyProgress * 1.5),
                      transform: `scale(${0.8 + Math.min(1, storyProgress) * 0.2})`,
                    }}
                  >
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r text-white text-sm font-medium" style={{
                      background: `linear-gradient(to right, ${story.color === 'from-pink-400 to-rose-500' ? 'rgb(244, 114, 182), rgb(244, 63, 94)' : story.color === 'from-purple-400 to-indigo-500' ? 'rgb(192, 132, 250), rgb(99, 102, 241)' : story.color === 'from-yellow-400 to-orange-500' ? 'rgb(250, 204, 21), rgb(249, 115, 22)' : 'rgb(34, 211, 238), rgb(59, 130, 246)'})`
                    }}>
                      {story.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="text-center max-w-4xl mx-auto"
          style={{
            opacity: Math.min(1, scrollProgress * 2 - 1),
            transform: `translateY(${(1 - Math.min(1, scrollProgress * 2 - 1)) * 50}px)`,
          }}
        >
          <p className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            And just like that, heartbreak, design flair, TED-Talk confidence and marketing prowess came together to create and innovate your dream, your business.
          </p>
          <p className="text-xl text-gray-400 mb-2">Welcome to our story,</p>
          <p className="text-lg text-gray-500 italic">
            A startup built on missed dates, good looks, and questionable confidence
          </p>
        </div>
      </div>
    </section>
  );
}
