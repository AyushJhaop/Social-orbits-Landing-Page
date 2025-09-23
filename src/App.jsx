import React from 'react';
import Hero from './components/Hero';
import CaseStudySection from './components/Right';
import Left from './components/Left';
import TestimonialCarousel from './components/Testimonials';
import ViralComparison from './components/WhyUs'; 
import Creators from './components/Creaters'; 

function App() {
  return (
    <div className="App">
      <Hero />
      <CaseStudySection />
      <Left />
      <Creators />
      <TestimonialCarousel />
      <ViralComparison />
    </div>
  );
}

export default App;