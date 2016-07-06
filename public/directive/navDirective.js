var app = angular.module("mealPlannerApp");

app.directive("navBar", function() {
    return({
        restrict: "E",
        scope: "=",
        templateUrl: "./directive/navDirective.html"
        
    })
});