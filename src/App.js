import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SectionOne />
    </div>
  );
}

export default App;
