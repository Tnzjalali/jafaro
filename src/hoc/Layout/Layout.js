import React, { Component } from "react";
import { connect } from "react-redux";

// import * as actions from "../../store/actions/index";
import styled from "./Layout.css";
import Aux from "../Auxilary/Auxilary";
import ToolBar from "../../components/ProfileNavigation/ToolBar/ToolBar";
import SideDrawer from "../../components/UI/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <ToolBar
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={styled.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
