import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

export default ProtectedRoute;
