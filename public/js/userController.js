var app = angular.module("mealPlannerApp");

app.controller("ProfileController", ["$scope", "authService", function ($scope, authService) {

    $scope.authService = authService;
    console.log(authService.currentUser);

}])
