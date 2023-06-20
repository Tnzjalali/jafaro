import React from "react";
import styled from "./Scroller.css";
import { useLocation } from "react-router-dom";

const Scroller = () => {
  const location = useLocation();
  const splitLocation = location.hash;

  let attachedClasses = [];
  if (splitLocation === "#animals") {
    attachedClasses = [styled.active];
  }
  switch (splitLocation) {
    case "#animals":
      attachedClasses[0] = [styled.active];
      break;
    case "#farms":
      attachedClasses[1] = [styled.active];
      break;
    case "#workprocess":
      attachedClasses[2] = [styled.active];
      break;
    case "#ourstory":
      attachedClasses[3] = [styled.active];
      break;
    case "#ourteam":
      attachedClasses[4] = [styled.active];
      break;
    case "#maininfo":
      attachedClasses[5] = [styled.active];
      break;
    default:
      attachedClasses = [];
  }
  return (
    <div className={styled.scrollerContainer}>
      <div className={styled.scrollerContent}>
        <a href="#animals" className={attachedClasses[0]}>
          -
        </a>
      </div>
      <div className={styled.scrollerContent}>
        <a href="#farms" className={attachedClasses[1]}>
          -
        </a>
      </div>
      <div className={styled.scrollerContent}>
        <a href="#workprocess" className={attachedClasses[2]}>
          -
        </a>
      </div>
      <div className={styled.scrollerContent}>
        <a href="#ourstory" className={attachedClasses[3]}>
          -
        </a>
      </div>
      <div className={styled.scrollerContent}>
        <a href="#ourteam" className={attachedClasses[4]}>
          -
        </a>
      </div>
      <div className={styled.scrollerContent}>
        <a href="#maininfo" className={attachedClasses[5]}>
          -
        </a>
      </div>
    </div>
  );
};

export default Scroller;
