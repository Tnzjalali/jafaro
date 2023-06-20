import axios from "axios";

import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
export const checkAuthTimeout = (expireationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expireationTime * 1000);
  };
};

export const auth = (emailOrPhone, verificationCode) => {
  return (dispatch) => {
    dispatch(authStart());

    let request = JSON.stringify({
      emailOrPhone: emailOrPhone,
      verificationCode: verificationCode,
    });
    var bodyFormData = new FormData();
    bodyFormData.append("request", request);
    let url = "http://urpi.mynewfarm.net/Methods/User/Access/GetAccessToken";
    axios
      .post(url, bodyFormData)
      .then((response) => {
        let expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);
        if (
          response.data.response.accessToken !== null &&
          response.data.response.accessToken !== undefined
        ) {
          localStorage.setItem("token", response.data.response.accessToken);
          localStorage.setItem("expirationDate", expirationDate);
          dispatch(authSuccess(response.data.response.accessToken));
        }
        console.log(response.data.response.accessToken);
        console.log(response);
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.errors));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};
export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 100
          )
        );
      }
    }
  };
};
