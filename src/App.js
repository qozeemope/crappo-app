import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import Background from "./components/Background";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <SectionOne />
    </div>
  );
}

export default App;
