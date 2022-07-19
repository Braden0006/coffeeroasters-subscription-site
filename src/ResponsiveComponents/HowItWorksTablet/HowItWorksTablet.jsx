import React from "react";

import HowItWorksCardOne from "../../Components/HowItWorksCardOne/HowItWorksCardOne";
import HowItWorksCardThree from "../../Components/HowItWorksCardThree/HowItWorksCardThree";
import HowItWorksCardTwo from "../../Components/HowItWorksCardTwo/HowItWorksCardTwo";
import HomepageButton from "../../Components/HomepageButton/HomepageButton";

import "../../Components/HowItWorks/HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how">
      <h2 className="how__title">How it works</h2>
      <svg
        width="497"
        height="31"
        viewBox="0 0 497 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 16H481" stroke="#FDD6BA" strokeWidth="2" />
        <circle
          cx="15.5"
          cy="15.5"
          r="14.5"
          fill="#FEFCF7"
          stroke="#0E8784"
          strokeWidth="2"
        />
        <circle
          cx="248.5"
          cy="15.5"
          r="14.5"
          fill="#FEFCF7"
          stroke="#0E8784"
          strokeWidth="2"
        />
        <circle
          cx="481.5"
          cy="15.5"
          r="14.5"
          fill="#FEFCF7"
          stroke="#0E8784"
          strokeWidth="2"
        />
      </svg>
      <div className="how__cards">
        <HowItWorksCardOne />
        <HowItWorksCardTwo />
        <HowItWorksCardThree />
      </div>
      <HomepageButton />
    </section>
  );
}
