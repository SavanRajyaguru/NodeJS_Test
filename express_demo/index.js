const express = require("express");
const app = express();

/// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  /// next middleware
  next();

  /// termination
  //res.send("Testing");
};

app.get("/", logger, (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

app.listen(5000, () => console.log("Server is running..."));
