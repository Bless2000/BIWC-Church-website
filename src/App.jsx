import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Auxiliaries from './pages/Auxiliries';
import Ministries from './pages/Ministries';
import Media from './pages/Media';
import Location from './pages/Location';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/auxiliaries" element={<Auxiliaries />} />
      <Route path="/ministries" element={<Ministries />} />
      <Route path="/media" element={<Media />} />
      <Route path="/contact" element={<Location />} />
    </Routes>
  );
}

export default App;
