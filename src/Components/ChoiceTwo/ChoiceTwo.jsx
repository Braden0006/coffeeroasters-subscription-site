import React, { useContext } from "react";

import "../ChoicesStyle/ChoicesStyle.css";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";

export default function ChoiceTwo(props) {
  const { cardTwoActive, setCardTwoActive } = useContext(ChoiceCardContext);

  return (
    <div className="choices">
      <div
        className={
          cardTwoActive === props.one ? "choices__card active" : "choices__card"
        }
        onClick={() => setCardTwoActive(props.one)}
      >
        <h2
          className={
            cardTwoActive === props.one
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.one}
        </h2>

        <p
          className={
            cardTwoActive === props.one
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          Distinct, high quality coffee from a specific family-owned farm
        </p>
      </div>

      <div
        className={
          cardTwoActive === props.two ? "choices__card active" : "choices__card"
        }
        onClick={() => setCardTwoActive(props.two)}
      >
        <h2
          className={
            cardTwoActive === props.two
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.two}
        </h2>

        <p
          className={
            cardTwoActive === props.two
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          Just like regular coffee, except the caffeine has been removed
        </p>
      </div>

      <div
        className={
          cardTwoActive === props.three
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => setCardTwoActive(props.three)}
      >
        <h2
          className={
            cardTwoActive === props.three
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.three}
        </h2>

        <p
          className={
            cardTwoActive === props.three
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          Combination of two or three dark roasted beans of organic coffees
        </p>
      </div>
    </div>
  );
}
