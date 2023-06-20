import React from "react";
import styled from "./Spinner.css";
const Spinner = () => {
  return (
    <div className={styled.LoaderWraper}>
      <div className={styled.Loader}></div>
    </div>
  );
};

export default Spinner;
