const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./backEnd/Routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
if(process.env.NODE_ENV === "production"){
    // Serve up static assets
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

app.get("*", function(req, res){
    res.sendFile(__dirname + "/client/build/index.html")
});

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/vibez",
    {
        useMongoClient: true
    }
);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});