import React from 'react';
import classes from './Backdrop.css';

interface Backdrop {
  show: any | null;
  clicked: any;
}

const backdrop = (props: Backdrop) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
