import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services";
import About from "./components/About";
import Office from "./components/Office";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero />
      <Services />
      <About />
      <Office />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
