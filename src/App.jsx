import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home2 from "./Pages/Home2";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
import Privacy from "./Pages/Privacy";
import Refund from "./Pages/Refund";
import Header3 from "./components/Header3";
import TermsAndConditions from "./Pages/TermCondition";
import Mumbai from "./Pages/Citywisepage/Mumbai.jsx";
import { useLocation } from "react-router-dom";
import FooterMumbai from "./components/CityMumbai/FooterMumbai.jsx";
import FooterNew from "./components/FooterNEW.jsx";

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
        <Route index element={<Home />} />

        <Route path="/virtual-office" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
      </Routes>
      {showcustomFooter ? <FooterMumbai /> : <FooterNew />}
    </>
  );
}

export default App;
