var app = angular.module("CalanderApp");

app.service("calanderService", ["$http", function ($http) {

    var baseUrl = "";
    
    this.getMeals = function(){
        return $http.get(baseUrl, function(responce) {
            return responce.data;
        })
    };
    
}]);