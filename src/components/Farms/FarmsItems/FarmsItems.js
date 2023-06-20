import React, { Component } from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";

import FarmsItem from "./FarmsItem/FarmsItem";
import items from "./FarmsData";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Pagination from "../../Pagination/Pagination";
import SortTable from "../../FilterBox/SortTable/SortTable";
import styled from "./FarmsItems.css";

class FarmsItems extends Component {
  state = { items: [], loading: false, pageSize: 4, pageIndex: 1 };
  changePage = (pageNumber) => {
    this.setState({ pageIndex: pageNumber });
  };
  render() {
    return this.state.loading ? (
      <Spinner />
    ) : (
      <Aux>
        <div className={styled.farms}>
          <div className={styled.sortFarmsTable}>
            <SortTable />
          </div>

          <div className={styled.farmsItems}>
            <Pagination
              data={items}
              RenderComponent={FarmsItem}
              currentPage={this.state.pageIndex}
              pageLimit={4}
              changePage={this.changePage}
              dataLimit={this.state.pageSize}
            />
          </div>
        </div>
      </Aux>
    );
  }
}
export default FarmsItems;
