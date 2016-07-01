var app = angular.module("mealPlannerApp");

app.service("authService", ["$http", function ($http) {
    var baseurl = "http://localhost:8000/auth/";

    this.login = function (user) {
        return $http.post(baseurl + "login", user).then(function (responce) {
            return responce.data;
        })
    }
    this.signup = function (user) {
        return $http.post(baseurl + "signup", user).then(function (responce) {
            return responce.data;
        })
    }
    this.getToken = function() {
        return localStorage.getItem(token);
    }
    this.removeToken = function() {
        
    }
}])