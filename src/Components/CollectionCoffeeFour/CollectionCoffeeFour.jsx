import React from "react";

import Danche from "/src/images/image-danche.png";

import "./CollectionCoffeeFour.css";

export default function CollectionCoffeeFour() {
  return (
    <div className="collection__coffee-four-container">
      <div className="collection__coffee-four">
        <img className="collection__coffee-four__img" src={Danche} alt="" />
        <h2 className="collection__coffee-four__name">Danche</h2>
        <p className="collection__coffee-four__info">
          Ethiopian hand-harvested blend densely packed with vibrant fruit notes
        </p>
      </div>
    </div>
  );
}
