import React from "react";
import styled from "./Footer.css";
import { Link } from "react-router-dom";
import MainLogo from "../UI/Logo/LogoLogoTypes";
import SocialMedia from "../../components/SocialMediaIcons/SocialMedia";

const Footer = () => {
  return (
    <footer className={styled.footer}>
      <MainLogo />
      <SocialMedia />
      <nav className={styled.footerNav}>
        <div className={styled.navigationItems}>
          <Link to="/">
            <p>صفحه اصلی</p>
          </Link>
          <span> |</span>
          <Link to="/products">
            <p> محصولات</p>
          </Link>
          <span>| </span>
          <Link to="/aboutus">
            <p>معرفی جافارو</p>
          </Link>
          <span>| </span>
          <Link to="/contact">
            <p> تماس با ما</p>
          </Link>
        </div>
      </nav>
      <div className={styled.bottomBar}></div>
    </footer>
  );
};

export default Footer;
