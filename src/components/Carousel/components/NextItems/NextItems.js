import React from "react";
import Next from "../../../UI/Next/Next";
import styled from "./NextItems.css";

const NextItems = (props) => {
  return (
    <button
      className={styled.nextItems}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <Next />
      <span>بعدی</span>
    </button>
  );
};

export default NextItems;
