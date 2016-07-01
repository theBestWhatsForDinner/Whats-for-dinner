var app = angular.module("mealPlannerApp");

app.controller("RecipeController", ["$scope", "theService", function ($scope, theService) {

    $scope.theService = theService;

    $scope.theService.getRecipe().then(function (response) {
        $scope.cookBook = response.data;
    });

    $scope.postRecipes = function (recipe) {
        theService.postRecipe(recipe).then(function () {
            $scope.recipe = null;
        })
    }


}]);
