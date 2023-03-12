import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import React, { Component } from "react";
import Admin from "../components/auth/Admin";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Auth = ({ authRoute }) => {
//   const {
//     authState: { authLoading, isAuthenticated },
//   } = useContext(AuthContext);


  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>DucNguyenShop</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Auth;
