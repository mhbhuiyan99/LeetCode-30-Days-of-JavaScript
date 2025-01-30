
Closure : https://leetcode.com/problems/counter/editorial

var createCounter = function(n) {
    let cnt = n;
    return function() {
        return cnt++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
