var app = angular.module('myApp', ['states', 'myFilter']);

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

});

app.filter('stateFilter', function() {
  return function(input, contested, notContested, democratic, republican, independent) {

    var results = [];

    for (var i in input) {
      var match = false;

      if (contested === true && input[i].contested === true) {
        match = true;
      }

      if (notContested === true && input[i].contested === false) {
        match = true;
      }

      if (republican === true && input[i].cur_party == 'Republican') {
        match = true;
      }

      if (democratic === true && input[i].cur_party === 'Democratic') {
        match = true;
      }

      if (independent === true && input[i].cur_party === 'Independent') {
        match = true;
      }

      if (match) results.push(input[i]);

    }

    console.log(results)

    if (contested === undefined && notContested === undefined && republican === undefined && democratic === undefined && independent === undefined) results = input;

    return results;
  };
})
