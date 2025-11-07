import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx"; 
import Footer from "./components/footer.jsx"; 
import Services from "./pages/Services.jsx";
import WhyOpex from "./pages/Why opex.jsx";
import AboutUs from "./pages/About Us.jsx";
import OpexAcademy from "./pages/OpexAcademy.jsx";

import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why OPEX" element={<WhyOpex />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/opexacademy" element={<OpexAcademy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
