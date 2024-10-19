import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
function AddItemModal({ onClose, onAddItem, isOpen }) {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [link, setLink] = useState("");

  const handleUrlChange = (e) => {
    setLink(e.target.value);
  };

  const [weatherType, setWeatherType] = useState("");
  const handleRadioBtnCheck = (e) => {
    setWeatherType(e.target.id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, weatherType });
  };
  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      orText=""
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
          required
        />
      </label>
      <label htmlFor="imageURL" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageURL"
          name="link"
          placeholder="Image URL"
          onChange={handleUrlChange}
          value={link}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons" onChange={handleRadioBtnCheck}>
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          className={`modal__label modal__label_type_radio ${
            weatherType === "hot" && "modal__label_type_radio-selected"
          }`}
        >
          <input
            type="radio"
            className="modal__radio-input"
            name="radio-btn"
            id="hot"
            required
          />
          Hot
        </label>
        <label
          htmlFor="warm"
          className={`modal__label modal__label_type_radio ${
            weatherType === "warm" && "modal__label_type_radio-selected"
          }`}
        >
          <input
            type="radio"
            className="modal__radio-input"
            name="radio-btn"
            id="warm"
          />
          Warm
        </label>
        <label
          htmlFor="cold"
          className={`modal__label modal__label_type_radio ${
            weatherType === "cold" && "modal__label_type_radio-selected"
          }`}
        >
          <input
            type="radio"
            className="modal__radio-input"
            name="radio-btn"
            id="cold"
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
