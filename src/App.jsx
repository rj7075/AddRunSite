import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home2 from "./Pages/Home2";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
import Privacy from "./Pages/Privacy";
import Refund from "./Pages/Refund";
import Header3 from "./components/Header3";
import TermsAndConditions from "./Pages/TermCondition";
import Gurgaon from "./Pages/Citywisepage/Gurgaon";
import Layout from "./Pages/Layout";
import Nagpur from "./Pages/Citywisepage/Nagpur";
import GandhiNagar from "./Pages/Citywisepage/GandhiNagar";
import GenralCities from "./Pages/Citywisepage/Genralcities/GenralCityPage.jsx";
import Mumbai from "./Pages/Citywisepage/Mumbai.jsx";
import { useLocation } from "react-router-dom";
import FooterMumbai from "./components/CityMumbai/FooterMumbai.jsx";
import CoWorking from "./Pages/CoWorking.jsx";

function App() {
  const location = useLocation();
  const showcustomFooter = ["/virtual-office-in-mumbai"].includes(
    location.pathname
  );

  return (
    <>
      <Header3 />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/virtual-office-in-mumbai" element={<Mumbai />} />
        <Route path="/coworking" element={<CoWorking />} />
        <Route index element={<Home />} />
        <Route path="/city/:slug" element={<GenralCities />} />

        <Route path="/virtual-office" element={<Home />} />
        <Route path="/virtual-office" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="Gurgaon" element={<Gurgaon />} />
          <Route path="Nagpur" element={<Nagpur />} />
          <Route path="Gandhinagar" element={<GandhiNagar />} />
        </Route>
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
      </Routes>
      {showcustomFooter ? <FooterMumbai /> : <Footer />}
    </>
  );
}

export default App;
