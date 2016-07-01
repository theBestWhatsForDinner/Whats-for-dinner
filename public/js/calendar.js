var app = angular.module("mealPlannerApp");

app.controller("CalendarController", ["$scope", "theService", function ($scope, theService) {
    $scope.mealsList = [];
    //commented untell tied in so not throw errs
//    function PlanMeals() {
//        theService.getRecipes().then(function(meals) {
//            $scope.events = meals;
//        })
//    };
//    PlanMeals();
  // ... code omitted ...
  // Dates can be passed as strings or Date objects 
  $scope.calendarOptions = {
    defaultDate: "2016-10-10",
    minDate: new Date(),
    maxDate: new Date([2020, 12, 31]),
    dayNamesLength: 3, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
    multiEventDates: false, // Set the calendar to render multiple events in the same day or only one event, default is false
    maxEventsPerDay: 1, // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
    eventClick: $scope.eventClick,
    dateClick: $scope.dateClick
  };
}])