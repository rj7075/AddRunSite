import React from "react";
import HeroGurgaon from "../../components/CityGurgaon/HeroGurgaon";
import { FaCommentDots } from "react-icons/fa";
import ServicesGurgaon from "../../components/CityGurgaon/ServicesGurgaon";
import Testimonials from "../../components/CityGurgaon/TestimonialsGurgaon";
import FaqGurgaon from "../../components/CityGurgaon/FaqGurgaon";
import PlansGurgaon from "../../components/CityGurgaon/PlansGurgaon";
import LeadForm from "../../components/CityGurgaon/LeadForm";
import Coworking from "../../components/CityGurgaon/Coworking.jsx";
import Virtual from "../../components/CityGurgaon/Virtual.jsx";
import OfficeLocationsGurgaon from "../../components/CityGurgaon/OfficeLocationGurgaon.jsx";
import Gallery from "../../components/CityGurgaon/Gallery.jsx";
import ComparisonTable from "../../components/CityGurgaon/ComperisionTable.jsx";
import WhyChooseUs from "../../components/CityGurgaon/WhyChooseUs.jsx";
import { useState } from "react";
import { useEffect } from "react";

const Gurgaon = () => {
  const [showStickyForm, setShowStickyForm] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyForm(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <HeroGurgaon />
      <LeadForm />
      <Coworking />
      <Virtual />
      <OfficeLocationsGurgaon />
      <Gallery />
      <ComparisonTable />
      <WhyChooseUs />
      <Testimonials />
      <FaqGurgaon />
      {showStickyForm && (
        <div className="fixed bottom-4 right-4 z-50 animate-scale-in md:hidden">
          <button
            onClick={scrollToForm}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl rounded-full px-6 py-4 transition-all duration-300 hover:shadow-2xl"
          >
            <FaCommentDots className="h-5 w-5" />
            <span className="font-semibold text-white">Get Free Quote</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Gurgaon;
