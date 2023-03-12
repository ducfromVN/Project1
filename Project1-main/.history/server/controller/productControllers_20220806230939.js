const Product = require("../models/Product");

const postProduct = async (req, res) => {
  const { imageUrl, nameproduct, description, price, countInStock } = req.body;
  console.log(price);
  try {
    console.log(price);
    const newProduct = await new Product({
      imageUrl,
      nameproduct,
      description,
      price,
      countInStock,
    });
    await newProduct.save();
    res.json({ success: true, message: "Happy!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi" });
  }
};
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
  postProduct,
};
