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


});

app.filter('stateFilter', function() {
  return function(input, contested, democratic, republican, independent, reset) {

    var results = [];

    //search through each of the seats in the input
    for (var i in input) {
      var match = false;

      //drop down option one: contested is true -- tests for possibility of all combinations
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
      } else if (contested == "false" && input[i].contested == false) { //drop down option two: contested is false -- tests for possibility of all combinations
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
      } else if (reset == true) { //trying to reset the filter here
        contested = undefined;
        republican = undefined;
        democratic = undefined;
        independent = undefined;
        results = input;
        match = false;
      }

      if (match) results.push(input[i]); //push matches to variable

    }

    // catch all so the boxes show on load
    if ((contested == undefined) && (republican == undefined || republican == false) && (democratic == undefined || democratic == false) && (independent == undefined || independent == false)) results = input;

    return results; //returning the matches

  };
})

app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});

app.controller('MyCtrl', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
}]);
