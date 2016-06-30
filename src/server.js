var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var morgan = require("morgan");
var config = require("./config");
var port = process.env.PORT || 8000;
var recipesSchema = require("./models/recipes");
var expressJwt = require("express-jwt");

mongoose.connect(config.database, function () {
    console.log("Mongoose is chasing the snake!");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", expressJwt({
    secret: config.secret
}));

app.use("/auth", require("./routes/authRoutes"));
app.use("/api/recipes", require("./routes/recipeRoutes"));

app.listen(port, function () {
    console.log("I hear dead people...");
});
