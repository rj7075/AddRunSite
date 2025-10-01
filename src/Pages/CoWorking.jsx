import React from "react";
import HeroMeeting from "../components/CoworkingAndMeeting/HeroMeeting";
import WhyChooseUs from "../components/CoworkingAndMeeting/WhyChoose";
import OurLocation from "../components/CoworkingAndMeeting/OurLocations";
import PricingPlan from "../components/CoworkingAndMeeting/PricingPlan";
import WorkSpacesGallery from "../components/CoworkingAndMeeting/OurWorkspaces";
import WorkSpaceFaq from "../components/CoworkingAndMeeting/WorkspaceFaq";
import WorkSpacesTestimonials from "../components/CoworkingAndMeeting/WorkspaceTestimonials";

const CoWorking = () => {
  return (
    <div>
      <HeroMeeting />
      <WhyChooseUs />
      <OurLocation />
      <PricingPlan />
      <WorkSpacesGallery />
      <WorkSpacesTestimonials />
      <WorkSpaceFaq />
    </div>
  );
};

export default CoWorking;
