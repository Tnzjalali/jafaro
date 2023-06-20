import React from "react";
import styled from "./ProductionParticipation.css";
const ProductionParticipation = () => {
  return (
    <div className={styled.productionParticipation}>
      <div className={styled.productionParticipationDescribe}>
        <div className={styled.productionParticipationTitle}>
          <p>مشارکت در تولید</p>
        </div>
        <div className={styled.productionParticipationTxt}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>

      <div className={styled.productionParticipationImg}></div>
    </div>
  );
};

export default ProductionParticipation;
