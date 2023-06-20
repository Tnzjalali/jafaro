import React from "react";
import styled from "./FarmersRequest.css";

const FarmersRequest = () => {
  return (
    <div className={styled.farmersRequest}>
      <div className={styled.farmersRequestDescribe}>
        <div className={styled.farmersRequestTitle}>
          <p>تایید مزرعه</p>
        </div>
        <div className={styled.farmersRequestTxt}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
      <div className={styled.farmersRequestImg}></div>
    </div>
  );
};

export default FarmersRequest;
