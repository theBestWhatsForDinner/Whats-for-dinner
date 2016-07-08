var app = angular.module("mealPlannerApp");

app.service("authService", ["$http", function ($http) {
    var baseurl = "/auth/";

    this.currentUser = getOrSetUser() || {};
    var self = this;

    function getOrSetUser(user) {
        if (user === undefined) {
            return localStorage.user;
        } else {
            localStorage.user = user;
            return user;
        }
    }

    this.removeUser = function () {
        delete localStorage.user;
    }

    this.login = function (user) {
        return $http.post(baseurl + "login", user).then(function (response) {
            localStorage.setItem("token", response.data.token);
            self.currentUser = getOrSetUser(response.data.user);
            return response;
        })
    }
    this.signup = function (user) {
        return $http.post(baseurl + "signup", user).then(function (response) {
            return response.data;
        })
    }
    this.getToken = function () {
        //        var token = localStorage.getItem(token);
        return ("yep");
        console.log(token);
        //        if (token === null) {
        //            return "nope"
        //        }
        //        return token;
    }
    this.removeToken = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("_id");
    }
}]);
