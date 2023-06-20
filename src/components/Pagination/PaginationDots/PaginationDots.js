import React from "react";
import styled from "./PaginationDots.css";

const PaginationDots = (props) => {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      className={[styled.dot, styled[props.active]].join(" ")}
    />
  );
};

export default PaginationDots;
