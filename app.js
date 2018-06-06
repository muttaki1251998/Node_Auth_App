const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/auth");

var todo = mongoose.model("Todo", {
    text : {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new todo({
    text: "I need to have lunch",
    completed: false,
    completedAt: 12
});

newTodo.save().then((data) => {
    console.log(JSON.stringify(data, undefined, 2));
}, (er) => {
    console.log("Data couldnt be saved. Error finding database", er);
});