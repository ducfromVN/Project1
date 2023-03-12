const express = require("express");
const { deleteProduct } = require("../../../server/controller/productControllers");
const router = express.Router();
const {
  getProducts,
  getProductById,
  postProduct,
} = require("../controller/productControllers");
router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/:id",deleteProduct)
router.post("/", postProduct);
module.exports = router;
