import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const userEmail = localStorage.getItem("userEmail");

  // If no userEmail in localStorage, redirect to login
  if (!userEmail) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the protected component
  return children;
}

export default ProtectedRoute;