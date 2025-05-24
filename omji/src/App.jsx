
import { Routes, Route} from  'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Music from './pages/Music';
import About from './pages/About';
import Career from './pages/Career';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
  const App=() =>{
    return( 
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/movies" element={<Movies />} />
          <Route path ="/music" element = {<Music />} />
          <Route path ="/about" element={<About />} />
          <Route path ="/career" element={<Career />} />
        </Routes>
    {/* <Footer /> */}
    </div>
    );
  };
   export default App;