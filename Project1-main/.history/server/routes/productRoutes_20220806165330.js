const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  postProduct,
} = require("../controller/productControllers");
router.get("/", getProducts);
router.get("/:id", getProductById);
router.POST("/", postProduct);
module.exports = router;
