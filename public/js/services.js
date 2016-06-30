var app = angular.module("mealPlannerApp");

app.service("theService", ["$http", function ($http) {

    //******RECIPES******

    //Get all Recipes

    this.getRecipes =
        $http.get("http://localhost:4000/recipes");

    //Get single Recipe

    this.getRecipe = function (recipeKey) {
        return $http.get("http://localhost:4000/recipes/" + recipeKey);
    };

    //Add new Recipe

    this.postRecipe = function (recipe) {
        return $http.post("http://localhost:4000/recipes/", recipe);
    };

    //Edit Recipe

    this.putRecipe = function (key, recipe) {
        return $http.put("http://localhost:4000/recipes/" + recipe._id, recipe);
    };

    //******PANTRY******

    //List ingredients in Pantry

    this.getIngredients =
        $http.get("http://localhost:4000/pantry");

    //Add Ingredient to Pantry

    this.postIngredient = function (ingredient) {
        return $http.post("http://localhost:4000/pantry/", ingredient);
    };
    
    //Delete Ingredient in Pantry

    this.deletePantry = function (ingredient) {
        return $http.delete("http://localhost:4000/pantry" + ingredient._id).then(function (response) {



        });
    };
    this.deleteTrip = function (trip) {
        return $http.delete("http://localhost:4000/commutes/" + key + "/trips/" + trip._id).then(function (response) {



        });
    };


}]);