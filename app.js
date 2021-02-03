const express = require("express");
const bodyParser = require('body-parser')
var app = express();
var PORT = 3000 || process.env.PORT;
var fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

//configuring the database
const dbConfig = require('./config/dbConfig.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connecting to the database
mongoose.connect(dbConfig.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})


app.get("/", function (req, res) {
  res.send("Server is live.");
});

require('./routes/user.route')(app);
require('./routes/todo.route')(app);
require('./routes/aggregrate.route')(app);

app.listen(PORT, () => {
  console.log("Server is litening on " + PORT);
});
