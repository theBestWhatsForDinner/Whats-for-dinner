var app = angular.module("mealPlannerApp");

app.controller("PantryController", ["$scope", "theService", function ($scope, theService) {


    $scope.theService = theService;

    $scope.pantry;

    $scope.theService.getPantry().then(function (response) {
        $scope.pantry = response.data;

        console.log($scope.pantry);

        for (i = 0; i < $scope.pantry.length; i++) {
            if (Math.ceil((Date.parse($scope.pantry[i].expiration) - Date.now()) / 86400000) < 3) {

            }
        }
    });

    $scope.addIngredient = function () {
        $scope.theService.postIngredient($scope.ingredient).then(function (response) {
            $scope.pantry.push(response.data);
        });
    };

    $scope.deleteIngredient = function (item) {
        $scope.theService.deleteIngredient(item._id).then(function (response) {
            $scope.pantry.splice(($scope.pantry.indexOf(item)), 1);
        });
    };

    $scope.quantityUp = function (item) {


        var ingredientIndex = $scope.pantry.indexOf(item)

        var ingredient = $scope.pantry[ingredientIndex];

        ingredient.quantity++;

        $scope.theService.putIngredient(item._id, ingredient).then(function (response) {

        });
    };

    $scope.quantityDown = function (item) {

        var ingredientIndex = $scope.pantry.indexOf(item)

        var ingredient = $scope.pantry[ingredientIndex];

        ingredient.quantity--;

        $scope.theService.putIngredient(item._id, ingredient).then(function (response) {

            if (response.data.quantity < 1) {
                $scope.deleteIngredient(item);
            }
        });
    };
}]);

app.filter('expirationFilter', function () {

    return function (expiration) {

        var currentDate = Date.now();
        var expireDate = Date.parse(expiration);
        var countdown = Math.ceil((expireDate - currentDate) / 86400000);

        return countdown;

    }
});

app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});