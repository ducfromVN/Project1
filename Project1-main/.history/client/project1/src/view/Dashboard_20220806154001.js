import React, { Component } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreenDashboard from "./HomeScreenDashboard";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const submit = () => {
    return <Redirect to="admin/dashboard/addproducts" />;
  };

  return (
    <div className="landing">
      <div className="dark-overlay">
      <button type="button" onClick={addToCartHandler}>
                  Thêm vào giỏ
                </button>
        {/* <Button variant="success" type="submit" onClick={submit}>
          Thêm mới sản phẩm
        </Button> */}
        <div className="landing-inner">
          <HomeScreenDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
