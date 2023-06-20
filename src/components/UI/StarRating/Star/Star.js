import React from "react";
import PropTypes from "prop-types";
import styled from "./Star.css";
import StarFull from "../../Star/StarFull";
import StarEmpty from "../../Star/StarEmpty";

const Star = props => {
   return (
      <span
         className={styled.star}
         onMouseOver={props.mouseOver}
         onClick={props.click}
         data-rating={props.rating}>
         {props.filled ? <StarFull/> : <StarEmpty/>}
      </span>
   );
};

Star.propTypes = {
   onMouseOver: PropTypes.func,
   onClick: PropTypes.func,
   rating: PropTypes.number
};

export default Star;
