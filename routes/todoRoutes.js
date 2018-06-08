const express = require("express");
const router = express.Router();

var {mongoose} = require("../db/mongoose");
var {Todo} = require("../models/todo");
var {User} = require("../models/user");
var {ObjectID} = require("mongodb");

router.get('/todos/:id', (req, res) => {
    // Get id
    var id = req.params.id;
 
    // Validate id
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
 
    // Find id from database
    Todo.findById(id).then((doc) => {
        if(!doc){
            return res.status(404).send();
        }
        res.send({doc});
    }).catch((e) => {
        res.status(400).send();
    });
 });

    
 router.post('/todos', (req, res) => {   
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(404).send(err);
    });
});

router.delete("/todos/:id", (req, res) => {
    var id = req.params.id;

    // Validate id
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    // Find id
    Todo.findByIdAndRemove(id).then((doc) => {
        // Validate again
        if(!doc){
            return res.status(404).send();
        }
        res.send("Removed");
    }).catch((err) => {
        res.status(404).send(err);
    })
})

module.exports = router;