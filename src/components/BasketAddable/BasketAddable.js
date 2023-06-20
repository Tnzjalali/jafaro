import React from "react";
import styled from "./BasketAddable.css";
import Plus from "../../assets/icons/Plus.svg";

const BasketAddable = () => {
  return (
    <div className={styled.BasketAddableInner}>
      <img src={Plus} alt="Plus" />
      <p>افزودن محصول</p>
    </div>
  );
};

export default BasketAddable;
