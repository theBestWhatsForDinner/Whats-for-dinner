var app = angular.module("mealPlannerApp");

app.controller("HomeController", ["$scope", "$http", "theService", "$location", function ($scope, $http, theService, $location) {
    // checks for token without makeing call to the server
    (function () {
        var token = localStorage.getItem("token");
        if (!token) {
            $location.path("/landing")
        }
    }());
    //    $scope.theService = theService;
    //    $scope.theService.getPantry().then(function (response) {
    //
    //    });

}]);
