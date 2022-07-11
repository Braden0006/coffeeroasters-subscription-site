import React from "react";

import '../WhyUsCardStyle/WhyUsCardStyle.css';

export default function WhyUsCardOne() {
  return (
    <section className="why-us-card-container card-one">
      <div className="why-us-card">
        <span className="why-us-card__img">
          <svg width="73" height="72" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M71.806 39.226c-.968-9.481-5.498-18.76-12.758-26.122C43.93-2.22 21.512-4.428 9.078 8.194-3.365 20.812-1.19 43.537 13.924 58.864c7.26 7.362 16.41 11.957 25.76 12.938 1.246.13 2.475.198 3.687.198 8.04 0 15.229-2.858 20.523-8.226 6.088-6.17 8.901-14.89 7.912-24.548zm-22.125 7.78c-4.953-3.833-10.322-5.35-16.153-6.97C18.85 35.955 11.558 23.535 9.855 8.977c4.135 5.058 7.188 10.836 12.265 15.07 5.409 4.51 11.364 6.152 17.905 8.074 14.36 4.225 21.464 16.538 23.097 30.87-4.482-5.463-7.77-11.592-13.441-15.984z"
              fill="#FDD6BA"
              fillRule="nonzero"
            />
          </svg>
        </span>
        <h2 className="why-us-card__title">Best quality</h2>
        <p className="why-us-card__description">
          Discover an endless variety of the world’s best artisan coffee from
          each of our roasters.
        </p>
      </div>
    </section>
  );
}
