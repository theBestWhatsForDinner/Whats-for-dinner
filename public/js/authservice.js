var app = angular.module("mealPlannerApp");

app.service("authService", ["$http", function ($http) {
    var baseurl = "http://localhost:8000/auth/";
    this.userProfiles = [];

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
