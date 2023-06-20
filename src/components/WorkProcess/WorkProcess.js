import React, { useState } from "react";
import Aux from "../../hoc/Auxilary/Auxilary";
import FarmConfirmation from "./FarmConfirmation/FarmConfirmation.js";
import FarmersRequest from "./FarmersRequest/FarmersRequest";
import ProducingProduct from "./ProducingProduct/ProducingProduct";
import ProductionParticipation from "./ProductionParticipation/ProductionParticipation";
import SellProduct from "./SellProduct/SellProduct";
import Viewreports from "./ViewReports/ViewReports";
import MouseCarousel from "./MouseCarousel.js";
import styled from "./WorkProcess.css";
import Dots from "../Carousel/components/Dots";

const WorkProcess = (props) => {
  const [start, setStart] = useState(0);
  const slides = [
    <FarmConfirmation />,
    <FarmersRequest />,
    <ProducingProduct />,
    <ProductionParticipation />,
    <SellProduct />,
    <Viewreports />,
  ];

  const visibleItemsNumber = 2;
  const isControlsVisible = slides.length >= visibleItemsNumber;
  const visibleItems = isControlsVisible
    ? slides.concat(slides.slice(0, 2)).slice(start, start + 2)
    : slides;
  const setting = {
    dragSpeed: 1.25,
    itemWidth: 300,
    itemHeight: 180,
    itemSideOffsets: 15,
  };
  return (
    <Aux>
      <div className={styled.workProcessContainer}>
        <div className={styled.workProcessTitleContainer}>
          <p className={styled.workProcessTitle}>روند کاری جافارو </p>
        </div>
        <div className={styled.workProcess}>
          <div className={styled.workProcessInner}>
            <MouseCarousel {...setting}>
              <div className={styled.workProcessCol}>
                {visibleItems.map((slide, idx) => (
                  <div key={idx}>{slide}</div>
                ))}
              </div>
              <div className={styled.workProcessCol}>
                <ProducingProduct />
                <ProductionParticipation />
              </div>
              <div className={styled.workProcessCol}>
                <Viewreports />
                <SellProduct />
              </div>
            </MouseCarousel>
          </div>
        </div>
        <div className={styled.dotsControls}>
          {isControlsVisible && (
            <Dots
              items={4}
              active={start}
              onClick={(active) => setStart(active)}
            />
          )}
        </div>
      </div>
    </Aux>
  );
};

export default WorkProcess;
