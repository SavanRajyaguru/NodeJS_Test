const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/products">products</a>');
});

// example of complex route
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProduct = [...products];

  /// Filter the product data
  if (search) {
    sortedProduct = sortedProduct.filter((item) => {
      return item.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }

  if (sortedProduct.length < 1) {
    return res.status(200).json({ sucess: true, data: [] });
  }
  res.status(200).json(sortedProduct);
});

// return only specific data form params
// example of param route
app.get("/api/products/:id", (req, res) => {
  const singleProduct = products.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!singleProduct) {
    return res.status(404).send("<h1>Product not found</h1>");
  }

  return res.json(singleProduct);
});

// map only specific field from products
app.get("/api/products", (req, res) => {
  const newProduct = products.map((item) => {
    const { id, name, image } = item;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.all("*", (req, res) => res.status(404).send("Resource not found..."));

app.listen(5000, () => console.log("Server is running..."));
