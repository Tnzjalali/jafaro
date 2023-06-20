import React, { useState, useEffect, useCallback } from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Dots from "../components/Dots";
import { useRecursiveTimeout } from "../useRecursiveTimeout";
import NextButton from "../../UI/NextButton/NextButton";
import PrevButton from "../../UI/PrevButton/PrevButton";
import styled from "./ImageSlider.css";

const AUTOPLAY_INTERVAL = 4000;

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

  const onNextClick = () => {
    setStart(start + 1 >= props.slides.length ? 0 : start + 1);
  };

  const onPrevClick = () => {
    setStart(start - 1 >= 0 ? start - 1 : props.slides.length - 1);
  };

  return (
    <Aux>
      <div className={styled.slides}>
        {isControlsVisible && (
          <NextButton onClick={onNextClick} className={styled.navButtons} />
        )}
        <ul className={styled.list}>
          {visibleItems.map((slide) => (
            <li key={slide.id}>
              <img
                id={slide.id}
                src={slide.image}
                alt={slide.name}
                className={styled.carouselImages}
                loading="lazy"
              />
              <p className={styled.slideTitle}>{slide.title}</p>
              <p className={styled.slideName}>{slide.name}</p>
            </li>
          ))}
        </ul>
        {isControlsVisible && (
          <PrevButton onClick={onPrevClick} className={styled.navButtons} />
        )}
      </div>

      {isControlsVisible && (
        <div className={styled.dotsControls}>
          <Dots
            items={props.slides.length}
            active={start}
            onClick={(active) => setStart(active)}
          />
        </div>
      )}
    </Aux>
  );
};

export default ImageSlider;
