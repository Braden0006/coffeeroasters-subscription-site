import React from "react";

import Planalto from "/src/images/image-planalto.png";

import "./CollectionCoffeeTwo.css";

export default function CollectionCoffeeTwo() {
  return (
    <div className="collection__coffee-two">
      <img className="collection__coffee-two__img" src={Planalto} alt="" />
      <div className="collection__coffee-two__description-container">
        <h2 className="collection__coffee-two__description__name">Planalto</h2>
        <p className="collection__coffee-two__description__info">
          Brazilian dark roast with rich and velvety body, and hints of fruits
          and nuts
        </p>
      </div>
    </div>
  );
}
