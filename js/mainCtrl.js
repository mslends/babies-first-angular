angular.module("friendsList").controller("mainCtrl", function($scope) {


$scope.friends = ["jon", "mike", "bob", "sally"];


$scope.addFriend = function() {
  console.log("Clicked!");
  $scope.newFriend;
  $scope.friends.push($scope.newFriend);
  console.log($scope.friends);
};

});
