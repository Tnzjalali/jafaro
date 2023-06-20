import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../assets/images/IMG_4141.PNG";

const logo = (props) => (
  <div className={props.logoStyle} data-aos="fade-down">
    <Link to="/">
      <img src={mainLogo} alt="MyFarm" width="100%" height="100%" style={{height:"200px", width:"200px"}}/>
    </Link>
  </div>
);

export default logo;
