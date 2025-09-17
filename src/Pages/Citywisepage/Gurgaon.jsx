import React from "react";
import HeroGurgaon from "../../components/CityGurgaon/HeroGurgaon";
import OfficeLocationGurgaon from "../../components/CityGurgaon/OfficeLocationGurgaon";
import ServicesGurgaon from "../../components/CityGurgaon/ServicesGurgaon";
import Testimonials from "../../components/CityGurgaon/TestimonialsGurgaon";
import FaqGurgaon from "../../components/CityGurgaon/FaqGurgaon";
import PlansGurgaon from "../../components/CityGurgaon/PlansGurgaon";

const Gurgaon = () => {
  return (
    <div>
      <HeroGurgaon />
      <OfficeLocationGurgaon />
      <PlansGurgaon />
      <ServicesGurgaon />
      <Testimonials />
      <FaqGurgaon />
    </div>
  );
};

export default Gurgaon;
