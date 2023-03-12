const Product = require("../models/Product");

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
  } catch (error) {}
};
