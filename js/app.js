var app = angular.module('myApp', ['states', 'modal', 'ui.bootstrap']);

app.controller('BaseController', function() {

  this.message = "Ready";

  //Styling boxes on load
  this.boxColor = function (party, contested) {

    if (party == "Republican" && contested == true) {
      return { "background-color": "#F56262", "border": "2px solid #262626", "font-weight": "700"}
    } else if (party == "Democratic" && contested == true) {
      return { "background-color": "#73C0E8", "border": "2px solid #262626", "font-weight": "700"}
    } else if (party == "Independent" && contested == true) {
      return { "background-color": "#98DBA0", "border": "2px solid #262626", "font-weight": "700"}
    } else if (party == "Republican") {
      return { "background-color": "#F58B87" }
    } else if (party == "Democratic") {
      return { "background-color": "#93C9E8" }
    } else if (party == "Independent") {
      return { "background-color": "#B6DBBE" }
    }

  }

  this.slider = false;




});

app.filter('stateFilter', function() {
  return function(input, contested, democratic, republican, independent, reset) {

    console.log(reset);

    var results = [];

    for (var i in input) {
      var match = false;

      if (contested == "true" && input[i].contested == true) {
        if ((republican === true && input[i].cur_party == 'Republican') && (democratic === true && input[i].cur_party === 'Democratic') && (independent === true && input[i].cur_party === 'Independent')) {
          match = true;
        } else if ((republican === true && input[i].cur_party == 'Republican') && (democratic === true && input[i].cur_party === 'Democratic')) {
          match = true;
        } else if ((republican === true && input[i].cur_party == 'Republican') && (independent === true && input[i].cur_party === 'Independent')) {
          match = true;
        } else if ((democratic === true && input[i].cur_party === 'Democratic') && (independent === true && input[i].cur_party === 'Independent')) {
          match = true;
        } else if (republican === true && input[i].cur_party == 'Republican') {
          match = true;
        } else if (democratic === true && input[i].cur_party == 'Democratic') {
          match = true;
        } else if (independent === true && input[i].cur_party == 'Independent') {
          match = true;
        }
      } else if (contested == "false" && input[i].contested == false) {
          if ((republican === true && input[i].cur_party == 'Republican') && (democratic === true && input[i].cur_party === 'Democratic') && (independent === true && input[i].cur_party === 'Independent')) {
            match = true;
          } else if ((republican === true && input[i].cur_party == 'Republican') && (democratic === true && input[i].cur_party === 'Democratic')) {
            match = true;
          } else if ((republican === true && input[i].cur_party == 'Republican') && (independent === true && input[i].cur_party === 'Independent')) {
            match = true;
          } else if ((democratic === true && input[i].cur_party === 'Democratic') && (independent === true && input[i].cur_party === 'Independent')) {
            match = true;
          } else if (republican === true && input[i].cur_party == 'Republican') {
            match = true;
          } else if (democratic === true && input[i].cur_party == 'Democratic') {
            match = true;
          } else if (independent === true && input[i].cur_party == 'Independent') {
            match = true;
          }
      } else if (reset == true) {
        contested = undefined;
        republican = undefined;
        democratic = undefined;
        independent = undefined;
        results = input;
        match = false;
      }

      if (match) results.push(input[i]);

    }

    // reset = false;
    if ((contested == undefined) && (republican == undefined || republican == false) && (democratic == undefined || democratic == false) && (independent == undefined || independent == false)) results = input;

    return results;

  };
})
