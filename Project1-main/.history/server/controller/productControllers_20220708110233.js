const Product = require("../models/Product");

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const getAllProductById = async (req, res) => {
  try {
    const products = await Product.findById(re);

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
