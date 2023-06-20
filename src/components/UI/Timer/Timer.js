import React from "react";
import styled from "./Timer.css";
import SpinBlack from "../../../assets/icons/SpinBlack.svg";
import SpinWhite from "../../../assets/icons/SpinWhite.svg";

const Timer = (props) => {
  const runTimerStyle = props.runTimer ? styled.runTimer : styled.runTimerHide;
  const loginTimerSpan = props.loginTimer
    ? styled.loginRunTimeCount
    : styled.runTimeCount;
  const loginTimerSpin = props.loginTimer ? SpinWhite : SpinBlack;
  return (
    <div className={runTimerStyle}>
      <img src={loginTimerSpin} alt="timer"></img>
      <span className={loginTimerSpan}>{props.timerCountDown}</span>
    </div>
  );
};
export default Timer;
