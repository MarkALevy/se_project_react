import React, { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function EditProfileModal({ onClose, isOpen, onProfileUpdate }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [link, setLink] = useState(currentUser.avatar);
  const handleUrlChange = (e) => {
    setLink(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate({ name, link });
    //TODO
  };
  return (
    <ModalWithForm
      buttonText="Save changes"
      title="Change profile data"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      orText=""
      orBtnIsDisabled={true}
    >
      <label htmlFor="name" className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder={currentUser.name}
          onChange={handleNameChange}
          value={name}
          required
        />
      </label>
      <label htmlFor="imageURL" className="modal__label">
        Avatar *
        <input
          type="url"
          className="modal__input"
          id="imageURL"
          name="link"
          placeholder={currentUser.avatar}
          onChange={handleUrlChange}
          value={link}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
