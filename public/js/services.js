var app = angular.module("mealPlannerApp");

app.service("theService", ["$http", function ($http) {

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

    this.getRecipeId = function (recipeId) {
        var recipe = {};
        return $http.get(baseRecipeUrl + recipeId).then(function (response) {
            return recipe;
        });
    }

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

    this.getTitle = function () {
        return $http.get(baseRecipeUrl).then(function (responce) {
            var list = responce.data;
            var titleList = [];
            var length = list.length;
            for (var i = 0; i < length; i++) {
                titleList.push(list[i].title);
            };
            return titleList;
        })
    };

    //******AUTH******

    this.postSignup = function (signup) {
        return $http.post(baseAuthUrl + "signup", signup);
    };

    this.postSignup = function (signup) {
        return $http.post(baseAuthUrl + "signup", signup);
    };

            }]);