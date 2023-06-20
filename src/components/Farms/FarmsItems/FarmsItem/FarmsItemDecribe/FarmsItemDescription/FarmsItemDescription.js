import React from "react";
import styled from "./FarmsItemDescription.css";

const FarmsItemDescription = (props) => {
  return <p className={styled.farmsItemDescription}>{props.description}</p>;
};

export default FarmsItemDescription;
