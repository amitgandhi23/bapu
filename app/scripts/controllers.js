angular.module('stockMarketApp').controller('AppCtrl',['$scope','Alertservice', function($scope,Alertservice) {
  var self = this;

  self.stocks = [{
    "ticker": "TWTR",
    "name": "Twitter Inc",
    "price": 23,
    "previous": 21,
    "size": "Medium"
  }, {
    "ticker": "GOOG",
    "name": "Google Inc",
    "price": 884,
    "previous": 899,
    "size": "Large"
  }];



  self.getChange = function(stock) {
    return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
  };
  self.getChangeClass = function(stock) {
    return {
      positive: stock.price > stock.previous,
      negative: stock.price <= stock.previous
    }
  };

}]).controller('RegisterCtrl', ['$window','$log', '$rootScope',function($window,$log,$rootScope) {
  var self = this;
  self.register = function() {
    self.message = 'Trying to register with ' + self.username + ' & ' + self.password;
    $window.alert(self.message);
    $log.log(self.messages);
    $rootScope.$broadcast('message',self.username);

  };
}]).controller('ListCtrl',['$window','Bookservice','$scope',function($window,Bookervice,$scope){
var self=this;
  self.message=Bookervice.get;
  }]).controller('AddCtrl',['$window','Bookservice',function($window,Bookservice){
 var self=this;
  self.Addbookdeatils= function () {
        Bookservice.set(self.book);
        self.book = {};
  };
}]);

