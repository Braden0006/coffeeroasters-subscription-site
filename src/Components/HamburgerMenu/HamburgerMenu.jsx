import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";
import { NavbarContext } from "../../Context/NavbarContext";

import NavbarClose from "../NavbarClose/NavbarClose";

import "./HamburgerMenu.css";

export default function HamburgerMenu() {
  const { menuActive } = useContext(ChoiceCardContext);

  if (!menuActive) return null;

  return (
    <section className="menu">
      <NavbarClose />

      <ul className="menu__list">
        <li className="menu__list-item space">
          <Link className="menu__list-item__link" to="/">
            Home
          </Link>
        </li>
        <li className="menu__list-item space">
          <Link className="menu__list-item__link" to="/about">
            About Us
          </Link>
        </li>
        <li className="menu__list-item">
          <Link className="menu__list-item__link" to="/subscribe">
            Create Your Plan
          </Link>
        </li>
      </ul>
    </section>
  );
}
