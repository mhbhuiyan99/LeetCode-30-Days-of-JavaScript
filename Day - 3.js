
>>> ----- Concept ----- <<<

// Object is a collection of key value pairs

// Object Literals
var obj = {
    // Key : Value
    name : "Mojammel",
    age : 18,
    
    greet(name){ // no need to write 'function' keyword [function within object]
        return "Good Morning " + name
    }
}

console.log(obj)
console.log(obj.greet("Mojammel"));

// Objects within function

function calc(val){
    const obj = { 
        add(val_1){
            var a = val + val_1
            return a
        },
        sub(val_2){
            var b = val - val_2
            return b
        }
    }
    return obj
}
console.log(calc(5).add(2))
console.log(calc(5).sub(2))

// return Multiple inner function

function calc(val){
  
    function add(val_1){
            var a = val + val_1
            return a
        }
    function sub(val_2){
            var b = val - val_2
            return b
        }
    // need obj to return
    return obj = { 
        add, sub
    }
    /* OR
    return {
        add, sum
    }
    */
}
console.log(calc(5).add(7))
console.log(calc(5).sub(7))


/*
    '===' VS '=='
'===' Strictly equal, checks the data type also
for example : 
 5 === '5' : false
 5 == '5'  : ture
*/

>>> ----- Day - 3 solution ----- <<<

var expect = function(val) {

    return {
        toBe(val1){
            if(val === val1)
                return true
            else throw new Error ("Not Equal")
        },
        notToBe(val2){
            if(val !== val2)
                return true
            else throw new Error ("Equal")
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

