import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home2 from "./Pages/Home2";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
