import React, { useContext } from "react";
import MediaQuery from "react-responsive";

import "./Subscribe.css";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";

import HowItWorksDark from "../HowItWorksDark/HowItWorksDark";
import HowItWorksDarkTablet from "../../ResponsiveComponents/HowItWorksDarkTablet/HowItWorksDarkTablet";
import Questions from "../Questions/Questions";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import ChoiceOne from "../ChoiceOne/ChoiceOne";
import ChoiceTwo from "../ChoiceTwo/ChoiceTwo";
import ChoiceThree from "../ChoiceThree/ChoiceThree";
import ChoiceFour from "../ChoiceFour/ChoiceFour";
import ChoiceFive from "../ChoiceFive/ChoiceFive";
import OrderSummary from "../OrderSummary/OrderSummary";

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
        <DropdownMenu title="How do you drink your coffee?">
          <ChoiceOne one="Capsule" two="Filter" three="Origin" />
        </DropdownMenu>

        <DropdownMenu title="What type of coffee?">
          <ChoiceTwo one="Single Origin" two="Decaf" three="Blended" />
        </DropdownMenu>

        <DropdownMenu title="How much would you like?">
          <ChoiceThree one="250g" two="500g" three="1000g" />
        </DropdownMenu>

        <DropdownMenu title="Want us to grind them?">
          <ChoiceFour one="Wholebean" two="Filter" three="Cafetiére" />
        </DropdownMenu>

        <DropdownMenu title="How often should we deliver?">
          <ChoiceFive
            one="Every week"
            two="Every 2 weeks"
            three="Every month"
          />
        </DropdownMenu>
      </Questions>

      <OrderSummary />

      <button className="subscribe-button" onClick={() => setCheckout(true)}>
        Create my plan!
      </button>
    </>
  );
}
