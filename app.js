const express = require("express");
const app = new express();

const data = [
  { id: 1, name: "savan" },
  { id: 2, name: "demo" },
  { id: 3, name: "demo1" },
];
app.get("/", (req, res) => {
  res.send("<h1>Savan Rajyaguru</h1>");
});

app.get("/api/data", (req, res) => {
  res.send(data);
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running... ${port}`));
