import React from "react";

import "./Subscribe.css";

import HowItWorksTwo from "../HowItWorksDark/HowItWorksDark";
import Questions from "../Questions/Questions";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import ChoicesOne from "../ChoicesOne/ChoicesOne";
import ChoicesTwo from "../ChoicesTwo/ChoicesTwo";
import ChoicesThree from "../ChoicesThree/ChoicesThree";

export default function Subscribe() {
  return (
    <>
      <section className="subscribe">
        <h2 className="subscribe__title">Create a plan</h2>
        <p className="subscribe__description">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>

      <HowItWorksTwo />
      <Questions>
        <DropdownMenu
          title="How do you drink your coffee?"
          icon={
            <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                fill="#0E8784"
                fillRule="nonzero"
              />
            </svg>
          }
        >
          <ChoicesOne />
        </DropdownMenu>

        <DropdownMenu
          title="What type of coffee?"
          icon={
            <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                fill="#0E8784"
                fillRule="nonzero"
              />
            </svg>
          }
        >
          <ChoicesTwo />
        </DropdownMenu>

        <DropdownMenu
          title="How much would you like?"
          icon={
            <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                fill="#0E8784"
                fillRule="nonzero"
              />
            </svg>
          }
        >
          <ChoicesThree />
        </DropdownMenu>
      </Questions>
    </>
  );
}
