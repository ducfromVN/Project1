import React from "react";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../view/AuthContext";
const AddProduct = () => {
  const { loginUser, loginAddProduct, addPost } = useContext(AuthContext);

  const [addProductForm, setAddProductForm] = useState({
    urlproduct: "",
    nameProduct: "",
    description: "",
    price: "",
    quantity: "",
  });

  const { urlproduct, nameProduct, description, price, quantity } =
    addProductForm;
  const onChangeAddProductForm = (event) =>
    setAddProductForm({
      ...addProductForm,
      [event.target.name]: event.target.value,
    });

  const submit = async (event) => {
    event.preventDefault();
    try {
      const AddProductdata = await addPost(addProductForm);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="landing">
      <Form className="my-4" onSubmit={submit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Điền Link ảnh sản phẩm"
            name="urlproduct"
            required
            value={urlproduct}
            onChange={onChangeAddProductForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Tên sản phẩm"
            name="nameProduct"
            required
            value={nameProduct}
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
            type="number"
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
