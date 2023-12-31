import styled from "./WorkProcess.css";
import React, { Component } from "react";

class MouseCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDown: false,
      startX: null,
      transLeftOffset: null,
      dragSpeed: props.dragSpeed,
      activeClass: null,
    };
    this.cRef = React.createRef();
  }

  // mouse Down
  handleMouseDown = (e) => {
    const carousel = this.cRef.current;
    e.persist();
    this.setState({ activeClass: "active" });
    const _startX = e.pageX - carousel.offsetLeft;
    const _transLeftOffset = this.giveMeIntValOf(
      carousel.firstChild.style.transform
    );
    this.setState(
      {
        isDown: true,
        startX: _startX,
        transLeftOffset: _transLeftOffset,
      },
      () => {
        // handeling reset the transition
        const { startX, transLeftOffset, dragSpeed } = this.state;

        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * dragSpeed;

        carousel.firstChild.style.cssText = `
        transform: translateX(${transLeftOffset + walk}px);
        transition: transform 0.0s ease-in-out;
      `;
      }
    );
  };

  // mouse Leave
  handleMouseLeave = (e) => {
    this.handleSnap();
  };

  // mouse Up
  handleMouseUp = (e) => {
    this.handleSnap();
  };

  // mouse Move
  handleMouseMove = (e) => {
    const { isDown, startX, transLeftOffset, dragSpeed } = this.state;
    const carousel = this.cRef.current;

    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * dragSpeed;

    carousel.firstChild.style.transform = `translateX(${
      transLeftOffset + walk
    }px)`;
  };

  // handle Snap To Sides
  handleSnap = () => {
    // const { isDown, startX, transLeftOffset } = this.state
    const { itemWidth, itemSideOffsets } = this.props;
    const carousel = this.cRef.current;

    // Resetting
    this.setState({ isDown: false });

    this.setState({ activeClass: null });

    // handeling Threshold
    // (1) getting transValue
    const tempThresholdOffset = this.giveMeIntValOf(
      carousel.firstChild.style.transform
    );
    // (2) items width - 30(first & last item removed margins) - containerWidth(b/c of ending part)
    const end =
      6 * (itemWidth + 2 * itemSideOffsets) - 30 - carousel.offsetWidth;

    // (3) check if we passing from threshold ( handeling Snap To Sides )
    if (tempThresholdOffset < 0 || tempThresholdOffset > end) {
      this.setState({ isDown: false });
      carousel.firstChild.style.cssText = `
        transform: translateX(${tempThresholdOffset < 0 ? 0 : end}px);
        transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
      `;
    }
  };

  // helper Function
  giveMeIntValOf = (el) => {
    // extracting 20 from translateX(20px) and converting it to integer with parsInt
    return parseInt(el.replace("translateX(", "").replace("px)", ""), 10);
  };

  render() {
    const { itemWidth, itemHeight, itemSideOffsets } = this.props;

    const cWrapperStyle = {
      width: `${6 * (itemWidth + 2 * itemSideOffsets)}px`,
      height: `${itemHeight}px`,
    };
    return (
      <div
        className={[styled.carousel, styled[this.state.activeClass]].join(" ")}
        ref={this.cRef}
        onMouseDown={this.handleMouseDown}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
      >
        <div
          className={styled.cWrapper}
          style={{
            ...cWrapperStyle,
            transform: "translateX(0px)",
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MouseCarousel;
