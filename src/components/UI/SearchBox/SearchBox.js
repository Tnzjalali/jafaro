import React from "react";
import SearchLogo from "../SearchLogo/SerachLogo";
import styled from "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className={styled.searchInputContainer}>
      <input
        type="text"
        placeholder="سرچ کن"
        maxLength="30"
        className={styled.searchInput}
      />
      <div className={styled.searchInputLogo}>
        <SearchLogo styleInput />
      </div>
    </div>
  );
};
export default SearchBox;
