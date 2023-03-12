import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreenDashboard from "./HomeScreenDashboard";
const Dashboard = ({ authRoute }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
      <AddProduct/>
        <div className="landing-inner">
          <HomeScreenDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
