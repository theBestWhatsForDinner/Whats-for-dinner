var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var morgan = require("morgan");
var config = require("./config");
var port = process.env.PORT || 6000;
var recipesSchema = require("./models/recipes");
var userSchema = require("./models/user");

mongoose.connect(config.database, function () {
    console.log("Mongoose is chasing the snake!");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/recipes", recipesRouter);

app.listen(port, function () {
    console.log("I hear dead people...");
});
