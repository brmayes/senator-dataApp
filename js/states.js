var app = angular.module('states', []);

app.controller('StatesController', ['$http', function($http) {

    //pulling json data using ajax
    this.stateSeats = [];
    var _this = this;
    this.currentState;


    $http.get('/data/senator_data.json')
        .success(function(data) {
            console.log(data);
            _this.stateSeats = data;

        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });

    this.states = function(stateName) {
      // console.log("clicked");

      for (var i = 0; i < this.stateSeats.length; i++) {

        if (stateName == this.stateSeats[i].state) {
          // console.log(this.stateSeats[i].state);
          this.currentState = this.stateSeats[i];
          this.seatButtons = "";

          for (var x = 0; x <= 1; x++) {
            this.seatButtons += '<div class="senatorBox col-md-6 col-xs-6">';
            this.seatButtons += '<p>Seat ' + x + "</p>";
            this.seatButtons += this.currentState.senator_seats[x].contested;


            this.seatButtons += '</div>';

          }

          document.getElementById("seatButtonsDiv").innerHTML = this.seatButtons;

        }

      }


    }

}]);
