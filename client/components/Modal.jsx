import React from "react";
import ReactDOM from "react-dom";

import EditForm from "./EditForm";

import FocusTrap from "focus-trap-react";

export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit,
  ...todo
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <div className="modal is-active">
        <div
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          className="modal-background"
          onClick={onClickOutside}
          onKeyDown={onKeyDown}
        >
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Edit Todo</p>
              <button
                ref={buttonRef}
                aria-label="close"
                className="modal-close is-large"
                onClick={closeModal}
              />
            </header>
          </div>
          <div className="modal-content" ref={modalRef}>
            <section className="modal-card-body">
              <EditForm {...todo} />
            </section>
            <footer className="modal-card-foot">
              <button className="button is-rounded" onClick={closeModal}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
