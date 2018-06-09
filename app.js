const express = require("express");
const bodyParser = require("body-parser");

//app init
var app = express();

//body-parser mw
app.use(bodyParser.json());

// Set express routes
var todoRoute = require("./routes/todoRoutes");
var userRoute = require("./routes/userRoutes");

// Set location
app.use("/todos", todoRoute);
app.use("/users", userRoute);

module.exports = app;

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Server started on port " + port);
})