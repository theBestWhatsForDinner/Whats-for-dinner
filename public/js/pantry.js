var app = angular.module("mealPlannerApp");

app.controller("PantryController", ["$scope", "theService", function ($scope, theService) {

    $scope.pantry = [
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
    
}]);