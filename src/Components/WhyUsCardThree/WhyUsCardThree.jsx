import React from "react";

import '../WhyUsCardStyle/WhyUsCardStyle.css';

export default function WhyUsCardThree() {
  return (
    <section className="why-us-card-container">
      <div className="why-us-card">
        <span className="why-us-card__img">
          <svg width="72" height="50" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M55.385 37.5c3.435 0 6.23 2.804 6.23 6.25S58.82 50 55.385 50c-3.436 0-6.231-2.804-6.231-6.25s2.795-6.25 6.23-6.25zm-38.77 0c3.436 0 6.231 2.804 6.231 6.25S20.051 50 16.616 50c-3.436 0-6.231-2.804-6.231-6.25s2.795-6.25 6.23-6.25zm40.87 4.143h-4.2v4.214h4.2v-4.214zm-38.77 0h-4.2v4.214h4.2v-4.214zM48.463 0v35.397a10.497 10.497 0 00-3.652 7.659H27.05c-.165-5.647-4.787-10.19-10.448-10.19-5.662 0-10.283 4.543-10.449 10.19H0V29.12h11.77a2.736 2.736 0 002.726-2.739 2.736 2.736 0 00-2.727-2.738H8.345v-4.23h17.92a2.736 2.736 0 002.728-2.738 2.736 2.736 0 00-2.727-2.74H0V9.708h16.602a2.736 2.736 0 002.726-2.739c0-1.459-1.352-2.739-2.894-2.739h-3.307V0h35.335zM72 23.611v19.445h-6.216c-.167-5.656-4.836-10.207-10.556-10.207-.901 0-1.777.114-2.613.326v-9.564H72zM4.154 19.444v4.167H0v-4.167h4.154zM61.062 4.861l9.553 14.583h-18V4.861h8.447zM9 0v4.167H4.846V0H9z"
              fill="#FDD6BA"
              fillRule="nonzero"
            />
          </svg>
        </span>
        <h2 className="why-us-card__title">Free shipping</h2>
        <p className="why-us-card__description">
          We cover the cost and coffee is delivered fast. Peak freshness:
          guaranteed.
        </p>
      </div>
    </section>
  );
}
