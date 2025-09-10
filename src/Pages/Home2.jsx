import React from "react";
import FAQSection from "../components/Faq";
import ProCons from "../components/ProCons";
import Cta from "../components/Cta";
import AudienceSection from "../components/Audience";
import TestimonialsSection from "../components/Testimonials";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Address from "../components/Address";
import FeaturesSection from "../components/Features";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import Hero1 from "../components/Hero1";
import TargetAudience from "../components/TargetAudience";
import CTASection from "../components/Form";
import CTASection1 from "../components/Form1";
import Benifits from "../components/Benifits";
import Location from "../components/Location";
import Map from "../components/map";
import Locations from "../components/Location1";
import Pricing from "../components/Pricing";
import Address1 from "../components/Address1";

const Home2 = () => {
  return (
    <div>
      {/* <!-- Header --> */}

      <Header3 />
      {/* <Header /> */}
      <Hero1 />
      {/* <!-- Hero section  */}
      {/* <ProCons /> */}
      <Benifits />
      <Address />
      {/* <Address1 /> */}
      {/* <Location /> */}
      <Locations />
      <CTASection1 />
      <Pricing />
      {/* <!-- Features Section --> */}
      <FeaturesSection />
      {/* <CTASection1 /> */}
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
