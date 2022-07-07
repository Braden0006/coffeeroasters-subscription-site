import React from "react";

import "./Homepage.css";

export default function Homepage() {
  return (
    <section className="homepage">
      <h1 className="homepage__title">Great coffee made simple.</h1>
      <p className="homepage__info">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <button className="homepage__button">Create your plan</button>
    </section>
  );
}
