import React from "react";
import styled from "./ProducingProduct.css";

const ProducingProduct = () => {
  return (
    <div className={styled.producingProduct}>
      <div className={styled.producingProductImg}></div>
      <div className={styled.producingProductDescribe}>
        <div className={styled.producingProductTitle}>
          <p>تولید محصول</p>
        </div>
        <div className={styled.producingProductTxt}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProducingProduct;
