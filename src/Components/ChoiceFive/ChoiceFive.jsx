import React, { useContext } from "react";

import "../ChoicesStyle/ChoicesStyle.css";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";

export default function ChoiceFive(props) {
  const { cardFiveActive, setCardFiveActive } = useContext(ChoiceCardContext);
  const { setCardFivePrice } = useContext(ChoiceCardContext);

  return (
    <div className="choices">
      <div
        className={
          cardFiveActive === props.one
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => (
          setCardFiveActive(props.one), setCardFivePrice("$28.80")
        )}
      >
        <h2
          className={
            cardFiveActive === props.one
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.one}
        </h2>

        <p
          className={
            cardFiveActive === props.one
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          $7.20 per shipment. Includes free first-class shipping.
        </p>
      </div>

      <div
        className={
          cardFiveActive === props.two
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => (
          setCardFiveActive(props.two), setCardFivePrice("$19.20")
        )}
      >
        <h2
          className={
            cardFiveActive === props.two
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.two}
        </h2>

        <p
          className={
            cardFiveActive === props.two
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          $9.60 per shipment. Includes free priority shipping.
        </p>
      </div>

      <div
        className={
          cardFiveActive === props.three
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => (
          setCardFiveActive(props.three), setCardFivePrice("$12.00")
        )}
      >
        <h2
          className={
            cardFiveActive === props.three
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.three}
        </h2>

        <p
          className={
            cardFiveActive === props.three
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          $12.00 per shipment. Includes free priority shipping.
        </p>
      </div>
    </div>
  );
}
