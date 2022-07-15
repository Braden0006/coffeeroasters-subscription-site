import React, { useContext } from "react";

import "./OrderSummary.css";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";

export default function OrderSummary() {
  const {
    cardOneActive,
    cardTwoActive,
    cardThreeActive,
    cardFourActive,
    cardFiveActive,
  } = useContext(ChoiceCardContext);

  return (
    <div className="order">
      <div className="order__title-container">
        <h3 className="order__title">ORDER SUMMARY</h3>
        <p className="order__description">
          "I drink my coffee as{" "}
          <span className="order__description__state">{cardOneActive}</span>,
          with a{" "}
          <span className="order__description__state">{cardTwoActive}</span>{" "}
          type of bean.{" "}
          <span className="order__description__state">{cardThreeActive}</span>{" "}
          ground ala{" "}
          <span className="order__description__state">{cardFourActive}</span>,
          sent to me every{" "}
          <span className="order__description__state">{cardFiveActive}</span>."
        </p>
      </div>
    </div>
  );
}
