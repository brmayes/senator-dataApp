var app = angular.module('states', []);

app.controller('StatesController', ['$http', function($http) {

    //pulling json data using ajax
    this.stateSeats = [];
    var _this = this;


    $http.get('/data/senator_data.json')
        .success(function(data) {
            console.log(data);
            _this.stateSeats = data;

        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });

    this.states = function(stateName) {
      console.log("clicked");

      for (var i = 0; i < this.stateSeats.length; i++) {

        if (stateName == this.stateSeats[i].state) {
          console.log(this.stateSeats[i]);
        }

      }

      // for (var i = 0; i < this.states.length; i++) {
      //   if (stateName == this.states[i].last) {
      //     this.currentState = this.states[i];
      //     alert("hello");
      //   }
      // }
    }

}]);
