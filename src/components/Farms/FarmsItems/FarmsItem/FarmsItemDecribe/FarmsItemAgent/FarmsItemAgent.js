import React from "react";
import styled from "./FarmsItemAgent.css";

const FarmsItemAgent = (props) => {
  return <p className={styled.farmsItemagent}>مزرعه دار: {props.agent}</p>;
};

export default FarmsItemAgent;
