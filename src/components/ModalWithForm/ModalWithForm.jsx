import "./ModalWithForm.css";
function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  orText,
  onClickOr,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__footer">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            <button
              type="button"
              onClick={onClickOr}
              className="modal__or-button"
            >
              {orText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
