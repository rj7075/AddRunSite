import React from "react";
import ProCons from "../components/ProCons";
import FAQSection from "../components/Faq";
import Header from "../components/Header";
import Cta from "../components/Cta";
import AudienceSection from "../components/Audience";
import TestimonialsSection from "../components/Testimonials";
import FeaturesSection from "../components/Features";
import Hero from "../components/Hero";
import Address from "../components/Address";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProCons />
      <Address />
      <FeaturesSection />
      <TestimonialsSection />
      <AudienceSection />
      <FAQSection />
      <Cta />
    </div>
  );
};

export default Home;
