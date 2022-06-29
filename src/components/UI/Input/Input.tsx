import React from 'react';

import classes from './Input.css';

const input = (props: any) => {
  let inputElement = null;

  switch (props.inputtype) {
    case 'input':
      inputElement = <input className={classes.inputElement} {...props} />;
      break;
    case 'textarea':
      inputElement = <textarea className={classes.inputElement} {...props} />;
      break;
    default:
      inputElement = <input className={classes.inputElement} {...props} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Lebel}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
