import React, { useState } from "react";

import "../ChoicesStyle/ChoicesStyle.css";

export default function Choices(props) {
  const [active, setActive] = useState("");

  return (
    <div className="choices">
      <div
        className={
          active === props.one ? "choices__card active" : "choices__card"
        }
        onClick={() => setActive(props.one)}
      >
        <h2
          className={
            active === props.one
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.one}
        </h2>
        <p
          className={
            active === props.one
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          {props.infoOne}
        </p>
      </div>

      <div
        className={
          active === props.two ? "choices__card active" : "choices__card"
        }
        onClick={() => setActive(props.two)}
      >
        <h2
          className={
            active === props.two
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.two}
        </h2>
        <p
          className={
            active === props.two
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          {props.infoTwo}
        </p>
      </div>

      <div
        className={
          active === props.three ? "choices__card active" : "choices__card"
        }
        onClick={() => setActive(props.three)}
      >
        <h2
          className={
            active === props.three
              ? "choices__card__title active-title"
              : "choices__card__title"
          }
        >
          {props.three}
        </h2>
        <p
          className={
            active === props.three
              ? "choices__card__info active-info"
              : "choices__card__info"
          }
        >
          {props.infoThree}
        </p>
      </div>
    </div>
  );
  console.log(active);
}
