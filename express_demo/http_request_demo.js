const express = require("express");
const app = express();
const { people } = require("./data");
const { readFile } = require("fs");

app.use([express.json(), express.urlencoded({ extended: false })]);

app.get("/api/users", (req, res) => {
  res.send(people);
});

/// Post request
app.post("/login", (req, res) => {
  const { name, id } = req.body;
  if (name && id) {
    const data = { id: id, name: name };
    people.push(data);
    return res.status(200).send(people);
  }
  if (!name || !id) {
    return res.status(400).send({ success: false, msg: "Please enter name!!" });
  }
  res.status(401).send("Please Provide Credential");
});

/// PUT request
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  /// name is null
  if (!name) {
    return res.status(404).send("name is null");
  }
  if (!id) {
    return res.status(404).send("ID not found!!");
  }

  /// find id in people
  const person = people.find((item) => item.id === Number(id));
  console.log(person);

  if (!person) {
    return res
      .status(400)
      .send({ success: false, msg: `no person with id:${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  console.log(newPeople);
  return res.status(200).send({ success: true, data: newPeople });
});

/// Delete request
app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(400)
      .send({ success: false, msg: `no person with id:${req.params.id}` });
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  console.log(newPeople);

  return res.status(200).json({ success: true, data: newPeople });
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(5000, () => console.log("Server is running..."));
