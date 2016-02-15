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

              if (this.currentSenator.contested == true) {
                this.currentSeatContested = "contested"
              } else if (this.currentSenator.contested == false) {
                this.currentSeatContested = "not contested"
              }

              if (this.currentSenator.cur_party == "Republican") {
                this.currentSeatParty = "R"
              } else if (this.currentSenator.cur_party == "Democratic") {
                this.currentSeatParty = "D"
              }

              //print stuff here
              this.currentSenatorData += '<h4>' + this.currentSenator.incumbent_first + ' ' + this.currentSenator.incumbent_last + ', ' + this.currentSeatParty + '</h4>';
              this.currentSenatorData += '<div class="row"><div class="col-md-7"><p>No. of Years in Office: ' + this.currentSenator.years_in_off + '</div><div class="col-md-5"><p>Term End: ' + this.currentSenator.term_end + '</div></div>';
              this.currentSenatorData += '<p>' + this.currentSenator.incumbent_first + ' ' + this.currentSenator.incumbent_last + '\'s seat is ' + this.currentSeatContested + '.</p>';

              //check if array of candidates is empty
              if (this.currentSenator.candidates[0] == null ) {

                this.showCandidates = false;

              } else if (this.currentSenator.candidates[0] !== null) {

                //show list if the array of candidates is not empty
                this.showCandidates = true;
                this.candidatesList = this.currentSenator.candidates;

                //print loop of candidates
                for (var k = 0; k < this.candidatesList.length; k++) {
                  this.currentCandidatesData += '<div class="panel panel-default">';
                  this.currentCandidatesData += '<div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse' + k + '">' + this.candidatesList[k].name + '</a></h4></div>';
                  this.currentCandidatesData += '<div id="collapse' + k + '" class="panel-collapse collapse">';
                  this.currentCandidatesData += '<div class="panel-body"><ul><li>Party: ' + this.candidatesList[k].party + '</li></ul></div>'
                  this.currentCandidatesData += '</div></div>'
                }

              }


              //appending variables to div in html
              document.getElementById("selectedIncumDiv").innerHTML = this.currentSenatorData;
              // document.getElementById("selectedCandidDiv").innerHTML = ('<ul>') + this.currentCandidatesData + ('</ul>');
              document.getElementById("selectedCandidDiv").innerHTML = ('<div class="panel-group" id="accordion">') + this.currentCandidatesData + ('</div>');


            }

          }

        }

      }

    }

    //toggle function
    // $("#candidate" + k).click(function(){
    //     $("#panel" + k).slideToggle("slow");
    // });

    // this.candidateToggle = function (nameOfState, incumLast, candidateName) {
    //
    // }

}]);
