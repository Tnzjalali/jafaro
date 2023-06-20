import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import styled from "./FilterBox.css";

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#FBFBFB",
        boxShadow:
          " 0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
        "&:hover": {
          boxShadow: "0px 0px 0px 8px rgba(67, 181, 63, 0.16)",
        },
      },
      track: {
        color: "#708236",
        height: "3px",
      },
      rail: {
        color: "#b3aeae",
        height: "3px",
        boxShadow:
          "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
      },
      markLabelActive: {
        color: "#000000",
      },
      valueLabel: {
        "& > span > span": {
          color: "#708236",
          fontWeight: 800,
          fontFamily: "IRANSans",
        },
      },
    },
  },
});
function valuetext(value) {
  return `${value}°C`;
}
const marks = [
  {
    value: 100,
  },
  {
    value: 0,
  },
];
const minDistance = 10;

const SliderFilter = (props) => {
  const [value2, setValue2] = React.useState([20, 80]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <p className={styled.sliderTitle}>بازه قیمت :</p>
      <Box sx={{ width: 240 }}>
        <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={value2}
          onChange={handleChange2}
          getAriaValueText={valuetext}
          disableswap="true"
          valueLabelDisplay="auto"
          step={10}
          marks={marks}
        />
        <div className={styled.sliderLabel}>
          <span>100 میلیون</span>
          <span>0 تومان</span>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default SliderFilter;
