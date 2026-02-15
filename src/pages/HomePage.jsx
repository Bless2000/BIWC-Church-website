
import Hero from '../components/Hero';
import VerseOfTheDay from '../components/VerseOfTheDay';
import PastorMessage from '../components/PastorMessage';
import Ministries from '../components/Ministries';
import WorshipSection from '../components/WorshipSection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <VerseOfTheDay />
      <PastorMessage />
      <Ministries />
      <WorshipSection />
    </div>
  );
};

export default HomePage;
