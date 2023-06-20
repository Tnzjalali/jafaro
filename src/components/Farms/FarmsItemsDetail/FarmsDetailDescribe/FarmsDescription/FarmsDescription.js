import React from "react";
import styled from "./FarmsDescription.css";

const FarmsDescription = (props) => {
  return <p className={styled.description}>{props.description}</p>;
};

export default FarmsDescription;
