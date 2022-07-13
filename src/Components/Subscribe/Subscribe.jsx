import React from "react";

import "./Subscribe.css";

import HowItWorksTwo from "../HowItWorksDark/HowItWorksDark";
import Questions from "../Questions/Questions";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Choices from "../Choices/Choices";

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
          <Choices
            one="Capsule"
            infoOne="Compatible with Nespresso systems and similar brewers"
            two="Filter"
            infoTwo="For pour over or drip methods like Aeropress, Chemex, and V60"
            three="Espresso"
            infoThree="Dense and finely ground beans for an intense, flavorful experience"
          />
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
          <Choices
            one="Sinlge Origin"
            infoOne="Distinct, high quality coffee from a specific family-owned farm"
            two="Decaf"
            infoTwo="Just like regular coffee, except the caffeine has been removed"
            three="Blended"
            infoThree="Combination of two or three dark roasted beans of organic coffees"
          />
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
          <Choices
            one="250g"
            infoOne="Perfect for the solo drinker. Yields about 12 delicious cups."
            two="500g"
            infoTwo="Perfect option for a couple. Yields about 40 delectable cups."
            three="1000g"
            infoThree="Perfect for offices and events. Yields about 90 delightful cups."
          />
        </DropdownMenu>

        <DropdownMenu
          title="Want us to grind them?"
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
          <Choices
            one="Wholebean"
            infoOne="Best choice if you cherish the full sensory experience"
            two="Filter"
            infoTwo="For drip or pour-over coffee methods such as V60 or Aeropress"
            three="Cafetiére"
            infoThree="Course ground beans specially suited for french press coffee"
          />
        </DropdownMenu>

        <DropdownMenu
          title="Want us to grind them?"
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
          <Choices
            one="Every week"
            infoOne="$7.20 per shipment. Includes free first-class shipping."
            two="Every 2 weeks"
            infoTwo="$9.60 per shipment. Includes free priority shipping."
            three="Every month"
            infoThree="$12.00 per shipment. Includes free priority shipping."
          />
        </DropdownMenu>
      </Questions>
    </>
  );
}
