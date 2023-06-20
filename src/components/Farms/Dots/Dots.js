import React from "react";
import classnames from "classnames";
import styled from "./Dots.css";

const Dots = (props) => {
  return (
    <ul className={styled.dotList}>
      {Array.from(Array(props.items).keys()).map((dot) => (
        <li
          key={dot}
          className={classnames(styled.dot, {
            [styled.active]: props.active === dot,
          })}  
          onClick={() => props.onClick(dot)}
        />
      ))}
    </ul>
  );
};

export default Dots;
