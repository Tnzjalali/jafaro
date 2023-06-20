import React from "react";
import styled from "./FavouriteFarm.css";
import Aux from "../../../hoc/Auxilary/Auxilary";
import { Link } from "react-router-dom";

const FavouriteFarm = (props) => {
  const { title, image, description, productions, id } = props;
  const exploreLink = `/farms/${id}`;
  return (
    <Aux>
      <div className={styled.FavouriteFarmCard}>
        <div className={styled.FavouriteFarmImage}>
          <img src={image} alt="مزرعه دانه" loading="lazy" />
        </div>
        <p className={styled.FavouriteFarmTitle}>{title}</p>
        <p className={styled.FavouriteFarmProducts}>محصولات : {productions}</p>
        <p className={styled.FavouriteFarmDescription}>{description} </p>
        <div className={styled.FavouriteFarmBtn}>
          <Link to={exploreLink}>
            <span>اطلاعات بیشتر</span>
          </Link>
        </div>
      </div>
    </Aux>
  );
};

export default FavouriteFarm;
