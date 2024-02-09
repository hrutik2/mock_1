
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Feed } from "../pages/feed";

export const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Login />} />
      <Route path="/" element={<Feed />} />
      //<Route path="/feed/:id" element={<Login />} />
    </Routes>
  );
};

