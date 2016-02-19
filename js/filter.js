var app = angular.module('myFilter', []);

// app.controller('FilterController', function() {
//
//
//
// });


app.controller('myFilter', ['$scope', '$http', function ($scope, $http) {

  //set an empty object
  $scope.wines = [];

    var _this = $scope;

    //bring in json data
    $http.get('/data/wines.json')
        .success(function(data) {
            console.log(data);
            _this.wines = data;

        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });

    //start new object for filter
    $scope.filter = {};

    //get options for filter
    $scope.getOptionsFor = function (propName) {
        return ($scope.wines || []).map(function (w) {
            return w[propName];
        }).filter(function (w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };


    //USE TO MATCH AND RATHER THAN OR
    $scope.filterByProperties = function (wine) {
        // Use this snippet for matching with AND
        var matchesAND = true;

        //loop through filter properties
        for (var prop in $scope.filter) {

            if (noSubFilter($scope.filter[prop])) continue;

            if (!$scope.filter[prop][wine[prop]]) {
                matchesAND = false;
                break;
            }
        }
        return matchesAND;
/**/
/*
        // Use this snippet for matching with OR
        var matchesOR = true;
        for (var prop in $scope.filter) {
            if (noSubFilter($scope.filter[prop])) continue;
            if (!$scope.filter[prop][wine[prop]]) {
                matchesOR = false;
            } else {
                matchesOR = true;
                break;
            }
        }
        return matchesOR;
/**/
    };

    function noSubFilter(subFilterObj) {
        for (var key in subFilterObj) {
            if (subFilterObj[key]) return false;
        }
        return true;
    }
}]);

app.filter('capitalizeFirst', function () {
    return function (str) {
        str = str || '';
        return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
    };
});
