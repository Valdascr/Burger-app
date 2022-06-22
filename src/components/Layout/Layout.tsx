import React, { Component } from 'react';
import Auxl from '../../hoc/Auxl';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

interface PropsObject {
  children?: JSX.Element | JSX.Element[];
}

interface LayoutProps {
  showSideDrawer: boolean;
}
// showSideDrawer: (val: boolean | string) => void;
// sideDrawerToggleHandler: () => void;
// sideDrawerClosedHandler: () => void;

class Layout extends React.Component<PropsObject, LayoutProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState: any) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Auxl>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxl>
    );
  }
}

export default Layout;
