import React, { MouseEventHandler } from 'react';
import classes from './Button.css';

interface Button {
  clicked?: MouseEventHandler;
  btnType: string;
  children: string;
}

// console.log( typeof props.clicked);

const button = (props: Button) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
