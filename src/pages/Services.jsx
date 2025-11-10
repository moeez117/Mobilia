import React from "react";
import ServicesHero from "../component/Services/ServicesHero"; // your existing hero
import ServiceProcess from "../component/Services/ServiceProcess";
import WhyChooseUs from "../component/Services/WhyChooseUs";
import ServiceTestimonials from "../component/Services/ServiceTestimonials";
import ServiceCTA from "../component/Services/ServiceCTA";
import ServicesList from '../component/Services/ServicesList'
import Footer from "../pages/Footer"; 

const Services = () => {
  return (
    <>
      <ServicesHero />
      <main id="main">
      <ServicesList/>
        <ServiceProcess />
        <WhyChooseUs />
        <ServiceTestimonials />
        <ServiceCTA />
      <Footer/>
      </main>
      
    </>
  );
};

export default Services;
