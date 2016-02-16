var app = angular.module('myApp', ['states']);

app.controller('BaseController', function() {

  this.message = "Ready";

  // Sorting function
  // this.filter = function(filterBy) {
  //
  //   if (filterBy == 'contested') {
  //     console.log("contested");
  //     searchTerm = "arizona";
  //   } else if (filterBy == 'party') {
  //     console.log("party");
  //   } else if (filterBy == 'all') {
  //     console.log("all");
  //   }
  //
  //
  // };

});
