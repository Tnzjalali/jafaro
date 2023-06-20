import React from "react";
import Aux from "../../../../../hoc/Auxilary/Auxilary";
import styled from "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <Aux>
      <div className={styled.productItemImage}>
        <img src={props.image} alt={props.title} loading="lazy" />
      </div>

      <div className={styled.productItemTitle}>
        <p>{props.title}</p>
      </div>
      <div className={styled.productItemPrice}>
        <p>{props.price} تومان</p>
      </div>
    </Aux>
  );
};

export default ProductCard;
