import React from "react";
import styles from "./LogoLogoTypes.css";
import images1 from "../../../assets/images/IMG_4141.PNG";
const logo = (props) => (
  <div className={styles.mainLogo}>
    <img src={images1} alt="" style={{height:"200px", width:"200px"}}/>
  </div>
);

export default logo;
