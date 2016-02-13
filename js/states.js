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

      //search through fifty states
      for (var i = 0; i < this.stateSeats.length; i++) {

        //match taken variable to state data
        if (stateName == this.stateSeats[i].state) {

          this.currentState = this.stateSeats[i];
          this.seatButtons = '<h3 class="stateh3">State: ' + this.currentState.state + '</h3>';
          this.count = 0;

          for (var x = 0; x <= 1; x++) {
            this.seatButtons += '<div class="senatorBox col-md-6 col-xs-6" ng-click="this.count = this.count + 1">';
            this.seatButtons += '<p>Seat ' + (x + 1) + "</p>";
            this.seatButtons += this.currentState.senator_seats[x].contested;
            this.seatButtons += '</div>';

            // return this.count;

            // this.seatInformation = function(){
            //   console.log("reached");
            // }
          }
          console.log(this.count);




          document.getElementById("seatButtonsDiv").innerHTML = this.seatButtons;
        }
      }
    }

}]);
