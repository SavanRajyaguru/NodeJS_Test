const express = require('express');
const { people } = require('../data');
const router = express.Router();

router.post('/', (req, res) => {
    // const { name } = req.body;
    const person = people.find(person => person.name === req.body.name);
    if (person) {
        return res.status(200).send(`Welcome ${person.name}`)
    }
    res.status(404).send('Please provide Credentials');
})

module.exports = router;