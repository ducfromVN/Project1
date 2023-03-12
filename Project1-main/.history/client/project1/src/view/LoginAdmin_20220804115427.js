import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const LoginAdmin = ({ authRoute }) => {
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

export default Dashboard;
