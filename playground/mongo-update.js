const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/auth", (err, db) => {
    if(err) {
        console.log("Unable to connect to server");
    }
    
    console.log("Connected to Mongo server");

    db.collection("todos").findOneAndUpdate({
        _id: new ObjectID("5b184f97898cdb28d790f331")
    }, {
       $set: {
           text: "Lunch done again"
       }
    }, {
        $inc: {
            completedAt: 1
        }
    },{
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
});