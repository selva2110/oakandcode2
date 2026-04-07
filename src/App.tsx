import { Navbar as Header } from './components/components/navbar';
import { HeroSection as Hero } from './components/components/hero-section';
import { AboutSection as WhyChooseUs } from './components/components/about-section';
import { CoursesSection as Services } from './components/components/courses-section';
import { SuccessStoriesSection as OurWork } from './components/components/success-stories-section';
import { ExamInfoSection as Testimonials } from './components/components/exam-info-section';
import { Footer } from './components/components/footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <OurWork />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
