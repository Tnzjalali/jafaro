import React from "react";
import styled from "./ProductItem.css";
import Aux from "../../../../hoc/Auxilary/Auxilary";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import ProductCardBtn from "./ProductCardBtn/ProductCardBtn";import { useHistory } from "react-router-dom";


const ProductItem = ({ id, data }) => {


  function ToRial(str) {
 
    str = str.replace(/\,/g, '');
        var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
     
        while (objRegex.test(str)) {
            str = str.replace(objRegex, '$1,$2');
        }
     
        return str;
    }

  const exploreLink = `/product/${id}/${data.id}`;
  let history = useHistory();
  const addToBasket = () => {
    const getfromlocal = JSON.parse(localStorage.getItem("basket"));
    if (getfromlocal === null || getfromlocal !== undefined) {
      localStorage.setItem(
        "basket",
        JSON.stringify({ title: data.title, price: data.price, productId: data.id, id })
      );
      history.push("/cart");
    }else{
      localStorage.removeItem("basket");
      localStorage.setItem(
        "basket",
        JSON.stringify({ title: data.title, price: data.price, productId: data.id, id })
      );
      history.push("/cart");
    }
  };
  return (
    <Aux>
      <div className={styled.productItemCard}>
        <Link to={exploreLink}>
          <div className={styled.cardInfo}>
            <ProductCard
              image={data.image}
              title={data.title}
              price={ToRial(data.price)}
            />
          </div>
        </Link>
        <ProductCardBtn onClick={addToBasket} />
      </div>
    </Aux>
  );
};

export default ProductItem;
