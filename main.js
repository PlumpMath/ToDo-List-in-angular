var app = angular.module("appName", []);

// app.factory('namesService', function () {
//   var names = [{name: "Olex", lname: "Kirby"}, {name: "Brendan", lname: "Link"}, {name: "Denyil", lname: "Mario"}, {name: "Gul", lname: "Samsung"}];
//   return { 
//     names: names
//   };
// });


// app.controller('namesCtrl', function($scope, namesService) {
//   $scope.names = namesService.names;
// });



app.factory('todoserv', function () {
  var list =[]
  return {todos : list}
});


app.controller('fuuuck', function ($scope, todoserv) {
  $scope.ben = todoserv.todos;

  $scope.addnew = function () {
    $scope.ben.push($scope.newtodo)
    $scope.newtodo='';
  }

  $scope.removeone = function ($index) {
    $scope.ben.splice($index,1);
  }
})