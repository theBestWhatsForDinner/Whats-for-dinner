angular.module('500tech.simple-calendar', []).directive('simpleCalendar', function () {
    return {
        restrict: 'E',
        scope: {
            options: '=?',
            events: '=?',
            cookBook: '=?'
        },
        templateUrl: 'directive/calendarTemplate.html',
        controller: ['$scope', "$http", function ($scope, $http) {
            var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var calculateSelectedDate, calculateWeeks, allowedDate, bindEvent;

            $scope.options = $scope.options || {};
            $scope.options.dayNamesLength = $scope.options.dayNamesLength || 1;
            $scope.options.multiEventDates = $scope.options.multiEventDates || false;
            $scope.options.maxEventsPerDay = $scope.options.maxEventsPerDay || 3;

            $scope.addDay = function (date) {
                var thisDay = new Date(date.year + ', ' + (date.month + 1) + ', ' + date.day);
                var newEvent = {
                    title: date.chosenRecipe,
                    date: thisDay
                };
                $http.post("http://localhost:8000/api/events", newEvent).then(function (responce) {
                    if (responce.data.success === true) {
                        var responceEvent = responce.data.event;
                        // date parser might need refractoring single diget days/months
                        responceEvent.date = new Date(responceEvent.date.slice(0, 4) + ", " + responceEvent.date.slice(5, 7) + ", " + responceEvent.date.slice(8, 10));
                        console.log(responceEvent);
                        $scope.events.push(responce.data.event);
                        $scope.events = $scope.events;
                        date.event.push(responceEvent);
                    } else {
                        console.log(responce.data.message);
                    }
                });
            };

            $scope.deleteEvent = function (date) {
                var id = date.event[0]._id;
                $http.delete("http://localhost:8000/api/events/" + id).then(function (responce) {
                    if (responce.data.success === true) {
                        var eventLength = $scope.events.length;
                        for (var i = 0; i < eventLength; i++) {
                            if ($scope.events[i]._id === id) {
                                $scope.events.splice(i, 1);
                                date.event.splice(0,1);
                                break;
                            }
                        }
                    } else {
                        console.log(responce.data);
                    }
                });
            };

            $scope.onClick = function (date) {
                if (!date || date.disabled) {
                    return;
                }
                if (date.event) {
                    $scope.options.eventClick(date);
                } else {
                    $scope.options.dateClick(date);
                }
            };

            if ($scope.options.minDate) {
                $scope.options.minDate = new Date($scope.options.minDate);
            }

            if ($scope.options.maxDate) {
                $scope.options.maxDate = new Date($scope.options.maxDate);
            }

            bindEvent = function (date) {
                if (!date || !$scope.events) {
                    return;
                }
                date.event = [];
                $scope.events.forEach(function (event) {
                    event.date = new Date(event.date);
                    if (date.year === event.date.getFullYear() && date.month === event.date.getMonth() && date.day === event.date.getDate()) {
                        date.event.push(event);
                    }
                });
            };

            allowedDate = function (date) {
                if (!$scope.options.minDate && !$scope.options.maxDate) {
                    return true;
                }
                var currDate = new Date([date.year, date.month + 1, date.day]);
                if ($scope.options.minDate && (currDate < $scope.options.minDate)) {
                    return false;
                }
                if ($scope.options.maxDate && (currDate > $scope.options.maxDate)) {
                    return false;
                }
                return true;
            };

            $scope.allowedPrevMonth = function () {
                var prevYear = null;
                var prevMonth = null;
                if (!$scope.options.minDate) {
                    return true;
                }
                var currMonth = MONTHS.indexOf($scope.selectedMonth);
                if (currMonth === 0) {
                    prevYear = ($scope.selectedYear - 1);
                } else {
                    prevYear = $scope.selectedYear;
                }
                if (currMonth === 0) {
                    prevMonth = 11;
                } else {
                    prevMonth = (currMonth - 1);
                }
                if (prevYear < $scope.options.minDate.getFullYear()) {
                    return false;
                }
                if (prevYear === $scope.options.minDate.getFullYear()) {
                    if (prevMonth < $scope.options.minDate.getMonth()) {
                        return false;
                    }
                }
                return true;
            };

            $scope.allowedNextMonth = function () {
                var nextYear = null;
                var nextMonth = null;
                if (!$scope.options.maxDate) {
                    return true;
                }
                var currMonth = MONTHS.indexOf($scope.selectedMonth);
                if (currMonth === 11) {
                    nextYear = ($scope.selectedYear + 1);
                } else {
                    nextYear = $scope.selectedYear;
                }
                if (currMonth === 11) {
                    nextMonth = 0;
                } else {
                    nextMonth = (currMonth + 1);
                }
                if (nextYear > $scope.options.maxDate.getFullYear()) {
                    return false;
                }
                if (nextYear === $scope.options.maxDate.getFullYear()) {
                    if (nextMonth > $scope.options.maxDate.getMonth()) {
                        return false;
                    }
                }
                return true;
            };

            calculateWeeks = function () {
                $scope.weeks = [];
                var week = null;
                var daysInCurrentMonth = new Date($scope.selectedYear, MONTHS.indexOf($scope.selectedMonth) + 1, 0).getDate();
                for (var day = 1; day < daysInCurrentMonth + 1; day += 1) {
                    var dayNumber = new Date($scope.selectedYear, MONTHS.indexOf($scope.selectedMonth), day).getDay();
                    week = week || [null, null, null, null, null, null, null];
                    week[dayNumber] = {
                        year: $scope.selectedYear,
                        month: MONTHS.indexOf($scope.selectedMonth),
                        day: day
                    };

                    if (allowedDate(week[dayNumber])) {
                        if ($scope.events) {
                            bindEvent(week[dayNumber]);
                        }
                    } else {
                        week[dayNumber].disabled = true;
                    }

                    if (dayNumber === 6 || day === daysInCurrentMonth) {
                        $scope.weeks.push(week);
                        week = undefined;
                    }
                }
            };

            calculateSelectedDate = function () {
                if ($scope.options.defaultDate) {
                    $scope.options._defaultDate = new Date($scope.options.defaultDate);
                } else {
                    $scope.options._defaultDate = new Date();
                }

                $scope.selectedYear = $scope.options._defaultDate.getFullYear();
                $scope.selectedMonth = MONTHS[$scope.options._defaultDate.getMonth()];
                $scope.selectedDay = $scope.options._defaultDate.getDate();
                calculateWeeks();
            };

            $scope.weekDays = function (size) {
                return WEEKDAYS.map(function (name) {
                    return name.slice(0, size)
                });
            };

            $scope.isDefaultDate = function (date) {
                if (!date) {
                    return;
                }
                return date.year === $scope.options._defaultDate.getFullYear() &&
                    date.month === $scope.options._defaultDate.getMonth() &&
                    date.day === $scope.options._defaultDate.getDate()
            };

            $scope.prevMonth = function () {
                if (!$scope.allowedPrevMonth()) {
                    return;
                }
                var currIndex = MONTHS.indexOf($scope.selectedMonth);
                if (currIndex === 0) {
                    $scope.selectedYear -= 1;
                    $scope.selectedMonth = MONTHS[11];
                } else {
                    $scope.selectedMonth = MONTHS[currIndex - 1];
                }
                calculateWeeks();
            };

            $scope.nextMonth = function () {
                if (!$scope.allowedNextMonth()) {
                    return;
                }
                var currIndex = MONTHS.indexOf($scope.selectedMonth);
                if (currIndex === 11) {
                    $scope.selectedYear += 1;
                    $scope.selectedMonth = MONTHS[0];
                } else {
                    $scope.selectedMonth = MONTHS[currIndex + 1];
                }
                calculateWeeks();
            };

            $scope.$watch('options.defaultDate', function () {
                calculateSelectedDate();
            });

            $scope.$watch('events', function () {
                calculateWeeks();
            });

    }]
    }
});