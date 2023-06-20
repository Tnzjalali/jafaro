import React from "react";

import styled from "./DrawerToggle.css";

const drawerToggle = (props) => (
  <div className={styled.DrawerToggle} onClick={props.clicked}>
    <div className={styled.DrawerToggleLarge}></div>
    <div className={styled.DrawerToggleSmall}></div>
    <div className={styled.DrawerToggleLarge}></div>
  </div>
);

export default drawerToggle;
