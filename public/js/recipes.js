var app = angular.module("mealPlannerApp");

app.controller("RecipeController", ["$scope", "theService", function ($scope, theService) {


    $scope.theService = theService;

    $scope.theService.getRecipes().then(function (response) {
        $scope.recipes = response.data;
        console.log($scope.recipes);
    });

    $scope.deleteIngredient = function () {

        $scope.theService.deleteRecipe().then(function (response) {
            $scope.recipes = response.data;

        });
    }
}]);
