var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var events = new Schema({
    title: {
        type: {}
    },
    date: Date
})

module.exports = mongoose.model("events", events);