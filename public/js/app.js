var app = angular.module("mealPlannerApp", ["ngRoute", "ngAnimate"]);

app.controller("indexController", ["$scope", function ($scope) {

    $scope.scroll = function () {
        window.scroll(0, 0);
    };
}]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/signup", {
            templateUrl: "signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "LoginController"
        })
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
        });
});