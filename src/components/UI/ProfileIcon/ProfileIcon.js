import React from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Profileicon from "../../../assets/icons/User_Icon.svg";
import styled from "./ProfileLogo.css";
import { Link } from "react-router-dom";

const ProfileIcon = () => {
  return (
    <Aux>
      <div className={styled.profileLogo}>
      <Link to="/profile">
        <img src={Profileicon} alt="Profile" />
        </Link>
      </div>
    </Aux>
  );
};
export default ProfileIcon;
