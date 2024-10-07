import { useContext, useState } from "react";
import React from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
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
        F
      </p>
      <p
        className={`toggle-switch__temp-C ${
          currentTemperatureUnit === "C" && "toggle-switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
