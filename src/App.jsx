import React from 'react';
import Hero from './components/Hero';

import Right from './components/Right';
import Left from './components/Left';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import WhyUs from  './components/WhyUs'; 
import Creaters from  './components/Creaters'; 


function App() {
  return (
    <div className="App">
      <Hero />
      
      <Right />
      
      <Left />
      <Creaters />
      <Approach />
      <Testimonials />
      
      <WhyUs />
    
    </div>
  );
}

export default App;