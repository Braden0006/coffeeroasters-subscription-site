import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Collection from "./Components/Collection/Collection";
import WhyUs from "./Components/WhyUs/WhyUs";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import About from "./Components/About/About";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

import { ChoiceCardContext } from "./Contexts/ChoiceCardContext";

import "./App.css";

function App() {
  const [active, setActive] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
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
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <section className="app-about">
                <Navbar />
                <About />
              </section>
            </>
          }
        ></Route>

        <Route
          path="/subscribe"
          element={
            <>
              <section className="app-subscribe">
                <ChoiceCardContext.Provider value={{active, setActive}}>
                  <Navbar />
                  <Subscribe />
                </ChoiceCardContext.Provider>
              </section>
            </>
          }
        ></Route>
      </Routes>

      <section className="app-footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
