import React from "react";
import styled from "./FarmConfirmation.css";

const FarmConfirmation = () => {
  return (
    <div className={styled.farmConfirmation}>
        <div className={styled.farmConfirmationImg}></div>
      <div className={styled.farmConfirmationDescribe}>
        <div className={styled.farmConfirmationTitle}>
          <p>درخواست مزرعه دار</p>
        </div>
        <div className={styled.farmConfirmationTxt}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmConfirmation;
