import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreenDashboard from "./HomeScreenDashboard";
const Dashboard = ({ authRoute }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>DucNguyenShop</h1>
          <HomeScreenDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
