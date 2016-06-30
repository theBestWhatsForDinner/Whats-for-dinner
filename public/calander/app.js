var app = angular.module("CalanderApp", []);

var controller = app.controller("mainCalander", ["$scope", "calanderService"function ($scope, calanderService) {
    $scope.mealsList = [];
    function () {
        calanderService.getMeals().then(function(meals) {
            $scope.mealsList = meals;
        })
    }();
}]);