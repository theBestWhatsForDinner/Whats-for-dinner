var app = angular.module("mealPlannerApp");

app.controller("PantryController", ["$scope", "theService", function ($scope, theService) {


    $scope.theService = theService;

    $scope.theService.getPantry().then(function (response) {
        $scope.pantry = response.data;
    });

    $scope.addIngredient = function () {
        $scope.theService.postIngredient($scope.ingredient).then(function (response) {
            $scope.pantry.push(response.data);
        });
    };

    $scope.deleteIngredient = function (id, index) {
        $scope.theService.deleteIngredient(id).then(function (response) {
            $scope.pantry.splice(index, 1);
        });
    };

    $scope.quantityUp = function (index) {

        var pantry = $scope.pantry;

        var ingredient = $scope.pantry[index];

        ingredient.quantity++;

        $scope.theService.putIngredient(ingredient._id, ingredient).then(function (response) {

        });
    };

    $scope.quantityDown = function (index) {

        var pantry = $scope.pantry;

        var ingredient = $scope.pantry[index];

        ingredient.quantity--;

        $scope.theService.putIngredient(ingredient._id, ingredient).then(function (response) {

            if (response.data.quantity < 1) {
                $scope.deleteIngredient(ingredient._id, index);

            }
        });

    };
}]);

app.filter('expirationFilter', function () {

    // Create the return function
    // set the required parameter name to **number**
    return function (expiration) {

        //        var totalSec = totalTime;

        var today = new Date;

        console.log(today);
        console.log(expiration);

        var countdown = today - expiration;

        return countdown;

    }
});

app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
