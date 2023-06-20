import React from "react";
import styled from "./ProductImage.css";

const ProductImage = (props) => {
  return (
    <div className={styled.itemImage}>
      <div className={styled.mainImage}>
        <img src={props.image} alt="image1" loading="lazy" />
        {/* <div className={styled.textOverImage}>
          <p className={styled.productTypeTitle}>{props.title}</p>
        </div> */}
      </div>
      <div className={styled.otherImages}></div>
    </div>
  );
};

export default ProductImage;
