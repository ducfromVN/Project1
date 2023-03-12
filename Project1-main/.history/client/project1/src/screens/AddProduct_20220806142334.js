import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddProduct = () => {
  return (
    <div>
      <Form className="my-4" onSubmit={login}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Điền Link ảnh sản phẩm"
            name="urlproduct"
            required
            value={urlproduct}
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
          Thêm mới sản phẩm
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
