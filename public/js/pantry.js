var app = angular.module("mealPlannerApp");

app.controller("PantryController", ["$scope", "theService", function ($scope, theService) {


    $scope.theService = theService;

    $scope.theService.getPantry().then(function (response) {
        $scope.pantry = response.data;
        
        console.log($scope.pantry);
        
        for (i = 0; i < $scope.pantry.length; i++) {
            if (Math.ceil((Date.parse($scope.pantry[i].expiration) - Date.now())/86400000) < 3) {
                
            }
        }
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

    return function (expiration) {

        var currentDate = Date.now();
        var expireDate = Date.parse(expiration);
        var countdown = Math.ceil((expireDate - currentDate) / 86400000);

        return countdown;

    }
});