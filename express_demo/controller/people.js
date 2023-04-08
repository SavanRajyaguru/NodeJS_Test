let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json(people);
};

const getSpecifyPeople = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(200).json({ success: true, message: 'Id not present!!' })
    }
    return res.status(200).json({ success: true, data: person });
};

const addPeople = (req, res) => {
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
}

const updatePeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // TODO: name is null
    if (!name) {
        return res.status(404).send("name is null");
    }
    if (!id) {
        return res.status(404).send("ID not found!!");
    }

    // TODO: find id in people
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
};


const deletePeople = (req, res) => {
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
};

module.exports = {
    getSpecifyPeople,
    getPeople,
    addPeople,
    updatePeople,
    deletePeople
}