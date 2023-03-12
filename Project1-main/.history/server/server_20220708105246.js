const express = require("express");
require("dotenv").config();
const connectDb = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use("/api/products");

const PORT = process.env.PORT || 5000;

connectDb();
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
