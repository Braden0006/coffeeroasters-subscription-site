import React from "react";

import "../ChoicesStyle/ChoicesStyle.css";

export default function ChoicesOne() {
  return (
    <div className="choices">
      <div className="choices__card choice-card-one">
        <h2 className="choices__card__title">Capsule</h2>
        <p className="choices__card__info">
          Compatible with Nespresso systems and similar brewers
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">Filter</h2>
        <p className="choices__card__info">
          For pour over or drip methods like Aeropress, Chemex, and V60
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">Espresso</h2>
        <p className="choices__card__info">
          Dense and finely ground beans for an intense, flavorful experience
        </p>
      </div>
    </div>
  );
}
