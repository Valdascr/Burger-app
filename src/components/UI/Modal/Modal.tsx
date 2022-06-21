import React, { Component } from 'react';
import classes from './Modal.css';
import Auxl from '../../../hoc/Auxl';
import Backdrop from '../Backdrop/Backdrop';

interface ModalProps {
  children?: any;
  show?: boolean | string;
  modalClosed?: any;
}

class Modal extends Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }
  render() {
    return (
      <Auxl>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Auxl>
    );
  }
}
export default Modal;
