import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import CaseStudySection from './components/Right';

import TestimonialCarousel from './components/Testimonials';
import ViralComparison from './components/WhyUs'; 
import Creators from './components/Creaters';
import BookCall from './components/BookCall';


// Home page component
const HomePage = () => (
  <div>
    <Hero />
     <Creators />
    <CaseStudySection />
 
   
    <TestimonialCarousel />
    <ViralComparison />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-call" element={<BookCall />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;