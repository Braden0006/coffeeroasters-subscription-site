import React from "react";

import "../ChoicesStyle/ChoicesStyle.css";

export default function Choices(props) {
  return (
    <div className="choices">
      <div className="choices__card choice-card-one">
        <h2 className="choices__card__title">{props.one}</h2>
        <p className="choices__card__info">
          {props.infoOne}
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">{props.two}</h2>
        <p className="choices__card__info">
          {props.infoTwo}
        </p>
      </div>

      <div className="choices__card">
        <h2 className="choices__card__title">{props.three}</h2>
        <p className="choices__card__info">
          {props.infoThree}
        </p>
      </div>
    </div>
  );
}