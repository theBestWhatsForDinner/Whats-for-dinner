var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var morgan = require("morgan");
var config = require("./config");
var port = process.env.PORT || 8000;
var path = require("path");
var recipesSchema = require("./models/recipes");
var expressJwt = require("express-jwt");

mongoose.connect(config.database, function () {
    console.log("Mongoose is chasing the snake!");
});
// this will console log only if connected to mongodb
mongoose.connection.on("connected", function () {
    console.log("Pop goes the weasel");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/recipes", require("./routes/recipeRoutes"));

app.use("/api", expressJwt({
    secret: config.secret
}));

//app.use("/home", expressJwt({
//    secret: config.secret
//}));

app.use("/auth", require("./routes/authRoutes"));
app.use("/api/recipes", require("./routes/recipeRoutes"));
app.use("/api/pantry", require("./routes/pantryRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));

app.listen(port, function () {
    console.log("I hear dead people..." + port);
});
