const express = require('express');
const router = express.Router();
const { getPeople, getSpecifyPeople, addPeople, updatePeople, deletePeople } = require('../controller/people');

// * GET request
router.get("/", getPeople);

// * GET Specify people
router.get('/:id', getSpecifyPeople)

// * Post request
router.post("/", addPeople);


// * PUT request
router.put("/:id", updatePeople);

// * Delete request
router.delete("/:id", deletePeople);

module.exports = router 