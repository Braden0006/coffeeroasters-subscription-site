import React, { useContext } from "react";
import ReactDom from "react-dom";

import "../../Components/Modal/Modal.css";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";

export default function ModalTablet({ checkout }) {
  const {
    cardOneActive,
    cardTwoActive,
    cardThreeActive,
    cardFourActive,
    cardFiveActive,
    cardFivePrice,
  } = useContext(ChoiceCardContext);

  if (!checkout) return null;

  return ReactDom.createPortal(
    <section className="modal">
      <div className="modal__content">
        <div className="modal__content__title">
          <h2 className="modal__content__title-title">Order Summary</h2>
        </div>
        <div className="modal__content__body">
          <p className="modal__content__body__summary">
            "I drink my coffee as{" "}
            <span className="modal__content__body__summary-word">
              {cardOneActive}
            </span>
            , with a{" "}
            <span className="modal__content__body__summary-word">
              {cardTwoActive}
            </span>{" "}
            type of bean.{" "}
            <span className="modal__content__body__summary-word">
              {cardThreeActive}
            </span>{" "}
            ground ala{" "}
            <span className="modal__content__body__summary-word">
              {cardFourActive}
            </span>{" "}
            sent to me every{" "}
            <span className="modal__content__body__summary-word">
              {cardFiveActive}
            </span>
            ."
          </p>
          <p className="modal__content__body__question">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>
          <div className="modal__content__body__checkout">
            <span className="modal__content__body__checkout__price">
              {cardFivePrice} / mo
            </span>
            <button className="modal__content__body__checkout__button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>,
    document.getElementById("portal")
  );
}
