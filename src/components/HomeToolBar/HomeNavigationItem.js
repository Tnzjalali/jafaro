import styled from "./HomeNavigationItem.css";
import React from "react";
import { Link } from "react-router-dom";
import Aux from "../../hoc/Auxilary/Auxilary";
const HomenavigationItems = (props) => {
  let routes = (
    <Aux>
      <Link to="/">
        <p> خانه </p>
      </Link>
      <Link to="/products">
        <p>بسته های شراکت</p>
      </Link>

      <Link to="/aboutus">
        <p>معرفی جافارو</p>
      </Link>

      <Link to="/contact">
        <p>تماس با ما</p>
      </Link>
    </Aux>
  );
  if (props.isAuthenticated) {
    routes = (
      <Aux>
        <Link to="/">
          <p> خانه </p>
        </Link>
        <Link to="/">
          <p> سبد دارایی</p>
        </Link>
        <Link to="/">
          <p> گزارش ها </p>
        </Link>
        <Link to="/products">
          <p> بسته های شراکت </p>
        </Link>
        <Link to="/farms">
          <p> مزرعه ها </p>
        </Link>
        <Link to="/workwithus">
          <p> همراهی </p>
        </Link>
        <Link to="/contact">
          <p> منتظر تماس شما هستیم</p>
        </Link>
        <Link to="/">
          <p> تازه ها </p>
        </Link>
        <Link to="/aboutus">
          <p> داستان ما</p>
        </Link>
      </Aux>
    );
  }
  return <div className={styled.homenavigationItems}>{routes}</div>;
};

export default HomenavigationItems;
