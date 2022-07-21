import React from "react";
import MediaQuery from "react-responsive";

import QualityImg from "/src/images/image-quality.jpg";
import TabletQualityImg from '/src/images/Tablet/image-quality.jpg';
import DesktopQualityImg from '/src/images/Desktop/image-quality.jpg';

import "./Quality.css";

export default function Quality() {
  return (
    <section className="quality">
      <MediaQuery maxWidth={767}>
        <img className="quality__img" src={QualityImg} alt="" />
      </MediaQuery>

      <MediaQuery minWidth={768} maxWidth={1023}>
        <img className="quality__img" src={TabletQualityImg} alt="" />
      </MediaQuery>

      <MediaQuery minWidth={1024}>
        <img className="quality__img" src={DesktopQualityImg} alt="" />
      </MediaQuery>
      <div className="quality-background">
        <h2 className="quality__title">Uncompromising quality</h2>
        <p className="quality__description">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </section>
  );
}
