// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// // import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import authReducer from "./store/reducers/register";
// import productReducer from "./store/reducers/products";

import "./index.css";
import App from "./App";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";

//animation
import AOS from "aos";

AOS.init({
  offset: 200,
  delay: 0,
  once: true,
  duration: 1000,
});



const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
reportWebVitals();

