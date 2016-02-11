var app = angular.module('myApp', []);

app.controller('BaseController', ['$http', function($http) {

    this.message = "Ready";

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
