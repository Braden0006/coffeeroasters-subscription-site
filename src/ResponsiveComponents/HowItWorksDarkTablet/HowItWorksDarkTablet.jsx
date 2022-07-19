import React from "react";

import HowItWorksCardOneDark from "../../Components/HowItWorksCardOneDark/HowItWorksCardOneDark";
import HowItWorksCardTwoDark from "../../Components/HowItWorksCardTwoDark/HowItWorksCardTwoDark";
import HowItWorksCardThreeDark from "../../Components/HowItWorksCardThreeDark/HowItWorksCardThreeDark";

import "../../Components/HowItWorksDark/HowItWorksDark.css";

export default function HowItWorksDark() {
  return (
    <section className="howTwo">
      <div className="howTwo__line">
          <svg
            width="497"
            height="31"
            viewBox="0 0 497 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 16H481" stroke="#FDD6BA" strokeWidth="2" />
            <circle cx="15.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth="2" />
            <circle
              cx="248.5"
              cy="15.5"
              r="14.5"
              stroke="#0E8784"
              strokeWidth="2"
            />
            <circle
              cx="481.5"
              cy="15.5"
              r="14.5"
              stroke="#0E8784"
              strokeWidth="2"
            />
          </svg>
      </div>
      <div className="howTwo__cards">
          <HowItWorksCardOneDark />
          <HowItWorksCardTwoDark />
          <HowItWorksCardThreeDark />
      </div>
    </section>
  );
}
