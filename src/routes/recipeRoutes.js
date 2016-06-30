var express = require("express");
var recipesRouter = express.Router();
var Recipes = require("../models/recipes");

recipesRouter.route("/")
    .get(function (req, res) {
        Recipes.find({
            user: req.user._id
        }, function (err, recipes) {
            if (err) res.status(500).send(err);
            else res.send(recipes);
        });
    })
    .post(function (req, res) {
        var newRecipe = new Recipes(req.body);
        newRecipe.user = req.user._id;
        newRecipe.save(function (err, recipe) {
            if (err) res.status(500).send(err);
            else res.status(201).send(recipe);
        });
    });

recipesRouter.route("/:recipeId")
    .get(function (req, res) {
        Recipes.findOne({
            _id: req.params.recipeId,
            user: req.user
        })
    });
module.exports = ("recipesRouter", recipesRouter);