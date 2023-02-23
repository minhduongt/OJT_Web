import React, { useEffect, useParams, useState } from "react";
import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import ApplyPage from "../pages/ApplyPage";
import CompaniesPage from "../pages/Companies";
import JobsPage from "../pages/Jobs";
import LoginPage from "../pages/Login";
import ProfilePage from "../pages/Profile";
import LandingPage from "../pages/LandingPage";
import Page404 from "../pages/Page404";
import Layout from "../pages/Layout";

const Router = () => {
  const navigate = useNavigate();
  const [isFirtLoad, SetIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirtLoad) navigate("/login");
  }, [isFirtLoad]);
  const FirstLoaded = () => {
    SetIsFirstLoad(true);
    console.log("loaded");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout isMinHeight={true}>
            <LandingPage />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage firstLoaded={FirstLoaded} />} />
      <Route
        path="/apply"
        element={
          <Layout isMinHeight={false}>
            <ApplyPage />
          </Layout>
        }
      />
      <Route path="/profile" element={<ProfilePage />} />
      <Route
        path="/jobs"
        element={
          <Layout isMinHeight={false}>
            <JobsPage />
          </Layout>
        }
      />
      <Route
        path="/companies"
        element={
          <Layout isMinHeight={false}>
            <CompaniesPage />
          </Layout>
        }
      />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default Router;
