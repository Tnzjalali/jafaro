import React from "react";
import styled from "./RelatedFarmProduct.css";
import Aux from "../../../hoc/Auxilary/Auxilary";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProductCard from "../../Products/Product/ProductItem/ProductCard/ProductCard";
import ProductCardBtn from "../../Products/Product/ProductItem/ProductCardBtn/ProductCardBtn";

const RelatedFarmProduct = (props) => {
  const { image, title, price, id, productId } = props;
  const exploreLink = `/product/${id}/${productId}`;

  let history = useHistory();
  const addToBasket = () => {
    const getfromlocal = JSON.parse(localStorage.getItem("basket"));
    if (getfromlocal === null || getfromlocal !== undefined) {
      localStorage.setItem(
        "basket",
        JSON.stringify({ title: title, price: price, id: id, productId })
      );
      history.push("/cart");
    }else{
      localStorage.removeItem("basket");
      localStorage.setItem(
        "basket",
        JSON.stringify({ title: title, price: price, id: id, productId })
      );
      history.push("/cart");
    }
  };
  return (
    <Aux>
      <div className={styled.productItemCard}>
        <Link to={exploreLink}>
          <div className={styled.cardInfo}>
            <ProductCard image={image} title={title} price={price} />
          </div>
        </Link>
        <ProductCardBtn onClick={addToBasket} />
      </div>
    </Aux>
  );
};

export default RelatedFarmProduct;
