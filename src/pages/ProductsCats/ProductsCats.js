import React from "react";
import styled from "./ProductsCats.css";
import Aux from "../../hoc/Auxilary/Auxilary";
import Layout from "../../hoc/Layout/Layout";

import Footer from "../../components/Footer/Footer";
import ProductCats from "../../components/ProductCats/ProductCats";

const PartnershipCategory = () => {
  document.title = "محصولات | مزرعه ما";
  return (
    <Aux>
      <Layout>
        <p className={styled.partnershipcategoryTitle}>
          دسته بندی بسته های شراکت
        </p>
        <ProductCats />
        <Footer />
      </Layout>
    </Aux>
  );
};

export default PartnershipCategory;
