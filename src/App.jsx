import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import Footer from "./components/footer"; 

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div> 
  );
}

export default App;
