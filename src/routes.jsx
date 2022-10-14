import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "@src/shared/constants";

import LoginPage from "@src/pages/Login";
import Register from "@src/pages/Register/";
import Home from "@src/pages/Home";
import ProductDetail from "./containers/Product/ProductDetail";
export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CATALOGPRODUCTID} element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
