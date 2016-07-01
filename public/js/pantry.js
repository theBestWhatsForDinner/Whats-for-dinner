var app = angular.module("mealPlannerApp");

app.controller("PantryController", ["$scope", "theService", function ($scope, theService) {


    $scope.theService = theService;

    $scope.theService.getPantry().then(function (response) {
        $scope.pantry = response.data;
        console.log($scope.pantry);
    });

    $scope.deleteIngredient = function (index) {

        $scope.theService.deleteIngredient(index).then(function (response) {
            $scope.pantry = response.data;
            

        });
    };
    
//     $scope.quantityUp = function (index) {
//
//        var pantry = $scope.pantry;
//
//        var ingredient = $scope.pantry.comments[index];
//
//        article.comments[index].likes++;
//
//        $scope.theService.putLikes(articleKey, comment, article).then(function (response) {
//
//        });
//    };
//
//    $scope.quantityDown = function (index) {
//
//        var article = $scope.article;
//
//        var comment = $scope.article.comments[index];
//
//        article.comments[index].likes--;
//
//        $scope.theService.putLikes(articleKey, comment, article).then(function (response) {
//
//        });

 
}]);