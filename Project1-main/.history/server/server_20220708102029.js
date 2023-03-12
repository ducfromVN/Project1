const express = require("express");
require("dotenv").config();
const connectDb = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
