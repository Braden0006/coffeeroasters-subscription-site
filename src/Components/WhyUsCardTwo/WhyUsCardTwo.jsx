import React from "react";

import "../WhyUsCardOne/WhyUsCardOne.css";

export default function WhyUsCardTwo() {
  return (
    <section className="why-us-card-container">
      <div className="why-us-card">
        <span className="why-us-card__img">
          <svg width="72" height="72" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34 44v28H11.297C8.391 72 6 69.672 6 66.842V44h28zm32 0v22.842C66 69.672 63.609 72 60.703 72H38V44h28zM55.73 0C64.05.003 67 4.347 67 8.067c0 4.26-3.952 9.643-12.424 12.934L66.711 21C69.612 21 72 23.37 72 26.25v7.5c0 2.88-2.388 5.25-5.289 5.25H38l.001-15.02a70.21 70.21 0 01-1.7.02c-.1 0-.201-.006-.3-.02-.1.013-.2.02-.303.02-.574 0-1.14-.007-1.698-.02V39H5.289C2.388 39 0 36.63 0 33.75v-7.5C0 23.37 2.388 21 5.289 21h12.135C8.952 17.71 5 12.327 5 8.066 5 4.345 7.953 0 16.272 0 27.008 0 33.088 7.615 36 14.592 38.911 7.615 44.992 0 55.73 0zM16.273 4.451c-3.223 0-6.667.95-6.667 3.614 0 3.79 6.855 10.695 23.217 11.422-1.381-4.932-5.556-15.036-16.55-15.036zm39.459.002c-10.997 0-15.172 10.103-16.556 15.031 8.675-.391 14.146-2.513 17.295-4.32 4.369-2.507 5.925-5.31 5.925-7.1 0-2.664-3.441-3.61-6.664-3.61z"
              fill="#FDD6BA"
              fillRule="nonzero"
            />
          </svg>
        </span>
        <h2 className="why-us-card__title">Exclusive benefits</h2>
        <p className="why-us-card__description">
          Special offers and swag when you subscribe, including 30% off your
          first shipment.
        </p>
      </div>
    </section>
  );
}
