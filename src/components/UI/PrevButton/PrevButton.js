import React from "react";
import styled from "./PrevButton.css";

const PrevButton = (props) => {
  return (
    <div className={styled.prevButton}>
      <svg
        {...props}
        width="24"
        height="58"
        viewBox="0 0 24 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9989 2L2.07031 29L21.9989 56"
          stroke="#393939"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default PrevButton;
