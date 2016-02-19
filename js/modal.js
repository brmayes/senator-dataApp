var app = angular.module('modal', []);

app.controller('ModalController', function($scope, $timeout, $modal, $log) {

  $scope.customers = [
      {
      name: 'Ricky',
      details: 'Some Details',
      },
      {
      name: 'Dicky',
      details: 'Some Dicky Details',
      },
      {
      name: 'Nicky',
      details: 'Some Nicky Details',
      }
  ];

  // MODAL WINDOW
  $scope.open = function () {

      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
           });

  };

});
