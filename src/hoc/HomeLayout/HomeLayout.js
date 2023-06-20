import React, { Component } from "react";
import { connect } from "react-redux";

// import * as actions from "../../store/actions/index";
import styled from "./HomeLayout.css";
import Aux from "../Auxilary/Auxilary";
import HomeSideDrawer from "../../components/HomeToolBar/SideDrawer/HomeSideDrawer";
import HomeToolBar from "../../components/HomeToolBar/HomeToolBar";
class HomeLayout extends Component {
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
        <HomeToolBar
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <HomeSideDrawer
          MainLayout
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={styled.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default HomeLayout