var express = require("express");
var eventRouter = express.Router();
var events = require("../models/events");

eventRouter("/")
    .get(function (req, res) {
        events.find({
            user: req.user._id
        }, function (err, events) {
            if (err) res.status(500).send(err);
            res.send(events);
        });
    })
    .post(function (req, res) {
        newEvent = new events(req.body);
        newEvent.save(function (err, user) {
                if (err) res.status(500).send(err);
                else res.send({
                    success: true,
                    message: "Successfully added event",
                    event: newEvent
                });
            });
    })

module.exports = eventRouter;