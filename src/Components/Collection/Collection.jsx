import React from "react";

import CollectionCoffeeOne from "../CollectionCoffeeOne/CollectionCoffeeOne";
import CollectionCoffeeTwo from "../CollectionCoffeeTwo/CollectionCoffeeTwo";
import CollectionCoffeeThree from "../CollectionCoffeeThree/CollectionCoffeeThree";
import CollectionCoffeeFour from "../CollectionCoffeeFour/CollectionCoffeeFour";

import "./Collection.css";

export default function Collection() {
  return (
    <section className="collection">
      <h1 className="collection__title">our collection</h1>
      <div className="collection__cards">
        <CollectionCoffeeOne />
        <CollectionCoffeeTwo />
        <CollectionCoffeeThree />
        <CollectionCoffeeFour />
      </div>
    </section>
  );
}
