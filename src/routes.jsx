import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "@src/shared/constants";
import LoginPage from "@src/pages/Login";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
