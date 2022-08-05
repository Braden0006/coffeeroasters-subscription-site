import React from "react";
import { Link } from "react-router-dom";

import "./HomepageButton.css";

export default function HomepageButton() {
  return (
    <button className="homepage__button">
      <Link className="homepage__button__link" to="/subscribe">
        Create your plan
      </Link>
    </button>
  );
}
