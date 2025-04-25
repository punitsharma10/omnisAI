import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { Chat } from "../Pages/Chat";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};
