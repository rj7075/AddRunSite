import React from "react";
import FAQSection from "../components/Faq";
import Pricing from "../components/Pricing";
import Cta from "../components/Cta";
import TestimonialsSection from "../components/Testimonials";
import FeaturesSection from "../components/Features";
import Benifits from "../components/Benifits";
import Address from "../components/Address";
import Hero1 from "../components/Hero1";
import TargetAudience from "../components/TargetAudience";
import Locations from "../components/Location1";
import CTASection1 from "../components/Form1";
import TrustedBySlider from "../components/TrustedSlider";
import GSTStep from "../components/GSTStep";
const Home = () => {
  return (
    <div>
      <Hero1 />
      <TrustedBySlider />
      <GSTStep />
      <Benifits />
      <Address />
      <Locations />
      <CTASection1 />
      {/* <Pricing /> */}
      <FeaturesSection />
      <TestimonialsSection />
      <TargetAudience />
      <FAQSection />
      <Cta />
    </div>
  );
};

export default Home;
