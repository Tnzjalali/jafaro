import React from "react";
import { Link } from "react-router-dom";
import faceBookGreen from "../../assets/icons/Facebook(Green).svg";
import instagramGreen from "../../assets/icons/Instagram(Green).svg";
import telegramGreen from "../../assets/icons/Telegram(Green).svg";
import styled from "./SocialMediaGreen.css";
const Socialmediagreen = () => {
  return (
    <div className={styled.socialMediaIcons}>
      <Link
        to="facebook"
        className={styled.socialMediaIcon}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <img src={faceBookGreen} alt="facebook" loading="lazy" />
      </Link>
      <Link
        to="telegram"
        className={styled.socialMediaIcon}
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <img src={telegramGreen} alt="telegram" loading="lazy" />
      </Link>
      <Link
        to="instagram"
        className={styled.socialMediaIcon}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={instagramGreen} alt="instagram" loading="lazy" />
      </Link>
    </div>
  );
};
export default Socialmediagreen;
