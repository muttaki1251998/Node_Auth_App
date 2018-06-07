const express = require("express");
const bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

//app init
var app = express();

//body-parser mw
app.use(bodyParser.json());

app.post('/todos', (req, res) => {   
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
})

var port = 3000;
app.listen(port, () => {
    console.log("Server started on port " + port);
})