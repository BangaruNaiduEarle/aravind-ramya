import React from 'react';
import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import BrideToBe from './components/BrideToBe';
import Haldi from './components/Haldi';
import Paradie from './components/Paradie';
import KalagoluSambralu from './components/KalagoluSambralu';
import Reception from './components/Reception';
import MarriageMuhurtham from './components/MarriageMuhurtham';
import VenueLocation from './components/VenueLocation';
import ThankYou from './components/ThankYou';
import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-rose-50 to-rose-100 min-h-screen">
      <Router>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Hero />} />

            <Route path="/bride-to-be" element={<BrideToBe />} />

            <Route path="/haldi" element={<Haldi />} />


            <Route path="/imagegrid" element={<ImageGrid />} />


            <Route path="/kalagolu" element={<KalagoluSambralu />} />


            <Route path="/reception" element={<Reception />} />


            <Route path="/marriage" element={<MarriageMuhurtham />} />

            <Route path="/venue" element={<VenueLocation />} />


          </Routes>
        </ScrollToTop>
        <ThankYou />
        <Footer />
      </Router>

      {/* <MobileNav /> */}


    </div>
  );
}

export default App;