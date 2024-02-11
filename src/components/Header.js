// Header.js
import React from "react";
import "./Header.css";
import logo from "../assets/teslaLogoSmall.png";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <div className="header">
      <div className="header__center">
        <div className="header__logo">
          <img src={logo} alt="Tesla Logo" style={{ width: "150px", height: "15px" }} />
        </div>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default Header;
