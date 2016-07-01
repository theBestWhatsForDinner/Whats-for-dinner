var app = angular.module("mealPlannerApp");

var controller = app.controller("authController", ["$scope", "authService", "$location", function ($scope, authService, $location) {
    
//    loggedIn();
    $scope.newUser = function (user) {
        authService.signup(user).then(function (responce) {
            console.log(responce);
            $location.path("/login");
        });
    };
    $scope.logIn = function (user) {
        authService.login(user).then(function (responce) {
            localStorage.setItem("token", responce.token);
            localStorage.setItem("_id", responce.user._id);
            $location.path("/");
        });
    };
    
}]);