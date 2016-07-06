var express = require("express");
var eventRouter = express.Router();
var events = require("../models/events");

eventRouter.route("/")
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
        newEvent.user = req.user._id;
        newEvent.save(function (err, event) {
                if (err)res.status(500).send(err);
                else res.send({
                    success: true,
                    message: "Successfully added event",
                    event: event
                });
            });
    })

module.exports = eventRouter;