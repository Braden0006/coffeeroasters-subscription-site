import React from "react";

import HowItWorksCardOneDark from "../HowItWorksCardOneDark/HowItWorksCardOneDark";
import HowItWorksCardTwoDark from "../HowItWorksCardTwoDark/HowItWorksCardTwoDark";
import HowItWorksCardThreeDark from "../HowItWorksCardThreeDark/HowItWorksCardThreeDark";

import "./HowItWorksDark.css";

export default function HowItWorksDark() {
  return (
    <section className="howTwo">
      <HowItWorksCardOneDark />
      <HowItWorksCardTwoDark />
      <HowItWorksCardThreeDark />
    </section>
  );
}
