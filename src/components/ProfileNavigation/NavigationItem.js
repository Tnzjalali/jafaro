import styled from "./NavigationItem.css";
import React from "react";
import { Link } from "react-router-dom";
import Aux from "../../hoc/Auxilary/Auxilary";
const navigationItems = (props) => {
  let routes = (
    <Aux>
      <Link to="/" data-aos="fade-down" data-aos-delay="100">
        <p> خانه </p>
      </Link>
      <span data-aos="fade-down" data-aos-delay="100"></span>
      <Link to="/products" data-aos="fade-down" data-aos-delay="150">
        <p> بسته های شراکت </p>
      </Link>
      <span data-aos="fade-down" data-aos-delay="250"></span>
      <Link to="/aboutus" data-aos="fade-down" data-aos-delay="300">
        <p> داستان ما</p>
      </Link>
      <span data-aos="fade-down" data-aos-delay="300"></span>

      <Link to="/contact" data-aos="fade-down" data-aos-delay="350">
        <p> منتظر تماس شما هستیم</p>
      </Link>
    </Aux>
  );
  if (props.isAuthenticated) {
    routes = (
      <Aux>
        <Link to="/" data-aos="fade-down" data-aos-delay="100">
          <p> خانه </p>
        </Link>
        <span data-aos="fade-down" data-aos-delay="100"></span>
        <Link to="/" data-aos="fade-down" data-aos-delay="150">
          <p> سبد دارایی</p>
        </Link>
        <span data-aos="fade-down" data-aos-delay="150"></span>
        <Link to="/" data-aos="fade-down" data-aos-delay="200">
          <p> گزارش ها </p>
        </Link>
        <span data-aos="fade-down" data-aos-delay="200"></span>
        <Link to="/products" data-aos="fade-down" data-aos-delay="250">
          <p> بسته های شراکت </p>
        </Link>
        <span data-aos="fade-down" data-aos-delay="250"></span>
        <Link to="/farms" data-aos="fade-down" data-aos-delay="300">
          <p> مزرعه ها </p>
        </Link>
        <span data-aos="fade-down" data-aos-delay="300"></span>
        <Link to="/aboutus" data-aos="fade-down" data-aos-delay="350">
          <p> داستان ما</p>
        </Link>
        <span data-aos="fade-down" data-aos-delay="350"></span>
        <Link to="/contact" data-aos="fade-down" data-aos-delay="400">
          <p> منتظر تماس شما هستیم</p>
        </Link>
      </Aux>
    );
  }
  return <div className={styled.navigationItems}>{routes}</div>;
};

export default navigationItems;
