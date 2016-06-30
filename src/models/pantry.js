var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pantrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    itemImg: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("PantryItems", pantrySchema);
