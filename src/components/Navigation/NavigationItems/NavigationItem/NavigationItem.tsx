import React from 'react';
import classes from './NavigationItem.css';

interface NavigationItem {
  link: string;
  active: boolean;
  children: string;
}

const navigationItem = (props: NavigationItem) => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
