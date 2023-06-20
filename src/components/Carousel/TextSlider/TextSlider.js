import React, { useState, useEffect, useCallback } from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Dots from "../components/Dots";
import { useRecursiveTimeout } from "../useRecursiveTimeout";
import quotUp from "../../../assets/icons/QuotUp.svg";
import quotDown from "../../../assets/icons/QuotDown.svg";

import styled from "./TextSlider.css";

const AUTOPLAY_INTERVAL = 5000;

const ImageSlider = (props) => {
  const [start, setStart] = useState(0);

  const scrollNext = () => {
    setStart(start + 1 >= props.slides.length ? 0 : start + 1);
  };
  const autoplay = useCallback(() => {
    scrollNext();
  }, [start]);

  const { play } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  useEffect(() => {
    play();
  }, [play]);

  const isControlsVisible = props.slides.length >= props.visibleItemsNumber;
  const visibleItems = isControlsVisible
    ? props.slides
        .concat(props.slides.slice(0, props.visibleItemsNumber))
        .slice(start, start + props.visibleItemsNumber)
    : props.slides;

  return (
    <Aux>
      <div>
        <p className={styled.textSliderTitle}>نظرات مشتریان</p>
      </div>
      <div className={styled.slides}>
        <ul className={styled.list}>
          {visibleItems.map((slide) => (
            <li key={slide.id}>
              <p className={styled.slidertext}>{slide.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Aux>
  );
};

export default ImageSlider;
