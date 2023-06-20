import React from "react";
import styled from "./FarmDetailImage.css";
import images1 from "../../../../assets/images/pexels-pixabay-2359251.jpg";

const FarmdetailImage = () => {
  return (
    <div className={styled.itemImage}>
      <div className={styled.mainImage}>
        <img src={images1} alt="image1" />
      </div>
      <div className={styled.otherImages}>
        <img src={images1} alt="farms" loading="lazy" />
        <img src={images1} alt="farms" loading="lazy" />
        <img src={images1} alt="farms" loading="lazy" />
      </div>
    </div>
  );
};

export default FarmdetailImage;
