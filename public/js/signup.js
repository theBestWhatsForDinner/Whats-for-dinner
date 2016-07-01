var app = angular.module("mealPlannerApp");

app.controller("SignupController", ["$scope", "theService", function ($scope, theService) {

    $scope.signup = function () {

        var signupData = {
            username: $scope.username,
            password: $scope.password,
            admin: true
        };

        $scope.theService = theService;
        $scope.theService.postSignup(signupData).then(function (response) {

            $scope.username = "";
            $scope.password = "";
        });
    };
}]);