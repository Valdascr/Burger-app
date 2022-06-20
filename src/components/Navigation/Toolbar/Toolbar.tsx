import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

interface Toolbar {
  Toolbar: any;
}

const toolbar = (props: Toolbar) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </header>
);

export default toolbar;
