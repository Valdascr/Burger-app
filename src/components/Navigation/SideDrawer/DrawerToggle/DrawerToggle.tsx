import React from 'react';
import classes from './DrawerToggle.css';

interface DrawerToggle {
  clicked: () => void;
  // onClick: (event: React.MouseEvent<HTMLElement>);
}

const drawerToggle = (props: DrawerToggle) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
