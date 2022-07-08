import React from "react";

import CoffeeOne from "../CollectionCoffeeOne/CollectionCoffeeOne";

import "./Collection.css";

export default function Collection() {
  return (
    <section className="collection">
      <h1 className="collection__title">our collection</h1>
      <CoffeeOne />
    </section>
  );
}
