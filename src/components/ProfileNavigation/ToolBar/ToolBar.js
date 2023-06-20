import React, { useState } from "react";
import styled from "./ToolBar.css";
import NavigationItems from "../NavigationItem";
import DrawerToggle from "../../UI/SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../../components/UI/Logo/Logo";
import Basket from "../../UI/Basket/Basket";
import Like from "../../UI/Like/Like";
import ProfileIcon from "../../UI/ProfileIcon/ProfileIcon";
import SearchLogo from "../../UI/SearchLogo/SerachLogo";

import Productlike from "../../Products/ProductDetail/ProductDescribe/ProductLike/ProductLike"
const Toolbar = (props) => {
  const [like, setLike] = useState({
    isActive: false,
  });
  const likeHandler = () => {
    const isLiked = like.isActive;
    setLike({ isActive: !isLiked });
  };

return(
  <header className={styled.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={styled.headerItem}>
      <div className={styled.profileStartIcon}>
        <div className={styled.ProfileIconLarge}>
          <ProfileIcon />
        </div>
        <SearchLogo />
      </div>
      <Logo logoStyle={styled.userProfileLogo} />
      <div className={styled.profileEndIcon}>
        <Productlike
          onClickLike={likeHandler}
          isActive={like.isActive}
          activeClass={like.isActive ? "active" : null}
        />
        <Basket />
      </div>
    </div>

    <nav className={styled.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuthenticated} />
    </nav>
  </header>
);
};

export default Toolbar;
