import React from "react";

import Piccollo from "/src/images/image-piccollo.png";

import "./CollectionCoffeeThree.css";

export default function CollectionCoffeeThree() {
  return (
    <div className="collection__coffee-three">
      <img className="collection__coffee-three__img" src={Piccollo} alt="" />
      <div className="collection__coffee-three__description-container">
        <h2 className="collection__coffee-three__description__name">
          Piccollo
        </h2>
        <p className="collection__coffee-three__description__info">
          Mild and smooth blend featuring notes of toasted almond and dried
          cherry
        </p>
      </div>
    </div>
  );
}
