import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "../auth/pages/Login";

import AdminDashboard from "../admin/pages/Dashboard";

import DealerDashboard from "../dealer/pages/Dashboard";

import UserDashboard from "../user/pages/Dashboard";

const AppRoutes = () => {

  return (

    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/dealer/dashboard"
        element={<DealerDashboard />}
      />

      <Route
        path="/user/dashboard"
        element={<UserDashboard />}
      />

    </Routes>
  );
};

export default AppRoutes;