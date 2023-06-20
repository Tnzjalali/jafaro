import React from "react";
import RelatedProduct from "./SimilarProduct";
import Aux from "../../../../hoc/Auxilary/Auxilary";
import styled from "./SimilarProducts.css";

const SimilarProducts = (props) => {
  const { similarProducts } = props;
  return (
    <Aux>
      <div className={styled.FavouriteProducts}>
        {similarProducts.map((item) => (
          <RelatedProduct
            price={item.price}
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            counter={props.counter}
          />
        ))}
      </div>
      <div className={styled.productFiltersBox}></div>
    </Aux>
  );
};

export default SimilarProducts;
