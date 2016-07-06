var app = angular.module("mealPlannerApp");

app.controller("CalendarController", ["$scope", "theService", function ($scope, theService) {
    $scope.mealsList = [];


    theService.getTitle().then(function (titleList) {
        $scope.mealsList = titleList;

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

        function planMeals() {
            var mealsLength = $scope.mealsList.length;
            $scope.events = [];
            var dates = getMonth();
            for (var i = 0; i < mealsLength; i++) {
                var event = {
                    title: $scope.mealsList[i],
                    date: new Date(dates[i])
                };
                $scope.events.push(event);
            }
            console.log($scope.events);
            return $scope.events;
        }
        $scope.randomize = function(){
            planMeals();
        }
        
        
        $scope.calendarOptions = {
            defaultDate: new Date(),
            minDate: new Date(),
            maxDate: new Date([2020, 12, 31]),
            dayNamesLength: 9, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
            multiEventDates: false, // Set the calendar to render multiple events in the same day or only one event, default is false
            maxEventsPerDay: 1, // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
            eventClick: $scope.eventClick,
            dateClick: $scope.dateClick
        };
    });
    
    
    
}])