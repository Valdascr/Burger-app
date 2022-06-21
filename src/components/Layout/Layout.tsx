import React, { Component } from 'react';
import Auxl from '../../hoc/Auxl';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

// interface Props {}

interface LayoutProps {
  children: string | number;
  showSideDrawer: boolean | string;
  // showSideDrawer: (val: boolean | string) => void;
  // sideDrawerClosedHandler: () => void;
  // sideDrawerToggleHandler: () => void;
}

// interface SideDrawerToggleHandler {
//   showSideDrawer: (val: boolean | string) => void;
// }

class Layout extends React.Component<LayoutProps> {
  constructor(props: LayoutProps) {
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
