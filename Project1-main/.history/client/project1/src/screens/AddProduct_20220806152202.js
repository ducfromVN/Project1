import React from "react";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddProduct = () => {
  const [addProductForm, setAddProductForm] = useState({
    username: "",
    password: "",
  });

  return (
    <div>
      <Form className="my-4" onSubmit={submit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Điền Link ảnh sản phẩm"
            name="urlproduct"
            required
            value={urlproduct}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Tên sản phẩm"
            name="name"
            required
            value={name}
            onChange={onChangeAddProductForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Mô tả sản phẩm"
            name="description"
            required
            value={description}
            onChange={onChangeAddProductForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Giá sản phẩm"
            name="price"
            required
            value={price}
            onChange={onChangeAddProductForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Số lượng"
            name="quantity"
            required
            value={quantity}
            onChange={onChangeAddProductForm}
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
