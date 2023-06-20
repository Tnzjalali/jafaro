import React from "react";
import styled from "./FarmsItemImage.css";

import images1 from "../../../../../assets/images/pexels-pixabay-2359251.jpg";

const FarmsitemImage = (props) => {
  return (
    <div className={styled.farmsItemImage}>
      <img src={images1} alt={props.id} loading="lazy" />
    </div>
  );
};

export default FarmsitemImage;
