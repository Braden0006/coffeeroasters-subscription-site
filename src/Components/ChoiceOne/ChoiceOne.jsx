import React, { useContext } from "react";

import "../ChoicesStyle/ChoicesStyle.css";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";

const ChoiceOne = (props) => {
  const { cardOneActive, setCardOneActive } = useContext(ChoiceCardContext);

  return (
    <div className="choices">
      <div
        className={
          cardOneActive === props.one ? "choices__card active" : "choices__card"
        }
        onClick={() => setCardOneActive(props.one)}
      >
        <h2
          className={
            cardOneActive === props.one
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.one}
        </h2>

        <p
          className={
            cardOneActive === props.one
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          Compatible with Nespresso systems and similar brewers
        </p>
      </div>

      <div
        className={
          cardOneActive === props.two ? "choices__card active" : "choices__card"
        }
        onClick={() => setCardOneActive(props.two)}
      >
        <h2
          className={
            cardOneActive === props.two
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.two}
        </h2>

        <p
          className={
            cardOneActive === props.two
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          For pour over or drip methods like Aeropress, Chemex, and V60
        </p>
      </div>

      <div
        className={
          cardOneActive === props.three
            ? "choices__card active"
            : "choices__card"
        }
        onClick={() => setCardOneActive(props.three)}
      >
        <h2
          className={
            cardOneActive === props.three
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.three}
        </h2>

        <p
          className={
            cardOneActive === props.three
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          Dense and finely ground beans for an intense, flavorful experience
        </p>
      </div>
    </div>
  );
};

export default ChoiceOne;
