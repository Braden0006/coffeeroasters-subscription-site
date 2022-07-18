import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Collection from "./Components/Collection/Collection";
import WhyUs from "./Components/WhyUs/WhyUs";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import About from "./Components/About/About";
import Subscribe from "./Components/Subscribe/Subscribe";
import Modal from "./Components/Modal/Modal";
import Footer from "./Components/Footer/Footer";

import { ChoiceCardContext } from "../src/Context/ChoiceCardContext";
import { NavbarContext } from "../src/Context/NavbarContext";

import "./App.css";

function App() {
  const [cardOneActive, setCardOneActive] = useState("");
  const [cardTwoActive, setCardTwoActive] = useState("");
  const [cardThreeActive, setCardThreeActive] = useState("");
  const [cardFourActive, setCardFourActive] = useState("");
  const [cardFiveActive, setCardFiveActive] = useState("");
  const [cardFivePrice, setCardFivePrice] = useState("");

  const [checkout, setCheckout] = useState(false);

  const [menuActive, setMenuActive] = useState(false);

  if (checkout || menuActive) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = 'auto';
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ChoiceCardContext.Provider value={{ menuActive, setMenuActive }}>
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
            </ChoiceCardContext.Provider>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <ChoiceCardContext.Provider value={{ menuActive, setMenuActive }}>
              <section className="app-about">
                <Navbar />
                <About />
              </section>
            </ChoiceCardContext.Provider>
          }
        ></Route>
        <Route
          path="/subscribe"
          element={
            <>
              <section className="app-subscribe">
                <ChoiceCardContext.Provider
                  value={{
                    cardOneActive,
                    setCardOneActive,
                    cardTwoActive,
                    setCardTwoActive,
                    cardThreeActive,
                    setCardThreeActive,
                    cardFourActive,
                    setCardFourActive,
                    cardFiveActive,
                    setCardFiveActive,
                    checkout,
                    setCheckout,
                    cardFivePrice,
                    setCardFivePrice,
                    menuActive,
                    setMenuActive,
                  }}
                >
                  <Navbar />
                  <Subscribe />
                  <Modal checkout={checkout} />
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
