import React from "react";

import "../ChoicesStyle/ChoicesStyle.css";

export default function ChoicesThree() {
  return (
    <div className="choices">
      <div className="choices__card choice-card-one">
        <h2 className="choices__card__title">250g</h2>
        <p className="choices__card__info">
          Perfect for the solo drinker. Yields about 12 delicious cups.
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">500g</h2>
        <p className="choices__card__info">
          Perfect option for a couple. Yields about 40 delectable cups.
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">1000g</h2>
        <p className="choices__card__info">
          Perfect for offices and events. Yields about 90 delightful cups.
        </p>
      </div>
    </div>
  );
}
