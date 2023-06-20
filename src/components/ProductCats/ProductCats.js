import React, { useEffect, useState } from "react";
import styled from "./ProductCats.css";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import axios from "../../axios-orders";
import Spinner from "../UI/Spinner/Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflow: "hidden",
    margin: "0 auto",
    display: "block",

    "@media (max-width: 500px)": {
      height: "100vh",
    },
    "& .MuiGrid-item ": {
      display: " grid",
      justifyContent: "center",

      "@media (max-width: 500px)": {
        padding: "40px 0 0 0",
        height: "180px",
      },
    },
    "& .MuiGrid-container ": {
      justifyContent: "center  ",
    },

    "& .MuiButton-root": {
      backgroundColor: "#1780df",
      color: "#fff",
      borderRadius: "30px",
      width: "230px",
      height: "40px",
      marginBottom: "40px",
    },
  },
  paper: {
    "& .MuiBox-root-5": {
      padding: "0",
    },
  },
}));
const ProductCats = () => {
  const classes = useStyles();
  const items = [
    {
      id: 1,
      title: "فراآورده های لبنی",
    },
    {
      id: 2,
      title: "حیوانات",
    },
    {
      id: 3,
      title: "درخت ها",
    },
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        {items.map((item, index) => (
          <Grid item xs={11} sm={4} key={item.id}>
            <Box className={classes.paper} p={1}>
              <div className={styled.colorOver}>
                <div className={index === 0 ? styled.colorOverFirst : index === 1 ? styled.colorOverSecond : styled.colorOverThird}>
                  <p>{item.title}</p>
                </div>
              </div>

              <Link to={`/products/${item.id}`}>
                <div className={styled.partnershipcategoryBtn}>
                  <p>ادامه</p>
                </div>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductCats;
