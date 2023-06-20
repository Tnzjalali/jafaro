import React from "react";
import StarRating from "../../../../UI/StarRating/StarRating";
import styled from "./FarmsTitle.css";

const FarmsTitle = (props) => {
  const handleRating = (rating) => {
    console.info("[App.handleRating] rating=" + rating);
  };
  return (
    <div className={styled.itemTitleContainer}>
      <p className={styled.itemTitle}>{props.title}</p>
      <div className={styled.rate}>
        <StarRating onRate={handleRating} rating={props.rate} mode="read" />
        <div className={styled.rateText}>
          <span>{props.rate} نظر</span>
        </div>
      </div>
    </div>
  );
};

export default FarmsTitle;
