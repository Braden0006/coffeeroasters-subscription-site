import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Collection from "./Components/Collection/Collection";
import WhyUs from "./Components/WhyUs/WhyUs";

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
    </>
  );
}

export default App;
