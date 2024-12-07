import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import About from '../components/About';
import OurCollaboration from '../components/OurCollaboration';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <OurCollaboration />
      <ContactUs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
