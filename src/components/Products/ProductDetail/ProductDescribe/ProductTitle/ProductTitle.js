import React from "react";
import styled from "./ProductTitle.css";

const ProductTitle = (props) => {
  return <p className={styled.itemTitle}>{props.title}</p>;
};

export default ProductTitle;
