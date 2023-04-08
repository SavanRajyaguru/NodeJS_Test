const express = require("express");
const app = express();
const people = require('./routes/products')
const auth = require('./routes/auth')

app.use([express.json(), express.urlencoded({ extended: false })]);

app.use('/api/people', people);
app.use('/login', auth)

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(5000, () => console.log("Server is running..."));
