import React from "react";

import CollectionCoffeeOne from "../CollectionCoffeeOne/CollectionCoffeeOne";
import CollectionCoffeeTwo from "../CollectionCoffeeTwo/CollectionCoffeeTwo";
import CollectionCoffeeThree from "../CollectionCoffeeThree/CollectionCoffeeThree";

import "./Collection.css";

export default function Collection() {
  return (
    <section className="collection">
      <h1 className="collection__title">our collection</h1>
      <CollectionCoffeeOne />
      <CollectionCoffeeTwo />
      <CollectionCoffeeThree />
    </section>
  );
}
