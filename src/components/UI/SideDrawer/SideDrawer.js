import React from "react";
import { Link } from "react-router-dom";
import Backdrop from "../BackDrop/Backdrop";
import styled from "./SideDrawer.css";
import Aux from "../../../hoc/Auxilary/Auxilary";
import CloseIcon from "../../../assets/icons/Close.svg";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import NavigationItems from "../../ProfileNavigation/NavigationItem";
import Socialmedia from "../../SocialMediaIcons/SocialMedia";
import SearchBox from "../SearchBox/SearchBox";

const SideDrawer = (props) => {
  let attachedClasses = [styled.SideDrawer, styled.Close];
  if (props.open) {
    attachedClasses = [styled.SideDrawer, styled.Open];
  }
  let profile = (
    <Aux>
      <ProfileIcon />
      <Link to="/auth" className={styled.profileWrapper}>
        <p>ورود و ثبت نام</p>
      </Link>
    </Aux>
  );
  if (props.isAuthenticated) {
    profile = (
      <Aux>
        <ProfileIcon />

        <Link to="/profile" className={styled.profileWrapper}>
          <p>پروفایل کاربری</p>
        </Link>
      </Aux>
    );
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <img src={CloseIcon} alt="x" onClick={props.closed} />
        <div className={styled.sideDrawerIcon}>{profile}</div>
        <SearchBox />
        <nav>
          <NavigationItems isAuthenticated={props.isAuthenticated} />
          <div className={styled.sideDrawerSocial}>
            <Socialmedia />
          </div>
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
