import React from "react";
import BasketItems from "../../components/BasketItem/BasketItems";
import BasketAddable from "../../components/BasketAddable/BasketAddable";
import BasketCheckout from "../../components/BasketCheckout/BasketCheckout";
import Footer from "../../components/Footer/Footer";
import Layout from "../../hoc/Layout/Layout";
import styled from "./Cart.css";
import Aux from "../../hoc/Auxilary/Auxilary";
const PartnershipBasket = () => {
  document.title = "سبد شراکت | مزرعه من";
  return (
    <Aux>
      <Layout>
        <div className={styled.topBannerContainer}>
          <div className={styled.topBanner}>
            <p className={styled.bannerTitle}>سبد شراکت</p>
          </div>
        </div>

        <div className={styled.basketContainer}>
          <div className={styled.basketItems}>
            <BasketItems />
          </div>
          <div className={styled.basketContainerLeft}>
            <div className={styled.basketCheckout}>
              <BasketCheckout />
            </div>
          </div>
        </div>
      </Layout>

<Footer />
    </Aux>
  );
};
export default PartnershipBasket;
