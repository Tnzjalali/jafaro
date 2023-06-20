import React from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Searchlogo from "../../../assets/icons/search_new.svg";
import styled from "./SearchLogo.css";

const SearchLogo = (props) => {
  return (
    <Aux>
      <div
        className={styled.searchLogo}
      >
        <img
          src={Searchlogo}
          alt="Search"
          style={{ width: props.styleInput ? "15px" : "24px"  }}
        />
      </div>
    </Aux>
  );
};
export default SearchLogo;
