import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "@src/shared/constants";

import LoginPage from "@src/pages/Login";
import Register from "@src/pages/Register/Register";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
