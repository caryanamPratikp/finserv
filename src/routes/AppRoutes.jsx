import React from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import Login from "../auth/pages/Login";

import Register from "../auth/pages/Register";

import AdminDashboard from "../admin/pages/Dashboard";

import DealerDashboard from "../dealer/pages/Dashboard";

import UserDashboard from "../user/pages/Dashboard";

const AppRoutes = () => {

  return (

    <Routes>

      {/* LOGIN */}

      <Route
        path="/"
        element={<Login />}
      />

      {/* REGISTER */}

      <Route
        path="/register"
        element={<Register />}
      />

      {/* ADMIN */}

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      {/* DEALER */}

      <Route
        path="/dealer/dashboard"
        element={<DealerDashboard />}
      />

      {/* USER */}

      <Route
        path="/user/dashboard"
        element={<UserDashboard />}
      />

    </Routes>
  );
};

export default AppRoutes;