import React from 'react';
import Auxl from '../../hoc/Auxl';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props: any) => (
  <Auxl>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Auxl>
);

export default layout;
