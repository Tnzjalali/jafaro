import React from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import FavouriteProduct from "./FavouriteProduct";
import styled from "./FavouriteProducts.css";
import items from "../Product/ProductData";

const FavouriteProducts = (props) => {
  function ToRial(str) {
 
    str = str.replace(/\,/g, '');
        var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
     
        while (objRegex.test(str)) {
            str = str.replace(objRegex, '$1,$2');
        }
     
        return str;
    }
  return (
    <Aux>
      <div className={styled.favouriteProductsTitleContainer}>
        <p className={styled.favouriteProductsTitle}>پر فروش ترین ها </p>
      </div>
      <div className={styled.FavouriteProducts}>
        {items[props.id].map((item) => (
          <FavouriteProduct
            price={ToRial(item.price)}
            key={item.id}
            id={props.id}
            productId={item.id}
            image={item.image}
            title={item.title}
            productions={item.productions}
            description={item.description}
            added={() => props.ingredientAdded(item.id, item.price)}
            removed={() => props.ingredientRemoved(item.id, item.price)}
            counter={props.counter}
          />
        ))}
      </div>
      <div className={styled.productFiltersBox}></div>
    </Aux>
  );
};

export default FavouriteProducts;
