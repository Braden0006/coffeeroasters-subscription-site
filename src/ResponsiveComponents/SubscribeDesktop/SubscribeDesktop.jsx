import React, { useContext } from "react";
import MediaQuery from "react-responsive";

import "../../Components/Subscribe/Subscribe.css";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";

import HowItWorksDark from "../../Components/HowItWorksDark/HowItWorksDark";
import HowItWorksDarkTablet from "../HowItWorksDarkTablet/HowItWorksDarkTablet";
import Questions from "../../Components/Questions/Questions";
import DropdownMenu from "../../Components/DropdownMenu/DropdownMenu";
import ChoiceOne from "../../Components/ChoiceOne/ChoiceOne";
import ChoiceTwo from "../../Components/ChoiceTwo/ChoiceTwo";
import ChoiceThree from "../../Components/ChoiceThree/ChoiceThree";
import ChoiceFour from "../../Components/ChoiceFour/ChoiceFour";
import ChoiceFive from "../../Components/ChoiceFive/ChoiceFive";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";

export default function Subscribe() {
  const { setCheckout } = useContext(ChoiceCardContext);

  return (
    <>
      <section className="subscribe">
        <div className="subscribe__info-container">
          <h2 className="subscribe__info__title">Create a plan</h2>
          <p className="subscribe__info__description">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </section>

      <MediaQuery maxWidth={767}>
        <HowItWorksDark />
      </MediaQuery>

      <MediaQuery minWidth={767}>
        <HowItWorksDarkTablet />
      </MediaQuery>
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
          <ChoiceOne one="Capsule" two="Filter" three="Origin" />
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
          <ChoiceTwo one="Single Origin" two="Decaf" three="Blended" />
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
          <ChoiceThree one="250g" two="500g" three="1000g" />
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
          <ChoiceFour one="Wholebean" two="Filter" three="Cafetiére" />
        </DropdownMenu>

        <DropdownMenu
          title="How often should we deliver?"
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
          <ChoiceFive
            one="Every week"
            two="Every 2 weeks"
            three="Every month"
          />
        </DropdownMenu>
        <OrderSummary />
        <button className="subscribe-button" onClick={() => setCheckout(true)}>
          Create my plan!
        </button>
      </Questions>
    </>
  );
}
