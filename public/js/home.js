var app = angular.module("mealPlannerApp");
app.controller("HomeController", ["$scope", "$http", "theService", function ($scope, $http, theService) {

    $scope.theService = theService;
    $scope.theService.getPantry().then(function (response) {

    });

}]);