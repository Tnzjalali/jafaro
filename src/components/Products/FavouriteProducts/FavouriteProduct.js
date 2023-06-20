import React from "react";
import styled from "./FavouriteProduct.css";
import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductItem/ProductCard/ProductCard";
import ProductCardBtn from "../Product/ProductItem/ProductCardBtn/ProductCardBtn";
import { useHistory } from "react-router-dom";


const FavouriteTree = (props) => {
  const { image, title, price, id, productId } = props;
  const exploreLink = `/product/${id}/${productId}`;
  let history = useHistory();
  const addToBasket = () => {
    console.log('here')
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
    <div className={styled.productItemCard}>
      <Link to={exploreLink}>
        <div className={styled.cardInfo}>
          <ProductCard image={image} title={title} price={price} />
        </div>
      </Link>
      <ProductCardBtn onClick={addToBasket}/>
    </div>
  );
};

export default FavouriteTree;
