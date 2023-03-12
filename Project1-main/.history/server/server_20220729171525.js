require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const authRouter = require("./routes/auth");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
