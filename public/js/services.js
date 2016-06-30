var app = angular.module("mealPlannerApp");

app.service("theService", ["$http", function ($http) {

    //******RECIPES******

    //Get all Recipes

    this.getRecipes =
        $http.get("http://localhost:8000/recipes");

    //Get single Recipe

    this.getRecipe = function (recipeKey) {
        return $http.get("http://localhost:8000/recipes/" + recipeKey);
    };

    //Add new Recipe

    this.postRecipe = function (recipe) {
        return $http.post("http://localhost:8000/recipes/", recipe);
    };

    //Edit Recipe

    this.putRecipe = function (key, recipe) {
        return $http.put("http://localhost:8000/recipes/" + recipe._id, recipe);
    };

    //Delete Recipe

    this.deleteRecipe = function (recipe) {
        return $http.delete("http://localhost:8000/recipes" + recipe._id).then(function (response) {});
    };

    //******PANTRY******

    //List ingredients in Pantry

    this.getIngredients =
        $http.get("http://localhost:8000/pantry");

    //Add Ingredient to Pantry

    this.postIngredient = function (ingredient) {
        return $http.post("http://localhost:8000/pantry/", ingredient);
    };

    //Delete Ingredient in Pantry

    this.deleteIngredient = function (ingredient) {
        return $http.delete("http://localhost:8000/pantry" + ingredient._id).then(function (response) {});
    };
    
    //******CALENDAR******

}]);