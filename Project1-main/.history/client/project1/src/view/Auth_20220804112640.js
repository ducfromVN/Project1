import React, { Component } from "react";
import Admin from "../components/auth/Admin";
import "../App.css";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
const Auth = ({ authRoute }) => {
  //   const {
  //     authState: { authLoading, isAuthenticated },
  //   } = useContext(AuthContext);



  const auth = {}
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>DucNguyenShop</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
