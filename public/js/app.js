var app = angular.module("mealPlannerApp", ["ngRoute", "ngAnimate", "500tech.simple-calendar"]);

app.controller("indexController", ["$scope", "$location", function ($scope, $location) {

    $scope.scroll = function () {
        window.scroll(0, 0);
    };

    $scope.logOut = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("_id");
        $location.path("/logout");
        $scope.token = false;
    };

    function loggedIn() {
        var token = localStorage.getItem("token");
        if (token) {
            $scope.token = true;
        } else {
            $scope.token = false;
        }
    }
    loggedIn();

}]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/pantry", {
            templateUrl: "pantry.html",
            controller: "PantryController"
        })
        .when("/calendar", {
            templateUrl: "calendar.html",
            controller: "CalendarController"
        })
        .when("/recipes/:recipeId", {
            templateUrl: "recipe.html",
            controller: "RecipeController"
        })
        .when("/recipes", {
            templateUrl: "recipes.html",
            controller: "RecipeController"
        })
        .when("/home", {
            templateUrl: "home.html",
            controller: "HomeController"
        })
        .when("/login", {
            templateUrl: "./auth/login.html",
            controller: "authController"
        })
        .when("/signup", {
            templateUrl: "./auth/signup.html",
            controller: "authController"
        })
        .when("/settings", {
            templateUrl: "./auth/userprofile.html",
            controller: "authController"
        })
        .otherwise({
            templateUrl: "./auth/landing.html",
            controller: "authController"
        });
});
