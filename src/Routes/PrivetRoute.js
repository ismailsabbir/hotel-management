import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Context/Usercontext";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();
  if (loading) {
    return <div>loading</div>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default PrivetRoute;
