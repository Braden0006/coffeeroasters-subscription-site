import React, { useContext } from "react";

import "../ChoicesStyle/ChoicesStyle.css";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";

export default function ChoiceThree(props) {
  const { cardThreeActive, setCardThreeActive } = useContext(ChoiceCardContext);

  return (
    <div className="choices">
      <div
        className={
          cardThreeActive === props.one
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => setCardThreeActive(props.one)}
      >
        <h2
          className={
            cardThreeActive === props.one
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.one}
        </h2>

        <p
          className={
            cardThreeActive === props.one
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          Perfect for the solo drinker. Yields about 12 delicious cups.
        </p>
      </div>

      <div
        className={
          cardThreeActive === props.two
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => setCardThreeActive(props.two)}
      >
        <h2
          className={
            cardThreeActive === props.two
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.two}
        </h2>

        <p
          className={
            cardThreeActive === props.two
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          Perfect option for a couple. Yields about 40 delectable cups.
        </p>
      </div>

      <div
        className={
          cardThreeActive === props.three
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => setCardThreeActive(props.three)}
      >
        <h2
          className={
            cardThreeActive === props.three
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.three}
        </h2>

        <p
          className={
            cardThreeActive === props.three
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          Perfect for offices and events. Yields about 90 delightful cups.
        </p>
      </div>
    </div>
  );
}
