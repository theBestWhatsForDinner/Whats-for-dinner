var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var events = new Schema({
    title: {
        type: {},
        required: true
    },
    date: {
        type: Date,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("events", events);