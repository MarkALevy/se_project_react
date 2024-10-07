import "./ConfirmationModal.css";
function ConfirmationModal({ card, onClose, isOpen, handleCardDelete }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCardDelete(card);
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_confirmation">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <h2 className="modal__caption">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </h2>
        <form
          className="modal__form"
          id="delete-form"
          name="delete-form"
          onSubmit={handleSubmit}
        >
          <button
            type="submit"
            id="confirm-delete"
            className="modal__confirm"
            aria-label="confirm delete"
          >
            Yes, delete item
          </button>
          <button
            type="button"
            id="cancel"
            className="modal__cancel"
            aria-label="Cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConfirmationModal;
