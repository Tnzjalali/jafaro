import React from "react";
import Aux from "../../../../hoc/Auxilary/Auxilary";
import styled from "./FarmsAgent.css";

const FarmsAgent = (props) => {
  return (
    <Aux>
      <img src={props.profilePicture} alt="farmer" className={styled.itemFarmerImage} />
      <div className={styled.itemFarmerdescription}>
        <span className={styled.itemFarmerdescriptionTitle}>
          مزرعه دار: {props.title}
        </span>
        <p className={styled.description}>{props.story}</p>
      </div>
    </Aux>
  );
};
export default FarmsAgent;
