import React from "react";

import WhyUsCardOne from "../WhyUsCardOne/WhyUsCardOne";
import WhyUsCardThree from "../WhyUsCardThree/WhyUsCardThree";
import WhyUsCardTwo from "../WhyUsCardTwo/WhyUsCardTwo";

import './WhyUs.css';

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="why-us-background">
        <div className="why-us__intro">
            <h2 className="why-us__intro__title">Why choose us?</h2>
            <p className="why-us__intro__info">
              A large part of our role is choosing which particular coffees will be
              featured in our range. This means working closely with the best coffee
              growers to give you a more impactful experience on every level.
            </p>
        </div>
        <WhyUsCardOne />
        <WhyUsCardTwo />
        <WhyUsCardThree />
      </div>
    </section>
  );
}
