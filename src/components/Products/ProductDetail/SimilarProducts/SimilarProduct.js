import React from "react";
import styled from "./SimilarProduct.css";
import Aux from "../../../../hoc/Auxilary/Auxilary";
import { Link } from "react-router-dom";
import ProductCard from "../../Product/ProductItem/ProductCard/ProductCard";
import ProductCardBtn from "../../Product/ProductItem/ProductCardBtn/ProductCardBtn";

const SimilarProduct = (props) => {
  const { image, title, price, id, productId } = props;
  const exploreLink = `/product/${id}/${productId}`;

  return (
    <Aux>
      <div className={styled.productItemCard}>
        <Link to={exploreLink}>
          <div className={styled.cardInfo}>
            <ProductCard image={image} title={title} price={price} />
          </div>
        </Link>
        <ProductCardBtn />
      </div>
    </Aux>
  );
};

export default SimilarProduct;
