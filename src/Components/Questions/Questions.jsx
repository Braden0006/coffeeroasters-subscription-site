import React, { useContext } from "react";
import MediaQuery from "react-responsive";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";

import "./Questions.css";

export default function Questions(props) {
  // Below are the states for each card in Choices
  const {
    cardOneActive,
    cardTwoActive,
    cardThreeActive,
    cardFourActive,
    cardFiveActive,
  } = useContext(ChoiceCardContext);

  return (
    <>
      <MediaQuery maxWidth={1023}>
        <section className="questions">{props.children}</section>
      </MediaQuery>

      <MediaQuery minWidth={1024}>
        <section className="questions">
          <div className="questions__nav">
            <ul className="questions__nav__list">
              <li
                className={
                  cardOneActive === "Origin" ||
                  cardOneActive === "Filter" ||
                  cardOneActive === "Capsule"
                    ? "questions__nav__list-item question-active"
                    : "questions__nav__list-item"
                }
              >
                <span
                  className={
                    cardOneActive === "Origin" ||
                    cardOneActive === "Filter" ||
                    cardOneActive === "Capsule"
                      ? "questions__nav__list-item__number question-number-active"
                      : "questions__nav__list-item__number"
                  }
                >
                  01
                </span>{" "}
                Preferences
              </li>
              <hr />
              <br />
              <br />
              <li
                className={
                  cardTwoActive === "Single Origin" ||
                  cardTwoActive === "Decaf" ||
                  cardTwoActive === "Blended"
                    ? "questions__nav__list-item question-active"
                    : "questions__nav__list-item"
                }
              >
                <span
                  className={
                    cardTwoActive === "Single Origin" ||
                    cardTwoActive === "Decaf" ||
                    cardTwoActive === "Blended"
                      ? "questions__nav__list-item__number question-number-active"
                      : "questions__nav__list-item__number"
                  }
                >
                  02
                </span>{" "}
                Bean Type
              </li>
              <hr />
              <br />
              <br />
              <li
                className={
                  cardThreeActive === "250g" ||
                  cardThreeActive === "500g" ||
                  cardThreeActive === "1000g"
                    ? "questions__nav__list-item question-active"
                    : "questions__nav__list-item"
                }
              >
                <span
                  className={
                    cardThreeActive === "250g" ||
                    cardThreeActive === "500g" ||
                    cardThreeActive === "1000g"
                      ? "questions__nav__list-item__number question-number-active"
                      : "questions__nav__list-item__number"
                  }
                >
                  03
                </span>{" "}
                Quantity
              </li>
              <hr />
              <br />
              <br />
              <li
                className={
                  cardFourActive === "Wholebean" ||
                  cardFourActive === "Filter" ||
                  cardFourActive === "Cafetiére"
                    ? "questions__nav__list-item question-active"
                    : "questions__nav__list-item"
                }
              >
                <span
                  className={
                    cardFourActive === "Wholebean" ||
                    cardFourActive === "Filter" ||
                    cardFourActive === "Cafetiére"
                      ? "questions__nav__list-item__number question-number-active"
                      : "questions__nav__list-item__number"
                  }
                >
                  04
                </span>{" "}
                Grind Option
              </li>
              <hr />
              <br />
              <br />
              <li
                className={
                  cardFiveActive === "Every week" ||
                  cardFiveActive === "Every 2 weeks" ||
                  cardFiveActive === "Every month"
                    ? "questions__nav__list-item question-active"
                    : "questions__nav__list-item"
                }
              >
                <span
                  className={
                    cardFiveActive === "Every week" ||
                    cardFiveActive === "Every 2 weeks" ||
                    cardFiveActive === "Every month"
                      ? "questions__nav__list-item__number question-number-active"
                      : "questions__nav__list-item__number"
                  }
                >
                  05
                </span>{" "}
                Deliveries
              </li>
              <hr />
            </ul>
          </div>
          <div className="questions__cards">{props.children}</div>
        </section>
      </MediaQuery>
    </>
  );
}
