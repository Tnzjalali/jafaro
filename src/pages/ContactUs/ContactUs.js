import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import MainInfo from "../../components/MainInfo/MainInfo";
import ContactCall from "../../components/UI/ContactCall/ContactCall";
import ContactEnvelop from "../../components/UI/ContactEnvelop/ContactEnvelop";
import ContactPin from "../../components/UI/ContactPin/ContactPin";
import Aux from "../../hoc/Auxilary/Auxilary";
import Layout from "../../hoc/Layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import styled from "./ContactUs.css";
import { Form, useForm } from "../../components/UseForm/useForm";
import Socialmediagreen from "../../components/SocialMediaIcons/SocialMediaGreen";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      width: "770px",
      height: "50px",
      "@media (max-width: 500px)": {
        width: "345px",
        height: "45px",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#393939",
    },
    "& .MuiFormHelperText-root.Mui-error ": {
      color: "#790000",
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#790000",
    },
    "& .MuiFormLabel-root.Mui-error ": {
      color: "#7C857C",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#7C857C",
    },
    "& .MuiFormLabel-root": {
      lineHeight: "0",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      borderColor: "#000000",
    },

    "& .MuiFormControl-root": {
      marginTop: "30px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "0.7px solid #000000",
    },
    "& .MuiOutlinedInput-multiline": {
      height: "auto !important",
    },
    "& .MuiInputLabel-asterisk": {
      display: "none",
    },
    "& .MuiButton-root": {
      backgroundColor: "#94C794",
      color: "#fff",
      borderRadius: "30px",
      width: "230px",
      height: "40px",
      marginBottom: "40px",
    },
    "& .MuiButton-root.Mui-disabled ": {
      backgroundColor: "#B6B6B6",
      color: "rgba(98, 98, 98, 0.97)",
      borderRadius: "30px",
    },
  },
}));
const ContactUs = () => {
  const classes = useStyles();

  const [validState, setValidState] = useState({
    isRequired: true,
  });
  const initialFValues = {
    firstName: "",
    mail: "",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("firstName" in fieldValues)
      temp.firstName = /^[\u0600-\u06FF\s]+$/.test(fieldValues.firstName)
        ? ""
        : "لطفا نام خود را صحیح وارد کنید";

    if ("mail" in fieldValues)
      temp.mail =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
          fieldValues.mail
        )
          ? ""
          : "ایمیل خود را بدون خط فاصله و صحیح وارد کنید";
    setErrors({
      ...temp,
    });
    setValidState({
      isRequired: true,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange } = useForm(
    initialFValues,
    true,
    validate
  );
  const disableBtn =
    validState.isRequired && Object.values(values).findIndex((k) => !k) > -1;
  return (
    <Aux>
      <Layout>
        <div className={styled.topBannerContainer}>
          <div className={styled.topBanner}>
            <p className={styled.bannerTitle}>منتظر تماس شما هستیم</p>
          </div>
        </div>
        <div className={styled.contactConatiner}>
          <div className={styled.contactInfoConatiner}>
            <p className={styled.contactInfoTitle} data-aos="fade-down">
              با ما در تماس باشید{" "}
            </p>
            <div className={styled.contactInfo}>
              <div
                className={styled.contactInfoCol}
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <ContactEnvelop />
                <p className={styled.emailInfo}>support@jafaro.com</p>
                <p className={styled.emailInfo}>sales@jafaro.com</p>
              </div>
              <div
                className={styled.contactInfoCol}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <ContactPin />
                <p className={styled.locationInfo}>
                تهران ، خ سعادتی، کوچه خردمندشمالی ساختمان جافارو 
                </p>
              </div>
              <div
                className={styled.contactInfoCol}
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <ContactCall />
                <div className={styled.phoneInfo}>
                  <p>۰۲۱-۲۲۷۷۳۴۷۲</p>
                  <p>پشتیبانی</p>
                </div>
                <div className={styled.phoneInfo}>
                  <p>۰۲۱-۲۲۷۷۴۱۰۰</p>
                  <p>فروش</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styled.contactFormContainer}>
            <p className={styled.contactFormTitle}>
              ثبت سوالات و پیشنهادات
            </p>
            <div className={styled.contactForm}>
              <Form className={classes.root}>
                <TextField
                  label="نام کاربری"
                  value={values.firstName}
                  name="firstName"
                  onChange={handleInputChange}
                  variant="outlined"
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
                <TextField
                  label="ایمیل"
                  value={values.mail}
                  name="mail"
                  onChange={handleInputChange}
                  variant="outlined"
                  error={!!errors.mail}
                  helperText={errors.mail}
                />
                <TextField
                  variant="outlined"
                  id="outlined-multiline-static"
                  label="پیام شما"
                  multiline
                  rows={10}
                  name="story"
                  onChange={handleInputChange}
                />
                <div className={styled.sendButton}>
                  <Button
                    disabled={disableBtn}
                    variant="contained"
                    className={classes.button}
                  >
                    ثبت
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          <div className={styled.socialmediaContainer}>
            <p className={styled.socialmediaTitle}>
              به شبکه های اجتماعی ما بپیوندید
            </p>
            <Socialmediagreen />
          </div>
        </div>

        <MainInfo />
      </Layout>

      <Footer />
    </Aux>
  );
};
export default ContactUs;
