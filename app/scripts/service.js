angular.module('stockMarketApp')
.factory('Alertservice',[function(){
        var message;
        return {
            get : function(){
                return message;
            },
            set : function(value){
                message=value;
            }
        }

    }]);