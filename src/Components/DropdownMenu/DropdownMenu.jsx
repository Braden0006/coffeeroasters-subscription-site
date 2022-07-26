import React, { useState } from "react";

import "./DropdownMenu.css";

export default function DropdownMenu(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="drop-menu">
      <div className="drop-menu__title-container">
        <h2 className="drop-menu__title">{props.title}</h2>
        <span className="drop-menu__logo" onClick={() => setOpen(!open)}>
          {!open ? (
            <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
              <path
                className="drop-menu__logo__path"
                d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                fill="#0E8784"
                fillRule="nonzero"
              />
            </svg>
          ) : (
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="drop-menu__logo__path"
                d="M15.9488 12.5098L18.7773 9.68134L9.6816 0.585674L0.585938 9.68134L3.41436 12.5098L9.68115 6.24255L15.9488 12.5098Z"
                fill="#0E8784"
              />
            </svg>
          )}
        </span>
      </div>

      {open && props.children}
    </div>
  );
}
