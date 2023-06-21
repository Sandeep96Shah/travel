import React from 'react';
import Hero from './Components/Hero';
import Seasons from './Components/Seasons';
import Views from './Components/Views';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Seasons />
      <Views />
      <Footer />
    </div>
  )
}

export default App