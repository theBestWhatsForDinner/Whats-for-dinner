var app = angular.module("mealPlannerApp");

var controller = app.controller("CalendarController", ["$scope", "calanderService"function ($scope, calanderService) {
    $scope.mealsList = [];
    function () {
        calanderService.getMeals().then(function(meals) {
            $scope.mealsList = meals;
        })
    }();
    
}]);