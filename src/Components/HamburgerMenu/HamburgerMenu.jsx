import React, { useContext } from "react";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";
import { NavbarContext } from "../../Context/NavbarContext";

import NavbarClose from "../NavbarClose/NavbarClose";

import './HamburgerMenu.css';

export default function HamburgerMenu() {
  const { menuActive } = useContext(ChoiceCardContext);

  if (!menuActive) return null;

  return (
    <section className="menu">
      <NavbarClose />

      <ul className="menu__list">
        <li className="menu__list-item">Home</li>
        <li className="menu__list-item">About Us</li>
        <li className="menu__list-item">Create Your Plan</li>
      </ul>
    </section>
  );
}
