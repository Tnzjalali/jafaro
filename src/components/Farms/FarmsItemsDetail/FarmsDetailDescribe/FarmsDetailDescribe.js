import React from "react";
import styled from "./FarmsDetailDescribe.css";
import FarmsLocation from "./FarmsLocation/FarmsLocation";
import ProfitBoxes from "./ProfitBoxes/ProfitBoxes";
import FarmsDescription from "./FarmsDescription/FarmsDescription";
import FarmsTitle from "./FarmsTitle/FarmsTitle";

const FarmsDetailDescribe = (props) => {
  return (
    <div className={styled.itemdescribe}>
      <FarmsTitle title={props.title} rate={props.rate} />
      <FarmsLocation ostan={props.ostan} shahrestan={props.shahrestan} />
      <ProfitBoxes
        averageAnnualInterest={props.averageAnnualInterest}
        soldItemsCount={props.soldItemsCount}
      />
      <FarmsDescription description={props.description} />
    </div>
  );
};

export default FarmsDetailDescribe;
