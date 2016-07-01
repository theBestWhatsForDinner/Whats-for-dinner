var app = angular.module("mealPlannerApp");

app.service("theService", ["$http", function ($http) {

    var baseAuthUrl = "http://localhost:8000/auth/";
    var baseRecipeUrl = "http://localhost:8000/api/recipes/";
    var basePantryUrl = "http://localhost:8000/api/pantry/";

    //******RECIPES******

    //Get all Recipes


    this.getRecipes =
        function () {
            return $http.get(baseRecipeUrl);
        };


    //Get single Recipe

    this.getRecipe = function (recipeKey) {
        return $http.get(baseRecipeUrl + recipeKey);
    };

    //Add new Recipe

    this.postRecipe = function (recipe) {
        return $http.post(baseRecipeUrl, recipe);
    };

    //Edit Recipe

    this.putRecipe = function (key, recipe) {
        return $http.put(baseRecipeUrl + recipe._id, recipe);
    };

    //Delete Recipe

    this.deleteRecipe = function (recipe) {
        return $http.delete(baseRecipeUrl + recipe._id);
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
        return $http.put(basePantryUrl + ingredient._id, ingredient);
    };

    //Delete Ingredient in Pantry

    this.deleteIngredient = function (ingredient) {
        return $http.delete(basePantryUrl + ingredient._id);
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