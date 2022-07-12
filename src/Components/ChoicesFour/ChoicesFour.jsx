import React from "react";

import "../ChoicesStyle/ChoicesStyle.css";

export default function ChoicesFour() {
  return (
    <div className="choices">
      <div className="choices__card choice-card-one">
        <h2 className="choices__card__title">Wholebean</h2>
        <p className="choices__card__info">
          Best choice if you cherish the full sensory experience
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">Filter</h2>
        <p className="choices__card__info">
          For drip or pour-over coffee methods such as V60 or Aeropress
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">Cafetiére</h2>
        <p className="choices__card__info">
          Course ground beans specially suited for french press coffee
        </p>
      </div>
    </div>
  );
}
