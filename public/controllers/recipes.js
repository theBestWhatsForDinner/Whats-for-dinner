var app = angular.module("mealPlannerApp");

app.controller("RecipeController", ["$scope", "theService", function ($scope, theService) {

    $scope.theService = theService;
    
    $scope.ingredients = [];
    
    $scope.addIngredient = function () {
        $scope.ingredients.push($scope.ingredient);
        $scope.ingredient = "";
    }

    $scope.theService.getRecipe().then(function (response) {
        $scope.cookBook = response.data;
    });

    $scope.postRecipes = function () {
        
        $scope.recipe.ingredients = $scope.ingredients;
        $scope.theService.postRecipe($scope.recipe).then(function (response) {
            $scope.cookBook.push(response.data);
            $scope.recipe = null;
            $scope.ingredients = [];
        })
    }

    $scope.theService.getRecipeId().then(function (response) {
        $scope.recipe = response.data;
    })

}]);

app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
