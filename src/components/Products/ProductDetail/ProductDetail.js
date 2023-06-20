import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../../hoc/Layout/Layout";
import Aux from "../../../hoc/Auxilary/Auxilary";
import axios from "../../../axios-orders";
import Spinner from "../../UI/Spinner/Spinner";
import ProductImage from "./ProductImage/ProductImage";
import Productdescribe from "./ProductDescribe/ProductDescribe";
import Footer from "../../Footer/Footer";
import ProductsTable from "../../ProductsTable/ProductsTable";
import styled from "./ProductDetail.css";

import RelatedFarmProducts from "../../Farms/RelatedFarmProducts/RelatedFarmProducts";
import image1 from "../../../assets/images/2oYMwuFgnTg.jpg";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import items from "../Product/ProductData";

function TreesDetail() {
  const { productId, id } = useParams();

  const [itemsState, setItems] = useState({
    items: items[id],
    pageTitle: "مححصولات",
    similarProducts: [],
    loading: false,
  });

  function ToRial(str) {
 
    str = str.replace(/\,/g, '');
        var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
     
        while (objRegex.test(str)) {
            str = str.replace(objRegex, '$1,$2');
        }
     
        return str;
    }

  document.title = `${itemsState.pageTitle} | مزرعه ما`;

  const thisFarms = items[id].find((prod) => prod.id === productId);
  console.log(thisFarms)

  return itemsState.loading ? (
    <Spinner />
  ) : (
    <Aux>
      <Layout>
        <div className={styled.itemContainer}>
          <div className={styled.itemMain}>
            <ProductImage title={thisFarms.title} image={thisFarms.image} />
            <Productdescribe
              id={id}
              productId={productId}
              title={thisFarms.title}
              rate={thisFarms.rate}
              price={ToRial(thisFarms.price)}
              shahrestan={thisFarms.location}
              status={thisFarms.status}
              investmentTimespan={thisFarms.attractingInvestors}
              image={image1}
            />
          </div>
          <div className={styled.itemFarmer}>
            <div className={styled.itemFarmerdescription}>
              {/* <span>مشخصات بیشتر</span> */}
              <ProductsTable />
            </div>
          </div>

          <div className={styled.relatedProducts}>
            <div className={styled.relatedProductsTitle}>
              {/* <p>محصولات مشابه</p> */}
            </div>
            <div className={styled.relatedProductsContainer}>
              <RelatedFarmProducts id={id} products={itemsState.items} />
            </div>
          </div>
          {/* <div className={styled.productItemMoreBtn}>
            <Link to="/">
              <span> بسته های شراکت بیشتر</span>
            </Link>
          </div> */}
        </div>
        <Footer />
      </Layout>
    </Aux>
  );
}

export default TreesDetail;
