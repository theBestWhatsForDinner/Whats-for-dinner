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
                if (err)res.status(418).send({err: err, success: false, message: "that day has a planned meal already"});
                else res.send({
                    success: true,
                    message: "Successfully added event",
                    event: event
                });
            });
    })
eventRouter.route("/:id")
    .delete(function (req, res) {
            events.findOneAndRemove({
        _id: req.params.id,
        user: req.user._id
    }, {new: false}, function (err, event) {
        if (err) res.status(500).send(err);
        else res.send(event);
    });
            })

module.exports = eventRouter;