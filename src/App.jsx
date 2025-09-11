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

function App() {
  return (
    <>
      <Header3 />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/virtual-office" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
