//var app = angular.module("mainApp");
//
//
//app.service("BeenPlacesService", function ($http) {
//
//    var baseUrl = "http://localhost:8000/api/been-places/";
//    this.beenPlacesArray = [];
//    var self = this;
//
//    this.getBeenPlaces = function () {
//        return $http.get(baseUrl)
//            .then(function (response) {
//                self.beenPlacesArray = response.data;
//            });
//
//    };
//
//    this.postBeenPlaces = function (beenPlace) {
//        return $http.post(baseUrl, beenPlace)
//            .then(function (response) {
//                self.beenPlacesArray.push(response.data);
//            });
//    };
//});





{
    "title": "spaghetti",
    "prepTime": 30,
    "ingredients": ["noodles", "sauce"],
    "directions": "Boil the noodles in a pot till soft, warm the sauce in a pan, mix together and enjoy",
    "difficulty": 1,
    "foodImg": "https://lasrecetasdemanu.files.wordpress.com/2014/02/spaghetti-bolognesa.jpg"
}
