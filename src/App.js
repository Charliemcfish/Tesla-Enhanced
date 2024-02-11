// App.js

import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import React, { useState, useEffect } from "react";
import Accessories from "./assets/tesla.gif"; // Change background image for Accessories
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/tesla2.gif"; // Change background image for Model Y
import SolarPanels from "./assets/Desktop-SolarPanels.jpg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import teslaIntroGif from "./assets/teslaintro.gif";

function App() {
  const [showOverlay, setShowOverlay] = useState(true);

  // UseEffect to hide the overlay after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Overlay */}
      {showOverlay && (
        <div className="overlay">
          <img src={teslaIntroGif} alt="Tesla Intro" />
        </div>
      )}

      {/* Header */}
      <Header />
      {/* Header end */}

      {/* Items */}
      <div className="app__itemsContainer">
        <Item
          title="Model Y"
          desc="The UK's Most Popular EV, Starting From £75,000"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="BOOK TEST DRIVE"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Experience Tesla"
          desc="Schedule your Test Drive Today."
          descLink=""
          backgroundImg={Accessories}
          leftBtnTxt="BOOK YOUR EXPERIENCE NOW"
          leftBtnLink=""
          rightBtnTxt="DEALERSHIPS NEAR YOU"
          rightBtnLink=""
          twoButtons="true"
          customClass="specialItem" // Add a custom class for styling
        />
        <Item
          title="Lowest Cost Solar Panels in the UK"
          desc="Half your Energy Costs"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="BENEFITS OF SOLAR"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model S - From 0-60mph in 2.88s"
          desc="£70,000"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="BOOK TEST DRIVE"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="£80,000"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="BOOK TEST DRIVE"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="£90,000"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="BOOK TEST DRIVE"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar for New Roofs"
          desc="Half your Energy Costs "
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          customClass="specialItem" // Add a custom class for styling
        />
      </div>
      {/* Items end */}
    </div>
  );
}

export default App;
