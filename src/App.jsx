import React from 'react';
import 'swiper/swiper.min.css';
// import aos
import Aos from "aos";
// import aos css
import "aos/dist/aos.css";
// import pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';

import { Routes, Route } from "react-router-dom";


const App = () => {
  // initialize aos
  Aos.init({
    duration: 1800,
    offset: 100
  });
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        
  );
};

export default App;
