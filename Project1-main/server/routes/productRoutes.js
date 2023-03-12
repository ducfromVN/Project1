const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  postProduct,
  deleteProduct
} = require("../controller/productControllers");
router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.post("/", postProduct);
module.exports = router;
