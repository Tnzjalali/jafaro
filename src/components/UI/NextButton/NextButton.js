import React from "react";
import styled from "./NextButton.css";

const NextButton = (props) => {
  return (
    <div className={styled.nextButton}>
      <svg
        {...props}
        width="24"
        height="58"
        viewBox="0 0 24 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.00112 2L21.9297 29L2.00112 56"
          stroke="#393939"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default NextButton;