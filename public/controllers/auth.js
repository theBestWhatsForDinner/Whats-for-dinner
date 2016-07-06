var app = angular.module("mealPlannerApp");

app.controller("authController", ["$scope", "authService", "$location", function ($scope, authService, $location) {


    //    loggedIn();
    $scope.newUser = function (user) {
        authService.signup(user).then(function (response) {
            console.log(response);
            $location.path("/login");
        });
    };
    $scope.logIn = function (user) {
        authService.login(user).then(function (response) {
            $scope.token = true;
            $location.path("/home");
        });
    };

}]);
