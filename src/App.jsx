import React from "react";

import NavBar from "./components/NavBar";
import { authProtectedRoutes } from "./routes";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import { StoreProvider } from "./api/provider/ContextProvider";

import Test from "./components/Test";
import EcommerceProducts from "./pages/Ecommerce/EcommerceProducts";

// Import scss
import "./assets/scss/theme.scss";

function App() {
  return (
    <StoreProvider>
      <div id="layout-wrapper">
        {/* <NavBar /> */}
        {/* <Test /> */}
        <EcommerceProducts />
      </div>
      <Router></Router>
    </StoreProvider>
  );
}

export default App;
