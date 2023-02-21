import React, { useParams } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import ApplyPage from "../pages/ApplyPage";
import CompaniesPage from "../pages/Companies";
import JobsPage from "../pages/Jobs";
import LoginPage from "../pages/Login";
import ProfilePage from "../pages/Profile";
import LandingPage from "../pages/LandingPage";
import Page404 from "../pages/Page404";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default Router;
