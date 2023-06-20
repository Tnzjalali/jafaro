import React from "react";

import styled from "./Backdrop.css";

const Backdrop = (props) =>
  props.show ? (
    <div className={styled.Backdrop} onClick={props.clicked} style={{background:props.MainLayout ? "transparent":"rgba(251, 251, 251, 0.62)"}}></div>
  ) : null;

export default Backdrop;
