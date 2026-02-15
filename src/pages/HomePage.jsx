
import Hero from '../components/Hero';
import VerseOfTheDay from '../components/VerseOfTheDay';
import PastorMessage from '../components/PastorMessage';
import Ministries from '../components/Ministries';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <VerseOfTheDay />
      <PastorMessage />
      <Ministries />
    </div>
  );
};

export default HomePage;
