import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MediaQuery from "react-responsive";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Collection from "./Components/Collection/Collection";
import WhyUs from "./Components/WhyUs/WhyUs";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import HowItWorksTablet from "./ResponsiveComponents/HowItWorksTablet/HowItWorksTablet";
import HowItWorksDesktop from './ResponsiveComponents/HowItWorksDesktop/HowItWorksDesktop';
import About from "./Components/About/About";
import Subscribe from "./Components/Subscribe/Subscribe";
import Modal from "./Components/Modal/Modal";
import ModalTablet from "./ResponsiveComponents/ModalTablet/ModalTablet";
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

  if (checkout) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  useEffect(() => {
    if (window.innerWidth > 767) {
      setMenuActive(true);
      document.body.style.overFlow = "auto";
    }
  });

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
                <MediaQuery maxWidth={767}>
                  <HowItWorks />
                </MediaQuery>

                <MediaQuery minWidth={768} maxWidth={1023}>
                  <HowItWorksTablet />
                </MediaQuery>

                <MediaQuery minWidth={1024}>
                  <HowItWorksDesktop />
                </MediaQuery>
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
                  <MediaQuery maxWidth={767}>
                    <Modal checkout={checkout} />
                  </MediaQuery>

                  <MediaQuery minWidth={768}>
                    <ModalTablet checkout={checkout} />
                  </MediaQuery>
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
