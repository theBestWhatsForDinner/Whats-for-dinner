var app = angular.module("mealPlannerApp", ["ngRoute", "ngAnimate","500tech.simple-calendar"]);

app.controller("indexController", ["$scope", function ($scope) {

    $scope.scroll = function () {
        window.scroll(0, 0);
    };

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
            controller: "recipesController"
        })
        .when("/", {
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