import React from 'react';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default AboutPage;