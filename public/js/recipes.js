var app = angular.module("mealPlannerApp");

app.controller("RecipeController", ["$scope", "theService", function ($scope, theService) {

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

    $scope.theService.getRecipeId().then(function (response) {
        $scope.recipe = response.data;
    })

}]);
