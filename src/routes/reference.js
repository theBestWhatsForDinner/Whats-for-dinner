//var express = require("express");
//var beenPlacesRouter = express.Router();
//var BeenPlaces = require("../models/beenPlaces");
//
//beenPlacesRouter.get("/", function (req, res) {
//    BeenPlaces.find({
//        user: req.user._id
//    }, function (err, beenPlaces) {
//        if (err) res.status(500).send(err);
//        res.send(beenPlaces);
//    });
//});
//
//beenPlacesRouter.post("/", function (req, res) {
//    var newBeenPlaces = new BeenPlaces(req.body);
//    newBeenPlaces.user = req.user._id;
//    newBeenPlaces.save(function (err, beenPlace) {
//        if (err) res.status(500).send(err);
//        res.send(beenPlace);
//    });
//});
//
//beenPlacesRouter.get("/:beenId", function (req, res) {
//    BeenPlaces.findOne({
//        _id: req.params.beenId,
//        user: req.user._id
//    }, function (err, beenPlace) {
//        if (err) res.status(500).send(err);
//        else res.send(beenPlace);
//    });
//});
//
//beenPlacesRouter.put("/:beenId", function (req, res) {
//    BeenPlaces.findOneAndUpdate(req.params.beenId, req.body, {
//        new: true
//    }, function (err, beenPlace) {
//        if (err) res.status(500).send(err);
//        else res.send(beenPlace);
//    })
//})
//
//
//module.exports = beenPlacesRouter;



{
    "title": "spaghetti",
    "prepTime": 30,
    "ingredients": ["noodles", "sauce"],
    "directions": "Boil the noodles in a pot till soft, warm the sauce in a pan, mix together and enjoy",
    "difficulty": 1,
    "foodImg": "https://lasrecetasdemanu.files.wordpress.com/2014/02/spaghetti-bolognesa.jpg"
}
