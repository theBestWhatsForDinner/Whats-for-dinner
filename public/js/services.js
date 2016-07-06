var app = angular.module("mealPlannerApp");

app.service("theService", ["$http", "$routeParams", function ($http, $routeParams) {

    var baseAuthUrl = "http://localhost:8000/auth/";
    var baseRecipeUrl = "http://localhost:8000/api/recipes/";
    var basePantryUrl = "http://localhost:8000/api/pantry/";

    //******RECIPES******

    //Get all Recipes

    this.getRecipe = function () {
        return $http.get(baseRecipeUrl);
    };

    // Add recipes to cook book

    this.postRecipe = function (recipe) {
        return $http.post(baseRecipeUrl, recipe);
    };

    this.getRecipeId = function () {
        return $http.get(baseRecipeUrl + $routeParams.recipeId).then(function (response) {
            return response;
        })
    };

    //******PANTRY******

    //List ingredients in Pantry


    this.getPantry = function () {
        return $http.get(basePantryUrl);
    };

    //Add Ingredient to Pantry

    this.postIngredient = function (ingredient) {
        return $http.post(basePantryUrl, ingredient);
    };

    //Change Ingredient Quantity

    this.putIngredient = function (key, ingredient) {
        return $http.put(basePantryUrl + key, ingredient);
    };

    //Delete Ingredient in Pantry

    this.deleteIngredient = function (id) {


        return $http.delete(basePantryUrl + id);
    };

    //******CALENDAR******


    //******AUTH******

    this.postSignup = function (signup) {
        return $http.post(baseAuthUrl + "signup", signup);
    };

    this.postSignup = function (signup) {
        return $http.post(baseAuthUrl + "signup", signup);
    };

            }]);
