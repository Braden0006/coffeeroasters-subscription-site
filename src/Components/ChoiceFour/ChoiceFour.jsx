import React, { useContext } from "react";

import "../ChoicesStyle/ChoicesStyle.css";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";

export default function ChoiceFour(props) {
  const { cardFourActive, setCardFourActive } = useContext(ChoiceCardContext);

  return (
    <div className="choices">
      <div
        className={
          cardFourActive === props.one
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => setCardFourActive(props.one)}
      >
        <h2
          className={
            cardFourActive === props.one
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.one}
        </h2>

        <p
          className={
            cardFourActive === props.one
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          Best choice if you cherish the full sensory experience
        </p>
      </div>

      <div
        className={
          cardFourActive === props.two
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => setCardFourActive(props.two)}
      >
        <h2
          className={
            cardFourActive === props.two
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.two}
        </h2>

        <p
          className={
            cardFourActive === props.two
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          For drip or pour-over coffee methods such as V60 or Aeropress
        </p>
      </div>

      <div
        className={
          cardFourActive === props.three
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => setCardFourActive(props.three)}
      >
        <h2
          className={
            cardFourActive === props.three
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.three}
        </h2>

        <p
          className={
            cardFourActive === props.three
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          Course ground beans specially suited for french press coffee
        </p>
      </div>
    </div>
  );
}
