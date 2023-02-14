import React, { useParams } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Page404 from "../pages/Page404";

const Router = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default Router;
