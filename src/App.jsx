import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";

import Collection from "./Components/Collection/Collection";

import WhyUs from "./Components/WhyUs/WhyUs";

import HowItWorks from "./Components/HowItWorks/HowItWorks";

import Footer from './Components/Footer/Footer';

import "./App.css";

function App() {
  return (
    <>
      <section className="app-home">
        <Navbar />
        <Homepage />
      </section>

      <section className="app-collection">
        <Collection />
      </section>

      <section className="app-why-us">
        <WhyUs />
      </section>

      <section className="app-how">
        <HowItWorks />
      </section>

      <section className="app-footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
