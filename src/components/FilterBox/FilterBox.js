import React, { useState } from "react";
import styled from "./FilterBox.css";
import Aux from "../../hoc/Auxilary/Auxilary";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SliderFilter from "./SliderFilter";
import SortTable from "./SortTable/SortTable";

const useStyles = makeStyles((theme) => ({
  radio: {
    "&$checked": {
      color: "#708236",
    },
    "&:hover": {
      backgroundColor: "rgba(0, 245, 38, 0.05)",
    },

    "&$checked:hover": {
      backgroundColor: "rgba(0, 245, 38, 0.05)",
    },
  },
  formControlLabel: {
    p: {
      fontSize: "15px !important",
    },
  },
  checked: {},
}));
const FilterBox = (props) => {
  const [filterBoxState, setFilterBoxState] = useState({
    isActive: false,
  });

  const filterBoxHandler = () => {
    const filterBox = filterBoxState.isActive;
    setFilterBoxState({
      isActive: !filterBox,
    });
  };
  let attachedClasses = [styled.filterFarmsCard];
  if (!filterBoxState.isActive) {
    attachedClasses = [styled.filterFarmsCard, styled.filterFarmsCardClose];
  }
  const classes = useStyles();
  return (
    <Aux>
      <div className={styled.filterFarms}>
        <div className={styled.filterBoxSmall}>
          <div className={styled.filterType} onClick={filterBoxHandler}>
            <div className={styled.filterTypeContent}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8706 5.64701V6.87304C15.8706 7.08124 15.7087 7.24316 15.5005 7.24316C15.2923 7.24316 15.1304 7.08124 15.1304 6.87304V5.64701C15.1304 5.43881 15.2923 5.27688 15.5005 5.27688C15.6856 5.27688 15.8706 5.43881 15.8706 5.64701Z"
                  fill="#1780df"
                />
                <path
                  d="M15.8706 12.6335V23.8066C15.8706 24.0148 15.7087 24.1768 15.5005 24.1768C15.2923 24.1768 15.1304 24.0148 15.1304 23.8066V12.6104C15.1304 12.4022 15.2923 12.2403 15.5005 12.2403C15.6856 12.2634 15.8706 12.4253 15.8706 12.6335Z"
                  fill="#1780df"
                />
                <path
                  d="M17.6518 9.76468C17.6518 10.9676 16.6802 11.916 15.5005 11.916C14.2976 11.916 13.3491 10.9444 13.3491 9.76468C13.3491 8.56177 14.3207 7.61333 15.5005 7.61333C16.6802 7.61333 17.6518 8.58491 17.6518 9.76468ZM14.0662 9.76468C14.0662 10.5512 14.714 11.1758 15.4773 11.1758C16.2638 11.1758 16.8884 10.5281 16.8884 9.76468C16.8884 8.97816 16.2407 8.35358 15.4773 8.35358C14.714 8.35358 14.0662 8.97816 14.0662 9.76468Z"
                  fill="#1780df"
                />
                <path
                  d="M22.2188 23.5293V22.3033C22.2188 22.0951 22.0568 21.9331 21.8486 21.9331C21.6404 21.9331 21.4785 22.0951 21.4785 22.3033V23.5293C21.4785 23.7375 21.6404 23.8994 21.8486 23.8994C22.0568 23.8994 22.2188 23.7375 22.2188 23.5293Z"
                  fill="#1780df"
                />
                <path
                  d="M22.2188 16.5664V5.37017C22.2188 5.16198 22.0568 5.00005 21.8486 5.00005C21.6404 5.00005 21.4785 5.16198 21.4785 5.37017V16.5664C21.4785 16.7746 21.6404 16.9365 21.8486 16.9365C22.0568 16.9365 22.2188 16.7746 22.2188 16.5664Z"
                  fill="#1780df"
                />
                <path
                  d="M21.8486 21.5859C20.6457 21.5859 19.6973 20.6144 19.6973 19.4346C19.6973 18.2317 20.6688 17.2833 21.8486 17.2833C23.0515 17.2833 23.9999 18.2548 23.9999 19.4346C23.9999 20.6144 23.0284 21.5859 21.8486 21.5859ZM21.8486 20.8457C22.6351 20.8457 23.2597 20.198 23.2597 19.4346C23.2597 18.6481 22.612 18.0235 21.8486 18.0235C21.0621 18.0235 20.4375 18.6712 20.4375 19.4346C20.4375 20.198 21.0621 20.8457 21.8486 20.8457Z"
                  fill="#1780df"
                />
                <path
                  d="M9.5215 23.8066V22.5806C9.5215 22.3724 9.35957 22.2105 9.15137 22.2105C8.94318 22.2105 8.78125 22.3724 8.78125 22.5806V23.8066C8.78125 24.0148 8.94318 24.1768 9.15137 24.1768C9.35957 24.1768 9.5215 24.0148 9.5215 23.8066Z"
                  fill="#1780df"
                />
                <path
                  d="M9.5215 16.8437V5.64752C9.5215 5.43932 9.35957 5.27739 9.15137 5.27739C8.94318 5.27739 8.78125 5.43932 8.78125 5.64752V16.8437C8.78125 17.0519 8.94318 17.2139 9.15137 17.2139C9.35957 17.2139 9.5215 17.0519 9.5215 16.8437Z"
                  fill="#1780df"
                />
                <path
                  d="M9.15134 21.8633C7.94844 21.8633 7 20.8917 7 19.7119C7 18.509 7.97157 17.5606 9.15134 17.5606C10.3542 17.5606 11.3027 18.5322 11.3027 19.7119C11.3258 20.8917 10.3542 21.8633 9.15134 21.8633ZM9.15134 21.123C9.93785 21.123 10.5624 20.4753 10.5624 19.7119C10.5624 18.9254 9.91472 18.3008 9.15134 18.3008C8.36483 18.3008 7.74025 18.9486 7.74025 19.7119C7.74025 20.4753 8.36483 21.123 9.15134 21.123Z"
                  fill="#1780df"
                />
                <circle cx="15" cy="15" r="14.5" stroke="#1780df" />
              </svg>
              <p>فیلتر</p>
            </div>
          </div>

          <div className={styled.sortType}>
            <SortTable />
          </div>
        </div>
        <div className={attachedClasses.join(" ")}>
          <p className={styled.filterFarmsTitle}>
            فیلتر بر اساس {props.title} :
          </p>
          <div className={styled.filterFarmsLabel}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="position"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel
                  classes={{
                    root: classes.formControlLabelRoot,
                    label: classes.formControlLabel,
                  }}
                  value="allCat"
                  control={
                    <Radio
                      disableRipple
                      classes={{
                        root: classes.radio,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label={
                    <Typography className={styled.formControlLabel}>
                      همه دسته بندی ها
                    </Typography>
                  }
                />

                {props.filters.map(f => (
                  <FormControlLabel
                    classes={{
                      root: classes.formControlLabelRoot,
                      label: classes.formControlLabel,
                    }}
                    value={f.value}
                    control={
                      <Radio
                        disableRipple
                        classes={{
                          root: classes.radio,
                          checked: classes.checked,
                        }}
                      />
                    }
                    label={
                      <Typography className={styled.formControlLabel}>
                        {f.title}
                      </Typography>
                    }
                  />
                ))}
              </RadioGroup>
              <div className={styled.sliderFilter}>
                <SliderFilter />
              </div>
            </FormControl>
          </div>
        </div>
      </div>
    </Aux>
  );
};
export default FilterBox;
