const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');


const db = require('./data/dbConfig.js');
const Users = require('./users/users-model.js');
const restricted = require('./auth/auth-middleware.js');

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send("Got this far");
});

server.post('/api/register', (req, res) => {
    let { username, password } = req.body;

    const hash = bcrypt.hashSync(password, 8);

    Users.add({ username, password: hash })
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

server.post('/api/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({message: `Logged in`});
        } else {
            res.status(401).json({ message: 'You shall not pass'});
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

server.get('/api/users', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => res.send(err));
});

server.get('/hash', (req, res) => {
    const name = req.query.name;

    const hash = bcrypt.hashSync(name, 8);
    res.send(`the hash for ${name} is ${hash}`);
});



const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})