import React, { useState } from "react";
import styled from "./ProductItems.css";
import Aux from "../../../hoc/Auxilary/Auxilary";
import ProductItem from "./ProductItem/ProductItem";
import SortTable from "../../FilterBox/SortTable/SortTable";
import Spinner from "../../UI/Spinner/Spinner";
import Pagination from "../../Pagination/Pagination";
import items from "./ProductData"

const ProductItems = ({ id }) => {
  const [state, setState] = useState({ items: [], loading: false, pageSize: 10, pageIndex: 1 });

  const changePage = (pageNumber) => {
    setState({ pageIndex: pageNumber });
  };

  return state.loading ? (
    <Spinner />
  ) : (
    <Aux>
      <div className={styled.sortFarms}>
        <div className={styled.sortFarmsTable}>
          <div className={styled.sortFarmsTable}>
            <SortTable />
          </div>
        </div>
        <Pagination
          data={items[id]}
          RenderComponent={(props) => <ProductItem id={id} {...props} />}
          currentPage={state.pageIndex}
          pageLimit={4}
          changePage={changePage}
          dataLimit={state.pageSize}
          Product
        />
      </div>
    </Aux>
  );
};

export default ProductItems;
