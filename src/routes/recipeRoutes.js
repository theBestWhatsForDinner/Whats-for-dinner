var express = require("express");
var recipesRouter = express.Router();
var Recipes = require("../models/recipes");

recipesRouter.get("/", function (req, res) {
    Recipes.find({
        user: req.user._id
    }, function (err, recipes) {
        if (err) res.status(500).send(err);
        res.send(recipes);
    });
});

recipesRouter.post("/", function (req, res) {
    var newRecipe = new Recipes(req.body);
    newRecipe.user = req.user._id;
    newRecipe.save(function (err, recipe) {
        if (err) res.status(500).send(err);
        res.send(recipe);
    });
});

recipesRouter.get("/:recipeId", function (req, res) {
    Recipes.findOne({
        _id: req.params.recipeId,
        user: req.user._id
    }, function (err, recipe) {
        if (err) res.status(500).send(err);
        else res.send(recipe);
    })
});

recipesRouter.put("/:recipeId", function (req, res) {
    Recipes.findOneAndUpdate({
        _id: req.params.recipeId,
        user: req.user._id
    }, req.body, {
        new: true
    }, function (err, recipe) {
        if (err) res.status(500).send(err);
        else res.send(recipe);
    })
});

recipesRouter.delete("/:recipeId", function (req, res) {
    Recipes.findOneAndRemove({
        _id: req.params.recipeId,
        user: req.user._id
    }, function (err, recipe) {
        if (err) res.status(500).send(err);
        else res.send(recipe);
    })
});

module.exports = recipesRouter;
