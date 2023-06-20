import React, { useState } from "react";
import StarRating from "../../../UI/StarRating/StarRating";
import styled from "./ProductDescribe.css";
import Productlike from "./ProductLike/ProductLike";
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductLocation from "./ProductLocation/ProductLocation";
import ProductStatus from "./ProductStatus/ProductStatus";
import ProductReturn from "./ProductReturn/ProductReturn";
import ProductBtn from "../ProductBtn/ProductBtn";
import { useHistory } from "react-router-dom";


const ProductDescribe = (props) => {
  const { rate, price, title, ostan, status, shahrestan, investmentTimespan, id, productId, image } =
    props;
  const [like, setLike] = useState({
    isActive: false,
  });
  const handleRating = (rating) => {
    console.info("[App.handleRating] rating=" + rating);
  };
  const likeHandler = () => {
    const isLiked = like.isActive;
    setLike({ isActive: !isLiked });
  };
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
    <div className={styled.itemdescribe}>
      <div className={styled.itemTitleContainer}>
        <ProductTitle title={title} />
        <Productlike
          onClickLike={likeHandler}
          isActive={like.isActive}
          activeClass={like.isActive ? "active" : null}
        />
      </div>

      <div className={styled.itemPrice}>
        <ProductPrice price={price} />
        <div className={styled.rate}>
          <StarRating onRate={handleRating} rating={rate} mode="read" />
          <div className={styled.rateText}>
            <span>{rate} نظر</span>
          </div>
        </div>
      </div>
      <ProductLocation  shahrestan={shahrestan} />
      <ProductStatus status={status} />

      <ProductReturn investmentTimespan={investmentTimespan} />
      <ProductBtn onClick={addToBasket} />
    </div>
  );
};

export default ProductDescribe;
