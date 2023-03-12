import React, { Component } from "react";
import Admin from "../components/auth/Admin";
import "../App.css";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../components/Product";
const Auth = ({ authRoute }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>DucNguyenShop</h1>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Auth;
