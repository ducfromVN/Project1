import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreenDashboard from "./HomeScreenDashboard";
import AddProduct from "../screens/AddProduct";
const Dashboard = ({ authRoute }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">

        <        <Button variant="success" type="submit">
          Đăng nhập
        </Button>
        <div className="landing-inner">
          <HomeScreenDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
