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
    expiration: {
        type: Date,
        required: true
    },
    expiringSoong: {
        type: Boolean,
        default: false
    },
    url: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("PantryItems", pantrySchema);
