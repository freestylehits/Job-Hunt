import Navbar from "./components/Navbar";
import "./App.css";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Review from "./components/Review";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Allcomp from "./components/Allcomp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Allcomp />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
