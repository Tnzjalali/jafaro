import React, { useState } from 'react';
import BuildControl from '../../../BuildControl/BuildControl';
import styled from "./ProductCardBtn.css";
const ProductCardBtn = (props) => {
  console.log(props);
   return (
      <div className={styled.productItemBtn}>
          <div
            className={styled.productItemAdd}
            onClick={props.onClick}
          >
            <span>
              افزودن به سبد دارایی
              <svg
                width="22"
                height="22"
                viewBox="0 0 13 14"
                fill="#708236"
                color="#708236"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.375 3.88574H0.875V11.7607C0.875 11.9928 0.967187 12.2154 1.13128 12.3795C1.29538 12.5436 1.51794 12.6357 1.75 12.6357H10.5C10.7321 12.6357 10.9546 12.5436 11.1187 12.3795C11.2828 12.2154 11.375 11.9928 11.375 11.7607V3.88574ZM0 3.01074V11.7607C0 12.2249 0.184374 12.67 0.512563 12.9982C0.840752 13.3264 1.28587 13.5107 1.75 13.5107H10.5C10.9641 13.5107 11.4092 13.3264 11.7374 12.9982C12.0656 12.67 12.25 12.2249 12.25 11.7607V3.01074H0Z"
                  fill="#708236"
                />
                <path
                  d="M6 1.3125C5.41984 1.3125 4.86344 1.54297 4.4532 1.9532C4.04297 2.36344 3.8125 2.91984 3.8125 3.5H2.9375C2.9375 2.68777 3.26016 1.90882 3.83449 1.33449C4.40882 0.760155 5.18777 0.4375 6 0.4375C6.81223 0.4375 7.59118 0.760155 8.16551 1.33449C8.73984 1.90882 9.0625 2.68777 9.0625 3.5H8.1875C8.1875 2.91984 7.95703 2.36344 7.5468 1.9532C7.13656 1.54297 6.58016 1.3125 6 1.3125Z"
                  fill="#708236"
                />
              </svg>
            </span>
          </div>
        </div>
   );
}

export default ProductCardBtn;
