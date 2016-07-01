var app = angular.module("mealPlannerApp");

app.controller("RecipeController", ["$scope", "theService", function ($scope, theService) {


    $scope.theService = theService;

    (function getRecipes() {
        theService.getRecipe().then(function () {})
    })();

    $scope.postRecipes = function (recipe) {
        theService.postRecipe(recipe).then(function () {
            $scope.recipe = null;
            $scope.recipes = theService.cookBook;
        })
    }


}]);
