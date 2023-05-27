import React from "react";
import { useSelector } from "react-redux";

import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  //const location = useLocation();

  let { status } = useSelector((store) => store.authManager);
  console.log(status);
  if (!status) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
