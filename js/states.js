var app = angular.module('states', []);

app.controller('StatesController', ['$http', function($http) {

    //pulling json data using ajax
    this.senatorData = [];
    var _this = this;

    $http.get('/data/senator_data.json')
        .success(function(data) {
            console.log(data);
            console.log(this);
            _this.players = data;
        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });

}]);
