// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;








import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";

// import * as actions from "./store/actions/index";
import Home from "./pages/Home/Home";
import RTL from "./hoc/RTL/RTL";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import ProductsCats from "./pages/ProductsCats/ProductsCats.js";
import Products from "./pages/Products/Products";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import OurStory from "./pages/OurStory/OurStory";
import ContactUs from "./pages/ContactUs/ContactUs";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";



class App extends Component {

  render() {
    const theme = createTheme({
      direction: "rtl",
      typography: {
        fontFamily: "IRANSansWeb",
      },
      "& fieldset": {
        borderRadius: "25px",
      },
    });
    let routes = (
      <Switch>

        <Route path="/products" component={ProductsCats} exact />
        <Route path="/products/:id" component={Products} />
        <Route path="/product/:id/:productId" component={ProductDetail} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/aboutus" component={OurStory} />


        <Route path="/orders" component={Orders} />
<Route path="/cart" component={Cart} />

<Route path="/cart" component={Cart} />
        <Route path="/" component={Home} exact />
      </Switch>
    );
    if (this.props.isAuthenticated !== null && this.props.isAuthenticated) {
      routes = (
        <Switch>

          <Route path="/products" component={ProductsCats} exact />
          <Route path="/products/:id" component={Products} />
          <Route path="/product/:id/:productId" component={ProductDetail} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/aboutus" component={OurStory} />



          <Route path="/orders" component={Orders} />
<Route path="/cart" component={Cart} />
          <Route path="/" component={Home} exact />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <ThemeProvider theme={theme}>
        <RTL>
          <BrowserRouter>{routes}</BrowserRouter>
        </RTL>
      </ThemeProvider>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     isAuthenticated: state.auth.token !== null,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState()),
//   };
// };

export default App;
