import React from "react";
import styled from "./SellProduct.css";

const SellProduct = () => {
  return (
    <div className={styled.sellProduct}>
      <div className={styled.sellProductDescribe}>
        <div className={styled.sellProductTitle}>
           <p>نمایش گزارشات</p>
        </div>
        <div className={styled.sellProductTxt}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>

      <div className={styled.sellProductImg}></div>
    </div>
  );
};

export default SellProduct;
