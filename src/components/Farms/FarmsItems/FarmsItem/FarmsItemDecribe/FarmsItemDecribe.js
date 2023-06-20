import React from "react";
import { Link } from "react-router-dom";
import Aux from "../../../../../hoc/Auxilary/Auxilary";
import FarmsItemDescription from "./FarmsItemDescription/FarmsItemDescription";
import FarmsItemTitle from "./FarmsItemTitle/FarmsItemTitle";
import styled from "./FarmsItemDecribe.css";
import FarmsItemAgent from "./FarmsItemAgent/FarmsItemAgent";

const FarmsItemDecribe = (props) => {
  return (
    <Aux>
      <FarmsItemTitle rate={props.rate} title={props.title} />
      <FarmsItemAgent agent={props.agent} />

      <FarmsItemDescription description={props.description} />
      <div className={styled.farmsItemBtn}>
        <Link to={props.exploreLink}>
          <span>اطلاعات بیشتر</span>
        </Link>
      </div>
    </Aux>
  );
};

export default FarmsItemDecribe;
