import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import OurStory from './components/OurStory';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurStory />
      <Services />
      <OurWork />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
