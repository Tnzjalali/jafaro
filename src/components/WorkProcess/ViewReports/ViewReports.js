import React from 'react';
import styled from "./ViewReports.css";

const Viewreports = () => {
   return (
      <div className={styled.ViewReports}>
      <div className={styled.ViewReportsImg}></div>
      <div className={styled.ViewReportsDescribe}>
        <div className={styled.ViewReportsTitle}>
          <p>فروش محصولات</p>
        </div>
        <div className={styled.ViewReportsTxt}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
    </div>
   );
}

export default Viewreports;
