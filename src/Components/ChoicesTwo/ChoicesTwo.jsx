import React from "react";

import "../ChoicesStyle/ChoicesStyle.css";

export default function ChoicesTwo() {
  return (
    <div className="choices">
      <div className="choices__card choice-card-one">
        <h2 className="choices__card__title">Single Origin</h2>
        <p className="choices__card__info">
          Distinct, high quality coffee from a specific family-owned farm
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">Decaf</h2>
        <p className="choices__card__info">
          Just like regular coffee, except the caffeine has been removed
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">Blended</h2>
        <p className="choices__card__info">
          Combination of two or three dark roasted beans of organic coffees
        </p>
      </div>
    </div>
  );
}
