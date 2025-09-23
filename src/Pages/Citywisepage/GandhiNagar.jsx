import React from "react";
import HeroGandhiNagar from "../../components/CityGandhiNagar/HeroGandhinagar";
import PlansGandhiNagar from "../../components/CityGandhiNagar/PlansGandhiNagar";
import ServicesGandhiNagar from "../../components/CityGandhiNagar/ServicesGandhinagar";
import TestimonialsGandhiNagar from "../../components/CityGandhiNagar/TestimonialsGandhinagar";
import FaqGandhiNagar from "../../components/CityGandhiNagar/FaqGandhinagar";

const GandhiNagar = () => {
  return (
    <div>
      <HeroGandhiNagar />
      <OfficeLocationGandhiNagar />
      <PlansGandhiNagar />
      <ServicesGandhiNagar />
      <TestimonialsGandhiNagar />
      <FaqGandhiNagar />
    </div>
  );
};

export default GandhiNagar;
