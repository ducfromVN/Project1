import React from "react";

const AddProduct = () => {
  return <div>
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
      </Form>
  </div>;
};

export default AddProduct;
