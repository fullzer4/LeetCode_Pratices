/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var run = 0
    return function() {
       if (run === 0) {
          run++
          return n
       }
       n++
       return n
    };
};

 
const counter = createCounter(10)
counter() // 10
counter() // 11
console.log(counter()) // 12
