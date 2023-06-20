import React from "react";
import styled from "./Home.css";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/UI/Logo/Logo";
import Like from "../../components/UI/Like/Like";
import Basket from "../../components/UI/Basket/Basket";
import HomeLayout from "../../hoc/HomeLayout/HomeLayout";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import OurStory from "../../components/OurStory/OurStory";
import OurTeam from "../../components/OurTeam/OurTeam";
import MainInfo from "../../components/MainInfo/MainInfo";
import Aux from "../../hoc/Auxilary/Auxilary";
import FavouriteAnimals from "../../components/Farms/RelatedFarmProducts/RelatedFarmProducts";

const Main = () => {
  return (
    <Aux>
      <HomeLayout>
        <div className={styled.topBannerContainer}>
          <div className={styled.topBanner}>
            <div className={styled.mainHeader}>
              <Logo logoStyle={styled.mainLogo} />
            </div>
            {/* <div className={styled.bannerTitle} data-aos="zoom-in-up" /> */}
          </div>
          <div data-aos="fade-up" id="ourstory">
            <OurStory />
          </div>
          <div data-aos="fade-down" id="animals">
            <FavouriteAnimals />
          </div>
          <Footer />
        </div>
      </HomeLayout>
    </Aux>
  );
};
export default Main;
