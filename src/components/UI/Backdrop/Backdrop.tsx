import React from 'react';
import classes from './Backdrop.css';

interface Backdrop {
  show: string | boolean | null;
  clicked: () => void;
}

const backdrop = (props: Backdrop) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
