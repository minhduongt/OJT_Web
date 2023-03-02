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
import AboutPage from "../pages/AboutPage";
import ProcessPage from "../pages/ProcessPage";
import IssuePage from "../pages/IssuePage";
import NotiPage from "../pages/NotiPage";

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
      <Route
        path="/about"
        element={
          <Layout formLayout={"assets/profileBg.png"} height={"2006px"}>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/process"
        element={
          <Layout formLayout={"assets/profileBg.png"} height={"2006px"}>
            <ProcessPage />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <LandingPage />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/apply"
        element={
          <Layout formLayout={"assets/profileBg.png"} height={"1400px"}>
            <ApplyPage />
          </Layout>
        }
      />
      <Route path="/profile" element={<ProfilePage />} />
      <Route
        path="/editprofile"
        element={
          <Layout formLayout={"assets/profileBg.png"} height={"1400px"}>
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
      <Route
        path="/notifications"
        element={
          <Layout formLayout={"assets/profileBg.png"} height={"1539px"}>
            <NotiPage />
          </Layout>
        }
      />
      <Route
        path="/issues"
        element={
          <Layout formLayout={"assets/profileBg.png"} height={"2473px"}>
            <IssuePage />
          </Layout>
        }
      />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default Router;
