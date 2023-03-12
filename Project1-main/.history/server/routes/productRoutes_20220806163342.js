const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post('/addproducts', async (req, res) => {
	const { urlproduct,nameProduct, description, price, quantity } = req.body
	// Simple validation
	try {
		const newPost = new Post({
			urlproduct,
      nameProduct,
			description,
			price,
			quantity
		})
		await newPost.save()
		res.json({ success: true, message: 'Happy!', post: newPost })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})
module.exports = router;
