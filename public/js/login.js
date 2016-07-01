var app = angular.module("mealPlannerApp");

app.controller("LoginController", ["$scope", "theService", function ($scope, theService) {

    $scope.login = function () {

        var loginData = {
            username: $scope.username,
            password: $scope.password,
            admin: true
        };

        $scope.theService = theService;
        $scope.theService.postLogin(loginData).then(function (response) {

            $scope.username = "";
            $scope.password = "";
        });
    };
}]);