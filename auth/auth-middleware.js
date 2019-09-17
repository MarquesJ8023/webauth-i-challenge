const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
    let { username, password } = req.headers;

    Users.findBy({ username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            next();
        } else {
            res.status(401).json({ message: 'You shall not pass'});
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
};

function fetch() {
    const reqOptions = {
        headers: {
            username: '',
            password: '',
        },
    };
}