const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  getProductById,
} = require("../controller/productControllers");

// @desc GET all products from db
// @route GET /api/products
// @access Public
route.get("/", getAllProduct);
// @desc GET all products by id from db
// @route GET /api/:id
// @access Public
route.get("/:id", getProduct);

module.exports = router;
