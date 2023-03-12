import React, { Component } from "react";
import "../App.css";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
const Auth = () => {
    const {
      authState: {isAuthenticated },
    } = useContext(AuthContext);
  if (isAuthenticated) return <Redirect to="/dashboard" />;
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
