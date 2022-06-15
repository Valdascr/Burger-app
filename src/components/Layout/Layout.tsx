import React from 'react';
import Auxl from '../../hoc/Auxl';
import classes from './Layout.css';

const layout = (props: any) => (
  <Auxl>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxl>
);

export default layout;
