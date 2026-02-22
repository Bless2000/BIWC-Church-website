
import Hero from '../components/Hero';
import VerseOfTheDay from '../components/VerseOfTheDay';
import PastorMessage from '../components/PastorMessage';
import Auxiliaries from '../components/Auxiliaries';
import WorshipSection from '../components/WorshipSection';
import HomepageEvents from '../components/Events';
import AboutUs from '../components/AboutUs';
import Sermons from '../components/Sermons';
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <VerseOfTheDay />
      <AboutUs />
      <PastorMessage />
      <Auxiliaries />
      <WorshipSection />
      <HomepageEvents />
      <Sermons />
      <Footer />
    </div>
  );
};

export default HomePage;
