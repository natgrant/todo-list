import React from "react";

const Trigger = ({ buttonRef, showModal }) => {
  return (
    <button
      className="button is-large is-rounded center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      <i className="fas fa-plus" />
    </button>
  );
};
export default Trigger;
