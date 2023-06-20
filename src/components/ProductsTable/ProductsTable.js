import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Aux from "../../hoc/Auxilary/Auxilary";
import styled from "./ProductsTable.css";
import items from "../Products/Product/ProductData";

const ProductsTable = () => {

  function ToRial(str) {
 
    str = str.replace(/\,/g, '');
        var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
     
        while (objRegex.test(str)) {
            str = str.replace(objRegex, '$1,$2');
        }
     
        return str;
    }

  const { productId, id } = useParams();

  const [itemsState, setItems] = useState({
    items: items[id],
    pageTitle: "مححصولات",
    similarProducts: [],
    loading: false,
  });
  const thisFarms = items[id].find((prod) => prod.id === productId);
  const sumPrice = Number(thisFarms.price) +  Number(thisFarms.renting) +  Number(thisFarms.Manpower)
  return (
    <Aux>
      <div className={styled.tabs}>
        {/* <div className={styled.tabsItem}>
          <p>جدول ریز مشخصات</p>
        </div> */}
        <div
          className={styled.tabsItem}
          style={{ borderRadius: "15px 15px 0px 0px", background: "#94C794" }}
        >
          <p style={{ color: "#FBFBFB" }}>جدول ریز مشخصات</p>
        </div>
        {/* <div className={styled.tabsItem}>
          <p>جدول پیش بینی</p>
        </div> */}
      </div>
      <div className={styled.table}>
        <table className={styled.tableData}>
          <tbody>
            <tr>
              <th>ردیف</th>
              <th>شرح</th>
              <th>مبلغ به ریال</th>
            </tr>
            <tr>
              <td>1</td>
              <td> {thisFarms.description}</td>
              <td>{ToRial(thisFarms.price)}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>هزینه نیرو انسانی</td>
              <td>{ToRial(thisFarms.Manpower)}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>هزینه اجاره</td>
              <td>{ToRial(thisFarms.renting)} </td>
            </tr>
            <tr>
              <td></td>
              <td>جمع کل هزینه های مزرعه من</td>
              <td>{ToRial(String(sumPrice))}</td>
            </tr>

            <tr>
              <td>4</td>
              <td>کارگزاری مزرعه من (10%)</td>
              <td>۴٫۳۲۰٫۰۰۰</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Aux>
  );
};
export default ProductsTable;
