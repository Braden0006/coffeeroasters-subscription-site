import React from "react";

import "../HowItWorksStyleDark/HowItWorksStyleDark.css";

export default function HowItWorksCardOneDark() {
  return (
    <div className="how-card__dark card-one__dark">
      <span className="how-card__dark__number">01</span>
      <h2 className="how-card__dark__title">Pick your coffee</h2>
      <p className="how-card__dark__description">
        Select from our evolving range of artisan coffees. Our beans are
        ethically sourced and we pay fair prices for them. There are new coffees
        in all profiles every month for you to try out.
      </p>
    </div>
  );
}
