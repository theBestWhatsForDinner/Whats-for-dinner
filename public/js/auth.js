var app = angular.module("mealPlannerApp");

var controller = app.controller("authController", ["$scope", "authService", "$location", function ($scope, authService, $location) {
    
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
            localStorage.setItem("token", response.token);
            // i stored the id to use in requests
            localStorage.setItem("_id", response.user._id);
            $location.path("/home");
        });
    };
    
}]);