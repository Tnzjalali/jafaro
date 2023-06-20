import React from "react";
import Aux from "../../hoc/Auxilary/Auxilary";
import ImageSlider from "../Carousel/ImageSlider/ImageSlider";
import styled from "./OurTeam.css";



const OurTeam = (props) => {
  return (
    <Aux>
        <div className={styled.ourTeamTitleContainer}>
          <p className={styled.ourTeamTitle}>تیم جافارو</p>
        </div>
    </Aux>
  );
};

export default OurTeam;
