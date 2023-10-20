const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const postRoute = require("../routes/post");

app.use(express.json());
const port = 3005;
app.use(postRoute);

const url = process.env.DB_CONNECTION;

app.get("/", (req, res) => {
  res.send("hello this my first node application gg");
});
// Connect to MongoDB
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`the server is running ${port}`);
});
