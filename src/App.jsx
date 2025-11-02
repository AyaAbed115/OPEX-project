import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx"; 
import Footer from "./components/footer.jsx"; 
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
