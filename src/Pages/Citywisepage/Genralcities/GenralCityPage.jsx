// src/pages/CityPage.jsx

import citiesData from "../../../data/cities.json";

import OfficeLocations from "../../../components/CityGenral/OfficeLocations.jsx";
import Plans from "../../../components/CityGenral/Plans.jsx";
import Services from "../../../components/CityGenral/Services.jsx";
import Testimonials from "../../../components/CityGenral/Testimonials.jsx";
import FAQ from "../../../components/CityGenral/FAQ.jsx";
import { useParams } from "react-router-dom";
import HeroSection from "../../../components/CityGenral/HeroSection.jsx";

export default function GenralCities() {
  const { slug } = useParams();
  const city = citiesData.cities.find((city) => city.slug === slug);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">City not found</h1>
      </div>
    );
  }

  return (
    <div>
      <HeroSection city={city} />
      <OfficeLocations city={city} locations={city.officeLocations} />
      <Plans plans={city.plans} />
      <Services services={city.services} />
      <Testimonials testimonials={city.testimonials} />
      <FAQ faq={city.faq} />
    </div>
  );
}
