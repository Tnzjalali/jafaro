import React from "react";
import Aux from "../../hoc/Auxilary/Auxilary";
import Layout from "../../hoc/Layout/Layout";
import styled from "./Orders.css";
import Footer from "../../components/Footer/Footer";
import FavouriteAnimals from "../../components/Farms/RelatedFarmProducts/RelatedFarmProducts";

const Orders = () => {
  document.title = "تکمیل فرآیند خرید | مزرعه من";
  return (
    <Aux>
      <Layout>
      <div className={styled.topBannerContainer}>
          <div className={styled.topBanner}>
            <p className={styled.bannerTitle}>سبد شراکت</p>
          </div>
        </div>
        <div className={styled.ordersContainer}>
          <p className={styled.ordersTitle}>
          پرداخت شما با موفقیت انجام شد!
          <br/>
          به زودی همکاران ما با شما تماس خواهند گرفت.</p>
        </div>
        <div>
            <FavouriteAnimals />
          </div>
      </Layout>
    </Aux>
  );
};

export default Orders;
