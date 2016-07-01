var app = angular.module("mealPlannerApp");

app.controller("PantryController", ["$scope", "theService", function ($scope, theService) {

   var pantry = [
        {
            title: "Eggs",
            quantity: 12,
            expiration: 3,
            url: "http://www.browneggsandlamb.com/images/stories/4eggs.png"
        },
        {
            title: "Cilantro Bunch",
            quantity: 2,
            expiration: 5,
            url: "http://bengardranch.com/wp-content/uploads/2012/03/cilantro_i.png"
        }
    ]
    
    (function(){
        var _id = localStorage.getItem("_id");
       theService.getPantry(_id).then(function (response) {
        $scope.pantry = response.data;
    });  
    }())
    
    
}]);