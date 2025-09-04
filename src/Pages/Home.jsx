import React from "react";
import ProCons from "../components/ProCons";
import FAQSection from "../components/Faq";

import Cta from "../components/Cta";

import TestimonialsSection from "../components/Testimonials";
import FeaturesSection from "../components/Features";

import Address from "../components/Address";
import Header3 from "../components/Header3";
import Hero1 from "../components/Hero1";
import TargetAudience from "../components/TargetAudience";

const Home = () => {
  return (
    <div>
      <Header3 />
      <Hero1 />
      <ProCons />
      <Address />
      <FeaturesSection />
      <TestimonialsSection />
      <TargetAudience />
      <FAQSection />
      <Cta />
    </div>
  );
};

export default Home;
