import React from "react";
import styled from "./Avatar.css";

const Edit = (props) => {
  return <div className={styled.card}>{props.children}</div>;
};
export default Edit;
