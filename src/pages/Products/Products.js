import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Aux from "../../hoc/Auxilary/Auxilary";
import Layout from "../../hoc/Layout/Layout";
import FilterBox from "../../components/FilterBox/FilterBox";
import Footer from "../../components/Footer/Footer";
import FavouriteProducts from "../../components/Products/FavouriteProducts/FavouriteProducts";
import ProductItems from "../../components/Products/Product/ProductItems";
import styled from "./Products.css";

import image1 from "../../assets/images/variety-dairy-products-cookies-1.png";

const Trees = (props) => {
  const { id } = useParams();

  const items = useMemo(() => [
    {
      id: 1,
      title: "فراآورده های لبنی",
      image: image1, //inaro mituni taghir bedi
      filters: [
        {
          value: "Lion",
          title: "شیر",
        },
        {
          value: "yogurt",
          title: "ماست ",
        },
        {
          value: "Butter",
          title: "کره",
        },
        {
          value: "cream",
          title: "خامه",
        },
      ],
    },
    {
      id: 2,
      title: "حیوانات",
      image: image1,
      filters: [
        {
          value: "sheep",
          title: "گوسفند",
        },
        {
          value: "cow",
          title: "گاو",
        },
        {
          value: "Chicken",
          title: "مرغ",
        },
        {
          value: "ostrich",
          title: "شتر مرغ",
        },
      ],
    },
    {
      id: 3,
      title: "درخت ها",
      image: image1,
      filters: [
        {
          value: "apple",
          title: "سیب",
        },
        {
          value: "walnut",
          title: "گردو",
        },
        {
          value: "orange",
          title: "پرتقال",
        },
        {
          value: "pine",
          title: "کاج",
        },
      ],
    },
  ], []);

  const currentItem = useMemo(() => (
    items.find(i => i.id === Number(id))
  ), [items, id]);

  useEffect(() => {
    document.title = currentItem.title;
  }, [currentItem]);

  return (
    <Aux>
      <Layout>
        <div className={styled.topBannerContainer}>
          <div 
            className={styled.topBanner} 
            style={{ background: `linear-gradient(rgba(91, 100, 91, 0.37), rgba(91, 100, 91, 0.37)), url(\"${currentItem.image}\")`, backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center' }}
          >
            <p className={styled.bannerTitle}>
              {currentItem.title}
            </p>
          </div>
        </div>
        <div className={styled.productsContainer}>
          <div className={styled.productsBestSellers}>
            <FavouriteProducts
              id={id}
              ingredientAdded={props.onIngredientAdded}
              ingredientRemoved={props.onIngredientRemoved}
              counter={props.counter}
            />
          </div>
          <div className={styled.productsMain}>
            <FilterBox
              title={currentItem.title}
              filters={currentItem.filters}
            />
            <ProductItems id={id} />
          </div>
        </div>
        <Footer />
      </Layout>
    </Aux>
  );
};

export default Trees;
