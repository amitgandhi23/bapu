angular.module('stockMarketApp')
    .service('Bookservice',[function(){
        var self=this;
        var books=[
            { name:'test',
                author:'bcs'}
        ];
        var message;
            self.get = function(){
                return books;
            };
            self.set = function(value){
                books.push(value);
            };

        self.Remove=function(index){
            $window.alert('Deleted');
            self.books.splice(index, 1);
        }

    }]);