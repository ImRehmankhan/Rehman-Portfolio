import React from 'react'
import About from '../Components/About';
import Brands from '../Components/Brands';
import Contact from '../Components/Contact';
import Hero from '../Components/Hero';
import Portfolio from '../Components/Portfolio';
import Services from '../Components/Services';

function Home() {
  return (
    <>
    <Hero/>
      <About/>
      <Brands/>
      <Services/>
      <Portfolio/>
      <Contact/>
    
    </>
  )
}

export default Home