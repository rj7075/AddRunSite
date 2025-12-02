import React from "react";
import FAQSection from "../components/Faq";
import Cta from "../components/Cta";
import TestimonialsSection from "../components/Testimonials";
import Address from "../components/Address";
import FeaturesSection from "../components/Features";
import Hero1 from "../components/Hero1";
import TargetAudience from "../components/TargetAudience";
import CTASection1 from "../components/Form1";
import Benifits from "../components/Benifits";
import Locations from "../components/Location1";
import Pricing from "../components/Pricing";

const Home2 = () => {
  return (
    <div>
      {/* <!-- Header --> */}
      <Hero1 />
      {/* <!-- Hero section  */}
      <Benifits />
      <Address />
      <Locations />
      <CTASection1 />
      <Pricing />
      {/* <!-- Features Section --> */}
      <FeaturesSection />
      <TestimonialsSection />
      {/* <!-- Audience Section --> */}
      <TargetAudience />
      <FAQSection />
      {/* <!-- CTA Section --> */}
      <Cta />
    </div>
  );
};

export default Home2;
