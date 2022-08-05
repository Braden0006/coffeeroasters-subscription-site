import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ChoiceCardContext } from "../../Context/ChoiceCardContext";
import { NavbarContext } from "../../Context/NavbarContext";

import NavbarClose from "../NavbarClose/NavbarClose";

import "./HamburgerMenu.css";

export default function HamburgerMenu() {
  const { menuActive, setMenuActive } = useContext(ChoiceCardContext);

  if (!menuActive) return null;

  return (
    <section className="menu">
      <NavbarClose />

      <ul className="menu__list">
        <li className="menu__list-item space">
          <Link
            className="menu__list-item__link"
            to="/"
            onClick={() => setMenuActive(!menuActive)}
          >
            Home
          </Link>
        </li>
        <li className="menu__list-item space">
          <Link
            className="menu__list-item__link"
            to="/about"
            onClick={() => setMenuActive(!menuActive)}
          >
            About Us
          </Link>
        </li>
        <li className="menu__list-item">
          <Link
            className="menu__list-item__link"
            to="/subscribe"
            onClick={() => setMenuActive(!menuActive)}
          >
            Create Your Plan
          </Link>
        </li>
      </ul>
    </section>
  );
}
