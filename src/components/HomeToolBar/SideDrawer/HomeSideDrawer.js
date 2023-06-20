import React from "react";
import Backdrop from "../../UI/BackDrop/Backdrop";
import styled from "./HomeSideDrawer.css";
import Aux from "../../../hoc/Auxilary/Auxilary";
import CloseIcon from "../../../assets/icons/Close.svg";
import ProfileIcon from "../../UI/ProfileIcon/ProfileIcon";
import { Link } from "react-router-dom";
import HomenavigationItems from "../HomeNavigationItem";
import Socialmedia from "../../SocialMediaIcons/SocialMedia";
import SearchBox from "../../UI/SearchBox/SearchBox";

const SideDrawer = (props) => {
  let attachedClasses = [styled.SideDrawer, styled.Close];
  if (props.open) {
    attachedClasses = [styled.SideDrawer, styled.Open];
  }
  let profile = (
    <Link to="/auth" className={styled.profileWrapper}>
      <ProfileIcon />
      <div>
        <p>ورود و ثبت نام</p>
      </div>
    </Link>
  );
  if (props.isAuthenticated) {
    profile = (
      <Link to="/profile" className={styled.profileWrapper}>
        <ProfileIcon />
        <div>
          <p>ویرایش پروفایل کاربری</p>
        </div>
      </Link>
    );
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} MainLayout />
      <div className={attachedClasses.join(" ")}>
        <div className={styled.sideDrawerHead}>
          <div className={styled.sideDrawerClose}>
            <img src={CloseIcon} alt="x" onClick={props.closed} />
          </div>
        </div>
        <SearchBox />
        <nav>
          <HomenavigationItems isAuthenticated={props.isAuthenticated} />
          
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
