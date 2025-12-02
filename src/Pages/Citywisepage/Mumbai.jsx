import React, { useState } from "react";
import NavigationMumbai from "../../components/CityMumbai/NavigationMumbai";
import HeroMumbai from "../../components/CityMumbai/HeroMumbai";
import ServicesMumbai from "../../components/CityMumbai/ServicesMumbai";
import MaharashtraMumbai from "../../components/CityMumbai/MaharastraMumbai";
import PricingMumbai from "../../components/CityMumbai/PricingMumbai";
import TestimonialsMumbai from "../../components/CityMumbai/TestimonilasMumbai";
import FeaturesMumbai from "../../components/CityMumbai/FeaturesMumbai";
import FaqMumbai from "../../components/CityMumbai/FaqMumbai";
import StickyMumbai from "../../components/CityMumbai/StickyMumbai";

const Mumbai = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  return (
    <div>
      {/* <NavigationMumbai /> */}
      <HeroMumbai />
      <ServicesMumbai />
      <MaharashtraMumbai />
      <PricingMumbai />
      <TestimonialsMumbai />
      <FeaturesMumbai />
      <FaqMumbai />

      <StickyMumbai onBookingOpen={() => setIsBookingModalOpen(true)} />
    </div>
  );
};

export default Mumbai;
