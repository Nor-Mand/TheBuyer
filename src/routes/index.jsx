import React from "react";
import { Redirect } from "react-router-dom";

import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts/index";

const authProtectedRoutes = [
  { path: "/ecommerce-products", component: EcommerceProducts },
];

export { authProtectedRoutes };
