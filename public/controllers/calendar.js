var app = angular.module("mealPlannerApp");

app.controller("CalendarController", ["$scope", "theService", function ($scope, theService) {
    $scope.cookBook = [];
    $scope.theService = theService;

    theService.getRecipe().then(function (response) {
        $scope.cookBook = response.data;
        $scope.events = [];
    });

    theService.getRecipeId().then(function (response) {
        $scope.event = response.data;
    });

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function getMonth() {
        var today = new Date();
        var days = [];
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var date = new Date(year, month, 1)
        for (var i = 0; date.getMonth() === month; i++) {
            var j = i + 1;
            days.push(year + ", " + month + ", " + j);
            date.setDate(date.getDate() + 1);
        }
        shuffle(days);
        return days
    };

    $scope.randomize = function () {
        $scope.events = [];
        var cookBookLength = $scope.cookBook.length;
        var dates = getMonth();
        for (var i = 0; i < cookBookLength; i++) {
            var event = {
                title: $scope.cookBook[i],
                date: new Date(dates[i])
            }
            $scope.events.push(event);
        };
        return $scope.events;
    };
    
    $scope.saveMeals = function () {
        for (var i = 0; i < $scope.events.length; i++) {
            theService.addEvent($scope.events[i]).then(function (response) {}, function(responce) {
                console.log(responce.data.message);
            });
        };
    };
    $scope.getMeals = function () {
        theService.getEvents().then(function (meals) {
            $scope.events = meals;
        });
    };

    $scope.calendarOptions = {
        defaultDate: new Date(),
        minDate: new Date(),
        maxDate: new Date([2020, 12, 31]),
        dayNamesLength: 9, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
        multiEventDates: false, // Set the calendar to render multiple events in the same day or only one event, default is false
        maxEventsPerDay: 1 // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
            //            eventClick: $scope.eventClick,
            //            dateClick: $scope.dateClick
    };
}]);

app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});