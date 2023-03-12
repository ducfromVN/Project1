const mongoose = require("mongoose");
const Schema = mongoose.Schema
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
