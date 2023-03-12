
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import React, { Component } from "react";
const Auth = ({ authRoute }) => {
    const {
      authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);
  
    let body;
  
    if (authLoading)
      body = (
        <div className="d-flex justify-content-center mt-2">
          <Spinner animation="border" variant="info" />
        </div>
      );
    else if (isAuthenticated) return <Redirect to="/dashboard" />;
    else
      body = (
        <>
          {authRoute === "login" && <LoginForm />}
          {authRoute === "register" && <RegisterForm />}
        </>
      );
  
    return (
      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1>DucNguyenShop</h1>
            {body}
          </div>
        </div>
      </div>
    );
  };
  
  export default Auth;
  

export default Auth;