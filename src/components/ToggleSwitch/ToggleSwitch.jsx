import { useContext, useState } from "react";
import React from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  //   const [currentTemperatureUnit, handleToggleSwitchChange] = useState("C");
  //   const handleChange = (e) => {
  //     if (currentTemperatureUnit === "C") handleToggleSwitchChange("F");
  //     if (currentTemperatureUnit === "F") handleToggleSwitchChange("C");
  //   };
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "toggle-switch__slider toggle-switch__slider-F"
            : "toggle-switch__slider toggle-switch__slider-C"
        }
      ></span>
      <p
        className={`toggle-switch__temp-F ${
          currentTemperatureUnit === "F" && "toggle-switch__active"
        }`}
      >
        {currentTemperatureUnit === "F" && "F"}
      </p>
      <p
        className={`toggle-switch__temp-C ${
          currentTemperatureUnit === "C" && "toggle-switch__active"
        }`}
      >
        {currentTemperatureUnit === "C" && "C"}
      </p>
    </label>
  );
};

export default ToggleSwitch;
