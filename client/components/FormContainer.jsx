import React, { Component, Fragment } from "react";

import { Modal } from "./Modal";
import TriggerButton from "./TriggerButton";

export class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
  }

  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
      this.toggleScrollLock();
    });
  };

  toggleScrollLock = () => {
    document.querySelector("html").classList.toggle("scroll-lock");
  };

  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };

  onKeyDown = event => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  onClickOutside = event => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  render() {
    return (
      <Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={n => (this.TriggerButton = n)}
          triggerText={this.props.triggerText}
        />
        {this.state.isShown ? (
          <Modal
            onSubmit={this.props.onSubmit}
            modalRef={n => (this.modal = n)}
            buttonRef={n => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
      </Fragment>
    );
  }
}
export default FormContainer;
