import React from 'react';
import classes from './Modal.css';
import Auxl from '../../../hoc/Auxl';
import Backdrop from '../Backdrop/Backdrop';

interface Modal {
  children?: any;
  show?: boolean | any;
  modalClosed: any;
}

const modal = (props: Modal) => (
  <Auxl>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </Auxl>
);
export default modal;
