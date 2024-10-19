import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ onClose, isOpen }) {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [link, setLink] = useState("");
  const handleUrlChange = (e) => {
    setLink(e.target.value);
  };

  const handleClickOr = (e) => {
    e.preventDefault();
    console.log(e);
    ///TODO
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    ///TODO
  };

  return (
    <ModalWithForm
      buttonText="Sign Up"
      title="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      orText="or Log in"
      onClickOr={handleClickOr}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name *
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
        Avatar URL *
        <input
          type="url"
          className="modal__input"
          id="imageURL"
          name="link"
          placeholder="Avatar URL"
          onChange={handleUrlChange}
          value={link}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
