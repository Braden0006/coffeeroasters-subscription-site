import React from "react";

import "./HQ.css";

import HQUnitedKingdom from "../HQUnitedKingdom/HQUnitedKingdom";
import HQCanada from "../HQCanada/HQCanada";
import HQAustralia from "../HQAustralia/HQAustralia";

export default function HQ() {
  return (
    <>
      <section className="hq">
        <h2 className="hq__title">Our headquarters</h2>
      </section>
      <div className="hq__cards">
        <HQUnitedKingdom />
        <HQCanada />
        <HQAustralia />
      </div>
    </>
  );
}
