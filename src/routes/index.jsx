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
import EditProfile from "../pages/EditProfile";

const Router = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

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
      <Route path="/login" element={<LoginPage />} />
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
        path="/editprofile"
        element={
          <Layout isMinHeight={false}>
            <EditProfile />
          </Layout>
        }
      />
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
