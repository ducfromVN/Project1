import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import React, { Component } from "react";
import { AuthContext } from "./AuthContext";
const LoginForm = () => {
  // Context
  const { loginUser, loginAddProduct } = useContext(AuthContext);

  // Local state
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
    } catch (error) {
      console.log(error);
    }
  };
  const addproduct = async (event) => {
    event.preventDefault();
    try {
      const loginAddProductdata = await loginAddProduct(loginForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Đăng nhập
        </Button>
        <Form className="my-4" onSubmit={addproduct}>
          <Button variant="success" type="submit">
            Thêm mới sản phẩm
          </Button>
        </Form>
      </Form>
    </>
  );
};

export default LoginForm;
