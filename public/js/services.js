var app = angular.module("mealPlannerApp");

app.service("theService", ["$http", function ($http) {

    var baseAuthUrl = "http://localhost:8000/auth/";
    var baseRecipeUrl = "http://localhost:8000/api/recipes/";
    var basePantryUrl = "http://localhost:8000/api/pantry/";

    //******RECIPES******

    //Get all Recipes

    this.cookBook = [];
    var self = this;

    this.getRecipe = function () {
        return $http.get(baseRecipeUrl).then(function (response) {
            self.cookBook = response.data;
        })
    }

    this.postRecipe = function (recipe) {
        return $http.post(baseRecipeUrl, recipe).then(function (response) {
            self.cookBook.push(response.data);
        });
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
