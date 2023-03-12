import React, { Component } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreenDashboard from "./HomeScreenDashboard";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const handleClick = () => {
    console.log("123");
    return <Redirect to="admin/dashboard/addproducts" />;
  };

  return (
    <div className="landing">
      <div className="dark-overlay">
        <Form onSubmit={handleClick}>
          <Button variant="success" type="submit">
            Thêm mới sản phẩm
          </Button>
        </Form>
        <div className="landing-inner">
          <HomeScreenDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
