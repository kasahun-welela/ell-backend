const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello this my first node application");
});

app.listen(3005, () => {
  console.log("the server is running");
});
