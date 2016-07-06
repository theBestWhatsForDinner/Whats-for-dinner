var app = angular.module("mealPlannerApp");

app.controller("ProfileController", ["$scope", "authService", function ($scope, authService) {

    $scope.authService = authService;
    switch (authService.currentUser.skill) {
    case 1:
        $scope.imgUrl = "http://thedumpandpourchef.com/wp-content/uploads/2015/10/small-chef.png";
        break;
    case 2:
        $scope.imgUrl = "http://danshultz.github.io/talks/cooking_with_chef/images/SouthParkChef.png";
        break;
    case 3:
        $scope.imgUrl = "https://muppetmindset.files.wordpress.com/2014/06/swedish-chef.png";
        break;
    case 4:
        $scope.imgUrl = "http://www.clipartbest.com/cliparts/9i4/o5A/9i4o5AAxT.png";
        break;
    case 5:
        $scope.imgUrl = "http://vignette4.wikia.nocookie.net/quiz-rpg-the-world-of-mystic-wiz/images/4/4d/Mostro_(Monster_Chef)_transparent.png/revision/latest?cb=20141025100050";
        break;
    }

}])

app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
