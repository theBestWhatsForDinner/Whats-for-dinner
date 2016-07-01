var express = require("express");
var pantryRouter = express.Router();
var PantryItems = require("../models/pantry");

pantryRouter.get("/", function (req, res) {
    PantryItems.find({
        user: req._id
    }, function (err, pantryItems) {
        if (err) res.status(500).send(err);
        res.send(pantryItems);
    });
});

pantryRouter.post("/", function (req, res) {
    var newPantryItem = new PantryItems(req.body);
    newPantryItem.user = req.user._id;
    newPantryItem.save(function (err, pantryItem) {
        if (err) res.status(500).send(err);
        res.send(pantryItem);
    });
});

pantryRouter.get("/:pantryId", function (req, res) {
    PantryItems.findOne({
        _id: req.params.pantryId,
        user: req.user._id
    }, function (err, pantryItem) {
        if (err) res.status(500).send(err);
        else res.send(pantryItem);
    })
});

pantryRouter.put("/:pantryId", function (req, res) {
    PantryItems.findOneAndUpdate({
        _id: req.params.pantryId,
        user: req.user._id
    }, req.body, {
        new: true
    }, function (err, pantryItem) {
        if (err) res.status(500).send(err);
        else res.send(pantryItem);
    })
});

pantryRouter.delete("/:pantryId", function (req, res) {
    PantryItems.findOneAndRemove({
        _id: req.params.pantryId,
        user: req.user._id
    }, function (err, pantryItem) {
        if (err) res.status(500).send(err);
        else res.send(pantryItem);
    })
});

module.exports = pantryRouter;
