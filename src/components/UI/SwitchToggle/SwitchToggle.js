import React from "react";
import styled from "./SwitchToggle.css";

const SwitchToggle = (props) => {
  const classCompleted = props.small
    ? styled.toggleSwitchsmall
    : styled.toggleSwitch;
  return (
    <div className={classCompleted}>
      <div
        onClick={props.switchHandleOff}
        className={styled.touchableOpacityOff}
        style={props.styleFirst}
      >
        <span>{props.switchFirstText}</span>
      </div>
      <div
        onClick={props.switchHandleOn}
        style={props.styleSecond}
        className={styled.touchableOpacityOn}
      >
        <span>{props.switchSecondText}</span>
      </div>
    </div>
  );
};

export default SwitchToggle;
