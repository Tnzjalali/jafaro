import React from 'react';
import styled from "./ProductLocation.css";

const ProductLocation = (props) => {
   return (
      
      <div className={styled.itemLocation}>
        <div className={styled.itemslogo}>
          <svg
            width="22"
            height="32"
            viewBox="0 0 15 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.38513 1C3.86001 1 1 3.72211 1 7.07474C1 10.9324 5.25675 17.0457 6.81978 19.1573C6.88466 19.2464 6.9697 19.3189 7.06795 19.3689C7.1662 19.419 7.27489 19.445 7.38513 19.445C7.49538 19.445 7.60406 19.419 7.70231 19.3689C7.80057 19.3189 7.8856 19.2464 7.95048 19.1573C9.51351 17.0466 13.7703 10.9355 13.7703 7.07474C13.7703 3.72211 10.9103 1 7.38513 1Z"
              stroke="#708236"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.38472 9.51359C8.5602 9.51359 9.5131 8.56068 9.5131 7.38521C9.5131 6.20974 8.5602 5.25684 7.38472 5.25684C6.20925 5.25684 5.25635 6.20974 5.25635 7.38521C5.25635 8.56068 6.20925 9.51359 7.38472 9.51359Z"
              stroke="#708236"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>
         {props.shahrestan}
        </span>
      </div>
   );
}

export default ProductLocation;
