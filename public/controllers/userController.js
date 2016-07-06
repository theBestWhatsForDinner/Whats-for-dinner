var app = angular.module("mealPlannerApp");

app.controller("ProfileController", ["$scope", "authService", function ($scope, authService) {

    $scope.authService = authService;
    console.log(authService.currentUser);

}])

app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
