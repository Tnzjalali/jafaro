import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "./BasketCheckout.css";

const BasketCheckout = () => {
  
  const [basketData, setBasketData] = useState(null)
  useEffect(() => {
    const bd = JSON.parse(localStorage.getItem('basket'))
    setBasketData(bd)
  }, [])
  return (
    <div className={styled.basketCheckoutCard}>
      <ul className={styled.checkoutSummary}>
        <li className={styled.checkoutAllPrice}>
          <p className={styled.checkoutItemTitle}>مبلغ کل کالاها</p>
          <p className={styled.checkoutPrice}>{basketData?.price}</p>
          <p className={styled.checkoutcurrency}> تومان</p>
        </li>
        <li className={styled.checkoutSumPrice}>
          <p className={styled.checkoutItemTitle}>مبلغ قابل پرداخت </p>
          <p className={styled.checkoutPrice}>
           {basketData?.price}
            <span className={styled.checkoutcurrencySmall}> تومان</span>
          </p>
          <p className={styled.checkoutcurrency}> تومان</p>
        </li>
        <Link to="/orders/">
          <li className={styled.checkoutToForward}>
            <span>ادامه فرآیند خرید</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default BasketCheckout;
