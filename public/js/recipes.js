var app = angular.module("mealPlannerApp");

app.controller("RecipeController", ["$scope", "theService", "$routeParams", function ($scope, theService, $routeParams) {

    $scope.theService = theService;

    $scope.theService.getRecipe().then(function (response) {
        $scope.cookBook = response.data;
    });

    $scope.postRecipes = function () {
        $scope.theService.postRecipe($scope.recipe).then(function (response) {
            $scope.cookBook.push(response.data);
            $scope.recipe = null;
        })
    }

    $scope.theService.getRecipeId($routeParams.recipeId).then(function (recipe) {
        $scope.recipe = recipe;
    });


}]);
