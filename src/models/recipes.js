var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var recipesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    prepTime: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number, // on a scale of 1 to 5, 1 being easy, 5 being difficult
        required: true
    },
    foodImg: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Recipes", recipesSchema);
