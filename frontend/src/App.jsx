import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GoogleLogin from "./components/GoogleLogin";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RefreshHandler from "./components/RefreshHandler";

/* ===========================================
   Google Auth Wrapper
=========================================== */
const GoogleAuthWrapper = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <GoogleLogin />
    </GoogleOAuthProvider>
  );
};

/* ===========================================
   Private Route Component
=========================================== */
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

/* ===========================================
   App Component
=========================================== */
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // ✅ hook inside component

  return (
    <BrowserRouter>
      {/* Refresh auth state from localStorage */}
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />  {/* ✅ correct prop */}

      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;