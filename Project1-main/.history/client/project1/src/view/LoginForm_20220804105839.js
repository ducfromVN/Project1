import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import React, { Component } from "react";
const LoginForm = () => {
  // Context
//   const { loginUser } = useContext(AuthContext);

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

    // try {
    //   const loginData = await loginUser(loginForm);
    //   if (!loginData.success) {
    //     setAlert({ type: "danger", message: loginData.message });
    //     setTimeout(() => setAlert(null), 5000);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
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
          class="password"
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
      </Form>
    </>
  );
};

export default LoginForm;
