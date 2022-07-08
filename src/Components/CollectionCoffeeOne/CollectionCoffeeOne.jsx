import React from "react";

import GranEspresso from "/src/images/image-gran-espresso.png";

import './CollectionCoffeeOne.css';

export default function CollectionCoffeeOne() {
  return (
    <div className="collection__coffee-one-container">
      <div className="collection__coffee-one">
        <img className="collection__coffee-one__img" src={GranEspresso} alt="" />
        <h2 className="collection__coffee-one__name">Gran Espresso</h2>
        <p className="collection__coffee-one__info">
          Light and flavorful blend with cocoa and black pepper for an intense
          experience
        </p>
      </div>
    </div>
  );
}
