import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import OurCollaboration from '../components/OurCollaboration';


const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <OurCollaboration/>
      <Footer />
    </div>
  );
};

export default AboutPage;