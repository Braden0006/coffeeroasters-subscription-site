import React from "react";

import "../ChoicesStyle/ChoicesStyle.css";

export default function ChoicesFive() {
  return (
    <div className="choices">
      <div className="choices__card choice-card-one">
        <h2 className="choices__card__title">Every week</h2>
        <p className="choices__card__info">
          $7.20 per shipment. Includes free first-class shipping.
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">Every 2 weeks</h2>
        <p className="choices__card__info">
          $9.60 per shipment. Includes free priority shipping.
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">Every month</h2>
        <p className="choices__card__info">
          $12.00 per shipment. Includes free priority shipping.
        </p>
      </div>
    </div>
  );
}
