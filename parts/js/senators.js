var app = angular.module('senators', []);

app.controller('SenatorsController', ['$http', function($http) {

    //pulling json data using ajax
    this.stateSeats = [];
    var _this = this;
    this.currentState;
    this.currentSenator;
    this.showCandidates = false;


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

              this.currentSenatorData = "";
              this.currentSeatContested = "";
              this.currentSeatParty = "";
              this.currentCandidatesData = "";

              // "img": "imgs/senators/shelby_richard.jpg",
              // "years_in_off": 29,

              if (this.currentSenator.contested == true) {
                this.currentSeatContested = "Yes"
              } else if (this.currentSenator.contested == false) {
                this.currentSeatContested = "No"
              }

              if (this.currentSenator.cur_party == "Republican") {
                this.currentSeatParty = "R"
              } else if (this.currentSenator.cur_party == "Democratic") {
                this.currentSeatParty = "D"
              }

              //print stuff here
              this.currentSenatorData += '<h4>' + this.currentSenator.incumbent_first + ' ' + this.currentSenator.incumbent_last + ', ' + this.currentSeatParty + '</h4>';
              this.currentSenatorData += '<div class="row"><div class="col-md-6"><p>Contested: ' + this.currentSeatContested + '</div><div class="col-md-6"><p>Term End: ' + this.currentSenator.term_end + '</div></div>';

              if (this.currentSenator.candidates[0] != null ) {
                this.showCandidates = true;
                this.candidatesList = this.currentSenator.candidates;

                for (var k = 0; k < this.currentSenator.candidates.length; k++) {
                  this.currentCandidatesData += '<li>' + this.candidatesList[k].name + '</li>';
                }

              } else {
                console.log("no candidates")
              }



              //this.currentCandidatesData += '';

              document.getElementById("selectedIncumDiv").innerHTML = this.currentSenatorData;
              document.getElementById("selectedCandidDiv").innerHTML = ('<ul>') + this.currentCandidatesData + ('</ul>');

            }

          }

        }

      }

    }

}]);
