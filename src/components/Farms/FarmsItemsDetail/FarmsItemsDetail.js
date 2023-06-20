import React, { useEffect, useState } from "react";
import styled from "./FarmsItemsDetail.css";
import { Link, useParams } from "react-router-dom";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Layout from "../../../hoc/Layout/Layout";
import Footer from "../../Footer/Footer";
import axios from "../../../axios-orders";
import FarmsAgent from "./FarmsAgent/FarmsAgent";
import Spinner from "../../UI/Spinner/Spinner";
import FarmdetailImage from "./FarmDetailImage/FarmDetailImage";
import FarmsDetailDescribe from "./FarmsDetailDescribe/FarmsDetailDescribe";
import RelatedFarmProducts from "../RelatedFarmProducts/RelatedFarmProducts";
import items from "../../Products/Product/ProductData";

function FarmsItemsDetail() {

  const [itemsState, setItems] = useState({
    items: [items["3"]],
    pageTitle: "مزارع",
    products: [],
    agent: [],
    loading: false,
  });
  const { farmId } = useParams();
  const agentData = [];
  const thisFarms = items.find((prod) => prod.id === farmId);
  agentData.push(itemsState.agent);
  document.title = `${itemsState.pageTitle} | مزرعه ما`;
  console.log(thisFarms);
  return itemsState.loading ? (
    <Spinner />
  ) : (
    <Aux>
      <Layout>
        <div className={styled.itemContainer}>
          <div className={styled.itemMain}>
            <FarmdetailImage />
            <FarmsDetailDescribe
              title={thisFarms.title}
              rate={thisFarms.rate}
              customersCount={thisFarms.customersCount}
              ostan={thisFarms.ostan}
              shahrestan={thisFarms.shahrestan}
              averageAnnualInterest={thisFarms.averageAnnualInterest}
              soldItemsCount={thisFarms.soldItemsCount}
              description={thisFarms.description}
            />
          </div>
          <div className={styled.itemFarmer}>
              <FarmsAgent
                title={thisFarms?.owner}
                story={thisFarms?.description}
                profilePicture={thisFarms?.image}
              />
          </div>

          <div className={styled.relatedProducts}>
            <div className={styled.relatedProductsTitle}>
              <p>بسته های شراکت {itemsState.pageTitle}</p>
            </div>
            <div className={styled.relatedProductsContainer}>
              <RelatedFarmProducts products={itemsState.products} />
            </div>
          </div>

          <div className={styled.productItemMoreBtn}>
            <Link to="/">
              <span> بسته های شراکت بیشتر</span>
            </Link>
          </div>
        </div>
        <Footer />
      </Layout>
    </Aux>
  );
}

export default FarmsItemsDetail;
