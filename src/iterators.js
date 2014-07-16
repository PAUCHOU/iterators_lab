
var Iterators = (function() {
  var api = {
  //   max: function(numList){
  //     var max = -Infinity;
  //     for (var i = 0; i < numList.length; i++) {
  //       if ( numList[i] > max ) {
  //         max = numList[i];
  //       }
  //     };
  //     return max;
  //   }
  // };
    //     min: function(numList){
    //       var min = Infinity;
    //       for ( var i = 0; i < numList.length; i++){
    //         if (numList[i] < min){
    //         min = numList[i];
    //        }
    //       };
    //     return min;
    //     }
    // };

        //   each: fucntion each(array){
        //    var each =  [];
        //     for (var i = 0; i < numList.length; i++){
        //       return numList[i]*2; 
        //    }
        //   };
        //   return each;
        // }
        //    filter: function filter(array, test) {
        //     var passed = [];
        //     for (var i = 0; i < array.length; i++) {
        //       if (array[i])%2 = 0){
        //         passed = array[i];
        //       }          
        //   return passed;
        //   }
        // };    
        //   return api;
        // })();

map: function map(array, transform){
var myNumbers = [ -1, 2, -3, 4, -5, 6];
var square = function(num) {
    return num * num;
};
var sqrRoot = function(num) {
    return Math.sqrt(num);
};
};

var bothNumbers = map.square.sqrRoot(myNumbers,square,sqrRoot);

module.exports = Iterators;









