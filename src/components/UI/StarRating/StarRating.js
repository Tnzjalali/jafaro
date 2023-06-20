import React from "react";
import PropTypes from "prop-types";
import styled from "./StarRating.css";
import Star from "./Star/Star.js";

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode === undefined ? "write" : props.mode,
      hoverRating: 0,
      selectedRating: props.rating === undefined ? 0 : props.rating,
    };
  }

  starClick = (e) => {
    if (this.props.mode === "read") return;

    let starRating = parseInt(e.target.dataset.rating, 10);
    if (this.props.onRate) {
      this.props.onRate(starRating);
    }
    this.setState({
      ...this.state,
      selectedRating: starRating,
    });
  };

  mouseOver = (e) => {
    if (this.props.mode === "read") return;
    this.setState({
      ...this.state,
      hoverRating: parseInt(e.target.dataset.rating, 10),
    });
  };

  render() {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      stars.push(
        <Star
          key={i}
          mouseOver={this.mouseOver}
          click={this.starClick}
          filled={this.state.hoverRating >= i || i <= this.state.selectedRating}
          rating={i}
        />
      );
    }
    return <div className={styled.rating}>{stars}</div>;
  }

  static propTypes = {
    mode: PropTypes.string,
    rating: PropTypes.number,
    onRate: PropTypes.func,
  };
}

export default StarRating;
