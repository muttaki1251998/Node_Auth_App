const _ = require('lodash')
const express = require('express');
const router = express.Router();


var {mongoose} = require("../db/mongoose");
var {User} = require("../models/user");
var {ObjectID} = require("mongodb");

router.post("/users", (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

module.exports = router;