import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "../components/Product";
const Dashboard = ({ authRoute }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>DucNguyenShop</h1>
          <HomeScreen />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
