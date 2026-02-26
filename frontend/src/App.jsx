import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GoogleLogin from "../src/components/GoogleLogin";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import {GoogleOAuthProvider} from '@react-oauth/google'


  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    )
  }


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
