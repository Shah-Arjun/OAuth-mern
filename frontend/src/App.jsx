import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GoogleLogin from "../src/components/GoogleLogin";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleLogin />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
