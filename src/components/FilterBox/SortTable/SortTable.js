import React from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import styled from "./SortTable.css";
const selectStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minWidth: "100%",
    width: "180px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      height: "30px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiSelect-select": {
      backgroundColor: "#fbfbfb",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #1780df",
    },
    "& .MuiInputLabel-root": {
      color: "black",
      position: "relative",
    },
    "& .MuiOutlinedInput-input": {
      color: "black",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#7C857C",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      borderColor: "#7C857C",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #1780df",
    },
  },
  dropdownStyle: {
    borderRadius: "30px",
    boxShadow:
      "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16) !important",
  },
  menuItem: {
    "&:hover": {
      backgroundColor: "#55A354 !important",
    },
  },
}));
const SortTable = () => {
  const classes = selectStyles();
  return (
    <Aux>
      <div className={styled.sortSmall}>
        <FormControl variant="outlined" className={classes.root}>
          <InputLabel className={classes.label}>مرتب سازی بر اساس</InputLabel>
          <Select
            className={classes.select}
            label="مرتب سازی بر اساس"
            value=""
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
              classes: { paper: classes.dropdownStyle },
              getContentAnchorEl: null,
            }}
          >
            <MenuItem value="محبوب ترین " className={classes.menuItem}>
              محبوب ترین ها
            </MenuItem>
            <MenuItem value="ارزان ترین" className={classes.menuItem}>
              ارزان ترین ها
            </MenuItem>
            <MenuItem value="گران ترین " className={classes.menuItem}>
              گران ترین ها
            </MenuItem>
            <MenuItem value="پرفروش ترین" className={classes.menuItem}>
              پرفروش ترین
            </MenuItem>
            <MenuItem value="جدیدترین" className={classes.menuItem}>
              جدیدترین
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styled.sortLarge}>
        <p className={styled.sortProductsTitle}>مرتب سازی بر اساس :</p>
        <div className={styled.sortProductsItems}>
          <div className={styled.listingSort}>
            <span>محبوب ترین ها</span>
          </div>
          <div className={styled.listingSort}>
            <span>ارزان ترین </span>
          </div>
          <div className={styled.listingSort}>
            <span>گران ترین</span>
          </div>
          <div className={styled.listingSort}>
            <span>پرفروش ترین</span>
          </div>

          <div className={styled.listingSort}>
            <span>جدید ترین</span>
          </div>
        </div>
      </div>
    </Aux>
  );
};
export default SortTable;
