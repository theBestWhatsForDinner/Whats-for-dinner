var app = angular.module("mealPlannerApp");

app.controller("PantryController", ["$scope", "theService", function ($scope, theService) {


    $scope.theService = theService;

    $scope.theService.getPantry().then(function (response) {
        $scope.pantry = response.data;
        console.log($scope.pantry);
    });

    $scope.deleteIngredient = function () {

        $scope.theService.deleteIngredient().then(function (response) {
            $scope.pantry = response.data;

        });
    }

    //
    //    (function () {
    //        var _id = localStorage.getItem("_id");
    //        theService.getPantry(_id).then(function (response) {
    //            $scope.pantry = response.data;
    //        });
    //    }())
}]);