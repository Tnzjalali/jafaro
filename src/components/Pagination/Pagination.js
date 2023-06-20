import React, { useEffect, useRef, useState } from "react";
import Aux from "../../hoc/Auxilary/Auxilary";
import PaginationDots from "./PaginationDots/PaginationDots";
import NextItems from "../Carousel/components/NextItems/NextItems";
import PrevItems from "../Carousel/components/PrevItems/PrevItems";
import styled from "./Pagination.css";

function Pagination(props) {
  const { data, RenderComponent, pageLimit, dataLimit, currentPage } = props;
  const [pages] = useState(Math.round(data.length / dataLimit));
  let resultsRef = useRef();
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: resultsRef.current.offsetTop,
    });
  }, [currentPage]);
  function goToNextPage() {
    const pageNumber = currentPage + 1;
    props.changePage(pageNumber);
  }

  function goToPreviousPage() {
    const pageNumber = currentPage - 1;
    props.changePage(pageNumber);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.id);
    props.changePage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <Aux>
      <div
        className={props.Product ? styled.productItems : null}
        ref={resultsRef}
      >
        {getPaginatedData().map((item, idx) => (
          <RenderComponent key={idx} data={item} />
        ))}
      </div>
      <div className={styled.dotsControls}>
        <NextItems onClick={goToNextPage} disabled={currentPage === pages} />
        <div className={styled.dotList}>
          {getPaginationGroup().map((item, index) => (
            <PaginationDots
              id={index + 1}
              key={index}
              onClick={changePage}
              active={currentPage === item ? "active" : null}
            />
          ))}
        </div>
        <PrevItems onClick={goToPreviousPage} disabled={currentPage === 1} />
      </div>
    </Aux>
  );
}

export default Pagination;
