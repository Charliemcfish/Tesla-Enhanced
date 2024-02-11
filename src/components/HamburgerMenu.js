import React, { useState, useEffect, useRef } from "react";
import "./HamburgerMenu.css";
import ModelSImage from "../assets/model-s.png";
import Model3Image from "../assets/model-3.png";
import ModelXImage from "../assets/model-x.png";
import ModelYImage from "../assets/model-y.png";
import SolarImage from "../assets/solar.png";
import AccessoriesImage from "../assets/accessories.png";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false); // Close the menu if clicked outside the panel
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleBackgroundClick = () => {
    setOpen(false);
    // Optionally, scroll the page back to the top when the menu is closed
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className={`hamburger-button ${isOpen ? "open" : ""}`}
      />
      <div
        className={`panel ${isOpen ? "open" : ""}`}
        ref={panelRef}
        onClick={handleBackgroundClick}
      >
        <ul className={isOpen ? "fade-in" : ""}>
          <li>
            <img src={ModelSImage} alt="Model S" />
            <a href="#">Model S</a>
          </li>
          <li>
            <img src={Model3Image} alt="Model 3" />
            <a href="#">Model 3</a>
          </li>
          <li>
            <img src={ModelXImage} alt="Model X" />
            <a href="#">Model X</a>
          </li>
          <li>
            <img src={ModelYImage} alt="Model Y" />
            <a href="#">Model Y</a>
          </li>
          <li>
            <img src={SolarImage} alt="Solar Panels" />
            <a href="#">Solar</a>
          </li>
          <li>
            <img src={AccessoriesImage} alt="Accessories" />
            <a href="#">Other</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
