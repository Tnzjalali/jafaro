import React from "react";
import Aux from "../../hoc/Auxilary/Auxilary";
import Scroller from "../Scroller/Scroller";
import styled from "./HomeToolBar.css";
import HomeDrawerToggle from "./SideDrawer/DrawerToggle/HomeDrawerToggle";

const HomeToolBar = (props) => (
  <Aux>
    <div className={styled.ToolbarContainer}>
      <div className={styled.Toolbar}>
        <HomeDrawerToggle clicked={props.drawerToggleClicked} />
      </div>
    </div>

    <div className={styled.ToolbarSmall}>
      <HomeDrawerToggle clicked={props.drawerToggleClicked} />
    </div>
  </Aux>
);

export default HomeToolBar;
