const express = require("express");
const app = express();
const path = require("path");

// setup static and middleware
app.use(express.static("./navbar-app"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

// * indicate the all file directory and all method pass through all the route
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found..</h1>");
});

app.listen(5000, () => console.log("Server is running..."));
