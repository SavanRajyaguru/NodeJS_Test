const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

/// req => middleware => res

app.use([authorize, logger]);

app.get("/", (req, res) => {
  console.log(req.user);
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About</h1>");
});

app.get("/api/product", (req, res) => {
  res.status(200).send("<h1>Product</h1>");
});

app.get("/api/data", (req, res) => {
  res.status(200).send("<h1>Api Data</h1>");
});

app.listen(5000, () => console.log("Server is running..."));
