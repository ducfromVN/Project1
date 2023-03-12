const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post('/posts', async (req, res) => {
	const { imageUrl,nameproduct, description, price, quantity } = req.body
	// Simple validation
	try {
		const newPost = new Post({
			imageUrl,
      nameproduct,
			description,
			price,
			countInStock
		})
		await newPost.save()
		res.json({ success: true, message: 'Happy!', post: newPost })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})
module.exports = router;
