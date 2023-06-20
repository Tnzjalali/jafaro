import React from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import styled from "./RelatedFarmProducts.css";
import RelatedFarmProduct from "./RelatedFarmProduct";
import items from "../../Products/Product/ProductData";
import { useHistory } from "react-router-dom";

const FavouriteAnimals = (props) => {

  function ToRial(str) {
 
    str = str.replace(/\,/g, '');
        var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
     
        while (objRegex.test(str)) {
            str = str.replace(objRegex, '$1,$2');
        }
     
        return str;
    }

  let history = useHistory();
  console.log(history)
  return (
    <Aux>
      <div>
        <div className={styled.favouriteProductsTitleContainer}>
          <p className={styled.favouriteProductsTitle}>{history.location.pathname === "/orders/" || history.location.pathname.includes('/product/') ? 'بسته های شراکت مرتبط' : 'بسته های شراکت پرفروش'}</p>
        </div>
        <div className={styled.FavouriteProducts}>
          {(props.products || items["2"]).map((item) => (
            <RelatedFarmProduct
              price={ToRial(item.price)}
              key={item.id}
              id={props.id || "2" }
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
      </div>
    </Aux>
  );
};

export default FavouriteAnimals;