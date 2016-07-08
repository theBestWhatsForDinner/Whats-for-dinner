var app = angular.module("mealPlannerApp");

app.service("theService", ["$http", "$routeParams", function ($http, $routeParams) {

    var baseAuthUrl = "/auth/";
    var baseRecipeUrl = "/api/recipes/";
    var basePantryUrl = "/api/pantry/";
    var baseApiUrl = "/api/";

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
        return $http.get(baseRecipeUrl + $routeParams.recipeId);
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

    this.getTitle = function () {
        return $http.get(baseRecipeUrl).then(function (response) {
            var list = response.data;
            var titleList = [];
            var length = list.length;
            for (var i = 0; i < length; i++) {
                titleList.push(list[i].title);
            };
            return titleList;
        })
    };

    this.addEvent = function (event) {
        return $http.post(baseApiUrl + "events", event).then(function (responce) {
            return responce.data;
        })
    };
    this.getEvents = function () {
        return $http.get(baseApiUrl + "events").then(function (responce) {
            return responce.data
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
