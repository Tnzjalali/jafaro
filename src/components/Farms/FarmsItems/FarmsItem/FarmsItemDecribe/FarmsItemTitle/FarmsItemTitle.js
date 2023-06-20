import React from "react";
import StarRating from "../../../../../UI/StarRating/StarRating";
import styled from "./FarmsItemTitle.css";

const FarmsItemTitle = (props) => {
  const handleRating = (rating) => {
    console.info("[App.handleRating] rating=" + rating);
  };
  return (
    <div className={styled.cardInfoHead}>
      <div className={styled.farmsItemTitle}>
        <p>{props.title}</p>
      </div>
      <StarRating onRate={handleRating} rating={props.rate} mode="read" />
    </div>
  );
};

export default FarmsItemTitle;
