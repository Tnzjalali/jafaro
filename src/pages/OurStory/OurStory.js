import React, { useState } from "react";
import styled from "./OurStory.css";
import Layout from "../../hoc/Layout/Layout";
import image1 from "../../assets/images/photo_2023-05-16_19-40-57.jpg";
import Footer from "../../components/Footer/Footer";
import OurTeam from "../../components/OurTeam/OurTeam";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import Comments from "../../components/Comments/Comments";
import Aux from "../../hoc/Auxilary/Auxilary";
import { Form, useForm } from "../../components/UseForm/useForm";
import { Button, TextField, makeStyles } from "@material-ui/core";

const OurStory = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        width: "100%",
        margin: '0 auto'
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
  const classes = useStyles();
  document.title = "داستان ما | مزرعه ما";
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
            <p className={styled.bannerTitle}>معرفی جافارو</p>
          </div>
        </div>
        <div className={styled.ourstoryConatiner}>
          <div className={styled.ourWorkConatiner} data-aos="fade-down">
            <p className={styled.ourWorkTitle}>مسیر جافارو</p>
            <p className={styled.ourWorkTxt}>جافارو امکان سرمایه گذاری نسیتا پایدار به دور از هیجانات بازارهای بزرگ مالی را در بخش کشاورزی، باغداری، دامداری و دامپروری را برای همه اقشار جامعه با هر میزان از سرمایه فراهم خواهد کرد. جافارو مانند یک بازار بورس کوچک در زمینه تخصصی خود، امکان جذب سرمایه را برای تولیدکنندگان محصولات و کسانی که تمایل به سرمایه گذاری در این حوزه را دارند فراهم میکند. جافارو در راستای حفاظت از سرمایه سرمایه گذاران، به ارزیابی دقیق کالاهای سرمایه پذیر و داده های پیرامون محصولات, میزان بار و سود آنها می پردازد.
            </p>
          </div>
          <div className={styled.workwithuswaysConatiner} data-aos="fade-up">
            <img alt="ourstory" src={image1} />
            <p className={styled.workwithuswaysTitle}>
              نحوه همکاری با تیم جافارو
            </p>
            <p className={styled.workwithuswaysTxt}>
            در جافارو کشاورزان، باغداران و دامدارانی که برای توسعه کسب و کار خود به سرمایه گذاری نیازمندند می توانند با ما تماس و عضو خانواده جافارو شوند و دارایی­های خود را که امکان پذیرش سرمایه دارند، برای سرمایه گذاری مشتاقان در این حوزه به جافارو معرفی کنند. ما در کمترین زمان ممکن باآنها تماس گرفته و خواستار بررسی موقعیت مزرعه و وضعیت سلامتی دام ها خواهیم شد.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

          <p className={styled.ourWorkTitle}>نظرات مشتریان</p>
          <div className={styled.contactForm}>

            <Form className={classes.root}>
              <TextField
                label="شماره تلفن همراه"
                value={values.firstName}
                name="firstName"
                onChange={handleInputChange}
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName}
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
                  variant="contained"
                  className={classes.button}
                >
                  ثبت
                </Button>
              </div>
            </Form>
          </div>
        </div>

        <Footer />
      </Layout>
    </Aux>
  );
};
export default OurStory;
