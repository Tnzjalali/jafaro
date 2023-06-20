import React from "react";
import styled from "./Prev.css";

const Prev = () => {
  return (
    <div className={styled.prev}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5L10.8938 5.87062L7.40625 9.375H15V10.625H7.40625L10.8938 14.1081L10 15L5 10L10 5Z"
          fill="#676767"
        />
        <path
          d="M10 18.75C11.7306 18.75 13.4223 18.2368 14.8612 17.2754C16.3002 16.3139 17.4217 14.9473 18.0839 13.3485C18.7462 11.7496 18.9195 9.9903 18.5819 8.29296C18.2442 6.59563 17.4109 5.03653 16.1872 3.81282C14.9635 2.58911 13.4044 1.75575 11.707 1.41813C10.0097 1.08051 8.25037 1.25379 6.65152 1.91606C5.05266 2.57832 3.6861 3.69983 2.72464 5.13876C1.76317 6.57769 1.25 8.26942 1.25 10C1.25264 12.3198 2.17537 14.5439 3.81574 16.1843C5.45611 17.8246 7.68016 18.7474 10 18.75ZM10 2.5C11.4834 2.5 12.9334 2.93987 14.1668 3.76398C15.4001 4.58809 16.3614 5.75943 16.9291 7.12988C17.4967 8.50032 17.6453 10.0083 17.3559 11.4632C17.0665 12.918 16.3522 14.2544 15.3033 15.3033C14.2544 16.3522 12.918 17.0665 11.4632 17.3559C10.0083 17.6453 8.50032 17.4968 7.12987 16.9291C5.75943 16.3614 4.58809 15.4001 3.76398 14.1668C2.93986 12.9334 2.5 11.4834 2.5 10C2.50231 8.01159 3.29323 6.10528 4.69925 4.69926C6.10527 3.29324 8.01158 2.50232 10 2.5Z"
          fill="#676767"
        />
      </svg>
    </div>
  );
};

export default Prev;
