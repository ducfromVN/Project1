const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post('/', async (req, res) => {
	const { urlproduct,nameProduct, description, price, quantity } = req.body

	// Simple validation
	try {
		const newPost = new Post({
			urlproduct,
      nameProduct,
			description,
			price,
			status: status || 'TO LEARN',
			user: req.userId
		})

		await newPost.save()

		res.json({ success: true, message: 'Happy learning!', post: newPost })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})
module.exports = router;
