import React from "react";

import Commitment from "../Commitment/Commitment";
import Quality from "../Quality/Quality";
import HQ from "../HQ/HQ";

import "./About.css";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="about__info-container">
          <h2 className="about__info__title">About us</h2>
          <p className="about__info__description">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in every
            shipment.
          </p>
        </div>
      </section>

      <Commitment />
      <Quality />
      <HQ />
    </>
  );
}
