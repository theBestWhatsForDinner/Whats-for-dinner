var app = angular.module("CalanderApp");

app.service("calanderService", ["$http", function ($http) {

    var baseUrl = "localhost://8000/models/recipes";
    
    this.getMeals = function(){
        return $http.get(baseUrl, function(responce) {
            return responce.data;
        })
    };
    
}]);