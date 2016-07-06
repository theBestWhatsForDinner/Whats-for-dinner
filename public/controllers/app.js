var app = angular.module("mealPlannerApp", ["ngRoute", "ngAnimate", "500tech.simple-calendar"]);

app.controller("indexController", ["$scope", "$location", "authService", function ($scope, $location, authService) {

    this.authService = authService;

    $scope.scroll = function () {
        window.scroll(0, 0);
    };

    $scope.logOut = function () {
        authService.removeUser()
        localStorage.removeItem("token");
        localStorage.removeItem("_id");
        $location.path("/logout");

    };

    $scope.loggedIn = function () {
        var token = localStorage.getItem("token");
        if (token) {
            return true;
        } else {
            return false;
        }
    }

}]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/pantry", {
            templateUrl: "pages/pantry.html",
            controller: "PantryController"
        })
        .when("/calendar", {
            templateUrl: "pages/calendar.html",
            controller: "CalendarController"
        })
        .when("/recipes/:recipeId", {
            templateUrl: "pages/recipe.html",
            controller: "RecipeController"
        })
        .when("/recipes/:date.event[0].titleId", {
            templateUrl: "pages/recipe.html",
            controller: "RecipeController"
        })
        .when("/recipes", {
            templateUrl: "pages/recipes.html",
            controller: "RecipeController"
        })
        .when("/home", {
            templateUrl: "pages/home.html",
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
            controller: "ProfileController"
        })
        .otherwise({
            templateUrl: "./auth/landing.html",
            controller: "authController"
        });
});
