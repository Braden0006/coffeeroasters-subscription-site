import React, {useState} from "react";
import OrderSummary from "../OrderSummary/OrderSummary";

import './DropdownMenu.css';

export default function DropdownMenu(props) {

  const [open, setOpen] = useState(false)

  return (
    <div className="drop-menu">
      <div className="drop-menu__title-container">
        <h2 className="drop-menu__title">{props.title}</h2>
        <span className="drop-menu__logo" onClick={() => setOpen(!open)}>{props.icon}</span>
      </div>

      {open && props.children}
    </div>
  );
}
