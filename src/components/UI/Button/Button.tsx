import React, { MouseEventHandler } from 'react';
import classes from './Button.css';

interface Button {
  clicked?: MouseEventHandler;
  disabled?: boolean;
  btnType: string;
  children: string;
}

// console.log(typeof props.clicked);

const button = (props: Button) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
