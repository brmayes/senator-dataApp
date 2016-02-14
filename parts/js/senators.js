var app = angular.module('senators', []);

app.controller('SenatorsController', ['$http', function($http) {

    //pulling json data using ajax
    this.stateSeats = [];
    var _this = this;
    this.currentSeat;


    $http.get('/data/senator_data.json')
        .success(function(data) {
            console.log(data);
            _this.stateSeats = data;

        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });

    this.currentSeat = function(incumLast) {

      console.log("hello");

    }

}]);
