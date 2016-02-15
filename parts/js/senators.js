var app = angular.module('senators', []);

app.controller('SenatorsController', ['$http', function($http) {

    //pulling json data using ajax
    this.stateSeats = [];
    var _this = this;
    this.currentState;
    this.currentSenator;


    $http.get('/data/senator_data.json')
        .success(function(data) {
            console.log(data);
            _this.stateSeats = data;

        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });

    this.currentSeat = function(nameOfState, incumLast) {

      this.currentState = nameOfState;

      console.log(nameOfState);

      //search through fifty states
      for (var j = 0; j < this.stateSeats.length; j++) {

        //match taken variable to state data
        if (nameOfState == this.stateSeats[j].state) {

          //search through senate seats
          for (var k = 0; k < this.stateSeats[k].senator_seats.length; k++) {

            //match taken variable to senator seats data
            if (incumLast == this.stateSeats[j].senator_seats[k].incumbent_last) {

              //assign current input to senator
              this.currentSenator = this.stateSeats[j].senator_seats[k];

              //do stuff here
              




            }

          }

        }

      }

    }

}]);
