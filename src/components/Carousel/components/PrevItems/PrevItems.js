import React from "react";
import styled from "./PrevItems.css";
import Prev from "../../../UI/Prev/Prev";

const PrevItems = (props) => {
  return (
    <button
        className={styled.prevItems}
        onClick={props.onClick}
        disabled={props.disabled}
    >
      <span>قبلی</span>
      <Prev />
    </button>
  );
};

export default PrevItems;
