(function(){
  'use strict';
angular.module('wikiviewer',[])
  .controller('WikiController',
             ['$scope', '$http', WikiController]); 
  function WikiController($scope, $http){
    $scope.searchHeader = false;
    $scope.data = [];
    // Build API Request and send to Wikipedia
    $scope.searchWiki = function(search){
        var apiKey = 'https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&enintro=&list=search&utf8=1&srsearch=' + encodeURIComponent(search);
      $http.get(apiKey).then(function(response){
          $scope.data = response.data.query.search;
          $scope.searchHeader = true;
        // Create and add URL link to each object
          $scope.data.forEach(function(result){
                 result["URL"] = 'https://en.wikipedia.org/wiki/' + encodeURIComponent(result.title);
        });
        console.log($scope.data);
      });
    };
  }
}());