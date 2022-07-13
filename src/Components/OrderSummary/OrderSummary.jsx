import React, { useContext } from "react";

import { ChoiceCardContext } from "../../Contexts/ChoiceCardContext";

import "./OrderSummary.css";

export default function OrderSummary() {
  const { active } = useContext(ChoiceCardContext);

  return (
    <div className="order">
      <div className="order__title-container">
        <h3 className="order__title">ORDER SUMMARY</h3>
        <p className="order__description">
          "I drink my coffee as{" "}
          <span className="order__description__state">{active}</span>, with a{" "}
          <span className="order__description__state">{active}</span> type of
          bean. <span className="order__description__state">{active}</span>
          ground ala <span className="order__description__state">{active}</span>
          , sent to me every{" "}
          <span className="order__description__state">{active}</span>.
        </p>
      </div>
    </div>
  );
}
