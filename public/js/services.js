var app = angular.module("mealPlannerApp");

app.service("theService", ["$http", function ($http) {

    var baseUrl = "http://localhost:8000/api/";

    //******RECIPES******

    //Get all Recipes

    this.getRecipes =
        $http.get(baseUrl + "recipes");

    //Get single Recipe

    this.getRecipe = function (recipeKey) {
        return $http.get(baseUrl + "recipes/" + recipeKey);
    };

    //Add new Recipe

    this.postRecipe = function (recipe) {
        return $http.post(baseUrl + "recipes/", recipe);
    };

    //Edit Recipe

    this.putRecipe = function (key, recipe) {
        return $http.put(baseUrl + "recipes/" + recipe._id, recipe);
    };

    //Delete Recipe

    this.deleteRecipe = function (recipe) {
        return $http.delete(baseUrl + "recipes" + recipe._id);
    };

    //******PANTRY******

    //List ingredients in Pantry

    this.getPantry =
        return $http.get(baseUrl + "pantry");

    //Add Ingredient to Pantry

    this.postIngredient = function (ingredient) {
        return $http.post(baseUrl + "pantry/", ingredient);
    };

    //Change Ingredient Quantity

    this.putIngredient = function (key, ingredient) {
        return $http.put(baseUrl + "pantry/" + ingredient._id, ingredient);
    };

    //Delete Ingredient in Pantry

    this.deleteIngredient = function (ingredient) {
        return $http.delete(baseUrl + "pantry" + ingredient._id);
    };

    //******CALENDAR******

}]);