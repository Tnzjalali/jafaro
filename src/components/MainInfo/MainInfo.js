import React from "react";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styled from "./MainInfo.css";
import Aux from "../../hoc/Auxilary/Auxilary";
import Subtract from "../../assets/icons/Subtract.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
    },
    "& .MuiOutlinedInput-root": {
      margin: "0 auto",
      borderRadius: "30px",
      width: "370px",
      height: "45px",
      boxShadow:
        " 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)",

      "@media (max-width: 500px)": {
        width: "345px",
      },
    },
    "& .MuiInputBase-input": {
      cursor: "pointer",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fbfbfb",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fbfbfb",
    },
    "& .MuiFormLabel-root": {
      lineHeight: "0",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      borderColor: "#fbfbfb",
    },

    "& .MuiFormControl-root": {
      marginTop: "30px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "0.7px solid #fbfbfb",
    },
    "& .MuiOutlinedInput-multiline": {
      height: "auto !important",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(240, 236, 236, 0.87)",
    },
    "& .MuiButton-root": {
      backgroundColor: "#94C794",
      color: "#fff",
      borderRadius: "30px",
      width: "230px",
      height: "40px",
      marginBottom: "40px",
      "@media (max-width: 500px)": {
        width: "345px",
      },
    },
    "& .MuiButton-contained:hover": {
      backgroundColor: "#007A48",
      boxShadow: "0 10px 13px -10px #0c2d33",
      transition: ".4s ease",
    },
  },
}));
const MainInfo = () => {
  const classes = useStyles();
  return (
    <Aux>
      {/* <div className={styled.mainInfoTitleContainer}>
        <p className={styled.mainInfoTitle}>با جافارو همراه شوید</p>
      </div> */}

      <div className={styled.mainInfoSmall}>
        <p className={styled.newslettersTxt}>
          با ثبت نام در خبرنامه جافارو از جدید ترین محصولات، تخفیف ها و فروش
          ویژه مطلع شوید.
        </p>

        <div className={classes.root}>
          <div className={styled.phoneNumberContainerSmall}>
            <TextField
              type="tel"
              variant="outlined"
              name="mobileNumber"
              inputProps={{ maxLength: 10 }}
            />
            <span className={styled.mobileCode}>+98</span>
          </div>
          <div className={styled.newslettersBtn}>
            <Button variant="contained" className={classes.button}>
              عضویت
            </Button>
          </div>
        </div>
      </div>
      <div className={styled.mainInfoContainer}>
        <div className={styled.locationContainer}>
          <div className={styled.locationInfo}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7705.850975503527!2d51.394529159248265!3d35.70379871416574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e011d01611847%3A0xf0f5fee44c68da9c!2z2YXbjNiv2KfZhiDYp9mG2YLZhNin2Kg!5e0!3m2!1sfa!2s!4v1634235950173!5m2!1sfa!2s"
              width="331"
              height="553"
              style={{ border: "0" }}
              strokeLinejoin=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          <div className={styled.locationInfoSmall}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7705.850975503527!2d51.394529159248265!3d35.70379871416574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e011d01611847%3A0xf0f5fee44c68da9c!2z2YXbjNiv2KfZhiDYp9mG2YLZhNin2Kg!5e0!3m2!1sfa!2s!4v1634235950173!5m2!1sfa!2s"
              width="270"
              height="123"
              style={{ border: "0" }}
              strokeLinejoin=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          <div className={styled.locationLogo}>
            <img src={Subtract} alt="Subtract" />
          </div>
        </div>
        <div className={styled.mainInfo}>
          <div className={classes.root}>
            <p className={styled.newslettersTxt}>
              با ثبت نام در خبرنامه جافارو از جدید ترین محصولات، تخفیف ها و
              فروش ویژه مطلع شوید.
            </p>

            <div className={styled.phoneNumberContainer}>
              <TextField
                type="tel"
                variant="outlined"
                name="mobileNumber"
                inputProps={{ maxLength: 10 }}
              />
              <span className={styled.mobileCode}>+98</span>
            </div>
            <div className={styled.newslettersBtn}>
              <Button variant="contained" className={classes.button}>
                عضویت
              </Button>
            </div>
          </div>
          <div className={styled.emailInfoContainer}>
            <p className={styled.emailInfoTitle}>ایمیل ارتباطی</p>
            <p className={styled.emailInfo}>support@jafaro.com</p>
            <p className={styled.emailInfo}>sales@jafaro.com</p>
          </div>
          <div className={styled.phoneInfoContainer}>
            <p className={styled.phoneInfoTitle}>تلفن ارتباطی</p>
            <ul className={styled.phoneInfoList}>
              <li className={styled.phoneInfo}>
                <p>۰۲۱-۲۲۷۷۳۴۷۲</p>
                <p>پشتیبانی</p>
              </li>
              <li className={styled.phoneInfo}>
                <p>۰۲۱-۲۲۷۷۴۱۰۰</p>
                <p>فروش</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Aux>
  );
};
export default MainInfo;
