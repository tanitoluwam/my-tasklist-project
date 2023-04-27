import React from "react";
import { useAuthContext } from "context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return<>{children}</> ;
};
