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
  return function(input, contested, democratic, republican, independent) {

    console.log(contested);

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
      } else if (contested == "true" && input[i].contested == true) {
        match = true;
      }

      if (match) results.push(input[i]);

    }

    console.log(results)

    if ((contested == undefined) && (republican == undefined || republican == false) && (democratic == undefined || democratic == false) && (independent == undefined || independent == false)) results = input;

    return results;
  };
})


// app.filter('stateFilter', function() {
//   return function(input, contested, notContested, democratic, republican, independent) {
//
//     // console.log(contested)
//     //
//     // console.log(notContested)
//
//     var results = [];
//
//     for (var i in input) {
//       var match = false;
//
//       console.log(input[i].contested);
//
//       if (contested === true && input[i].contested === true) {
//         console.log("true!!")
//         match = true;
//       }
//
//       if (notContested === true && input[i].contested === false) {
//         match = true;
//       }
//
//       if (republican === true && input[i].cur_party === 'Republican') {
//         match = true;
//       }
//
//       if (democratic === true && input[i].cur_party === 'Democratic') {
//         match = true;
//       }
//
//       if (independent === true && input[i].cur_party === 'Independent') {
//         match = true;
//       }
//
//       if (match) results.push(input[i]);
//
//     }
//
//     console.log(results)
//
//     if ((republican == undefined || republican == false) && (democratic == undefined || democratic == false) && (independent == undefined || independent == false)) results = input;
//
//     return results;
//   };
// })


// app.filter('stateFilter', function() {
//   // return function(input, contested, notContested, democratic, republican, independent) {
//
//   return function(input, contested, democratic, republican, independent) {
//
//     var results = [];
//
//     for (var i in input) {
//       var match = false;
//
//       if (contested === true && input[i].contested === true) {
//         match = true;
//         // if ((republican === true && input[i].cur_party == 'Republican') && (democratic === true && input[i].cur_party === 'Democratic') && (independent === true && input[i].cur_party === 'Independent')) {
//         //   match = true;
//         // } else if ((republican === true && input[i].cur_party == 'Republican') && (democratic === true && input[i].cur_party === 'Democratic')) {
//         //   match = true;
//         // } else if ((republican === true && input[i].cur_party == 'Republican') && (independent === true && input[i].cur_party === 'Independent')) {
//         //   match = true;
//         // } else if ((democratic === true && input[i].cur_party === 'Democratic') && (independent === true && input[i].cur_party === 'Independent')) {
//         //   match = true;
//         // } else if (republican === true && input[i].cur_party == 'Republican') {
//         //   match = true;
//         // } else if (democratic === true && input[i].cur_party == 'Democratic') {
//         //   match = true;
//         // } else if (independent === true && input[i].cur_party == 'Independent') {
//         //   match = true;
//         // }
//       }
//
//       //FILTERS FOR CONTESTED
//
//       // if (contested === true && input[i].contested === true) {
//       //     if (republican === true && input[i].cur_party == 'Republican') {
//       //
//       //       console.log("both true")
//       //       match = true;
//       //
//       //     } else {
//       //
//       //       console.log("one true")
//       //       match = true;
//       //
//       //     }
//       // }
//
//
//       // if (contested === true && input[i].contested === true) {
//       //   if (democratic === true && input[i].cur_party == 'Democratic') {
//       //     match = true;
//       //   }
//       // }
//       //
//       // if (contested === true && input[i].contested === true) {
//       //   if (independent === true && input[i].cur_party == 'Independent') {
//       //     match = true;
//       //   }
//       // }
//
//       // //FILTERS FOR UNCONTESTED
//       // if (notContested === true && input[i].contested === false) {
//       //   if (republican === true && input[i].cur_party == 'Republican') {
//       //     match = true;
//       //   }
//       // }
//       //
//       // if (notContested === true && input[i].contested === false) {
//       //   if (democratic === true && input[i].cur_party == 'Democratic') {
//       //     match = true;
//       //   }
//       // }
//       //
//       // if (notContested === true && input[i].contested === false) {
//       //   if (independent === true && input[i].cur_party == 'Independent') {
//       //     match = true;
//       //   }
//       // }
//       //
//       // //ONE FILTER
//       // if (contested === true && input[i].contested === true) {
//       //   match = true;
//       // }
//       //
//       // if (notContested === true && input[i].contested === false) {
//       //   match = true;
//       // }
//
//       // if (republican === true && input[i].cur_party == 'Republican') {
//       //   match = true;
//       // }
//       //
//       // if (democratic === true && input[i].cur_party === 'Democratic') {
//       //   match = true;
//       // }
//       //
//       // if (independent === true && input[i].cur_party === 'Independent') {
//       //   match = true;
//       // }
//
//       if (match) results.push(input[i]);
//
//     }
//
//
//     // console.log(results)
//
//     // if (contested === undefined && notContested === undefined && republican === undefined && democratic === undefined && independent === undefined) results = input;
//     // if (republican == false && democratic == false && independent == false) results = input;
//     if ((republican == undefined || republican == false) && (democratic == undefined || democratic == false) && (independent == undefined || independent == false)) results = input;
//
//
//
//     return results;
//   };
// })
