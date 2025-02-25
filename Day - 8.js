function add(a, b){
    return a + b
}

function mulTwo(val){
    return val*2
}

function square(val){
    return val*val
}

function addSquare(a,b){
    return square(add(a,b))
}

console.log(addSquare(2,6))

--------------------------------
function compose(f1, f2){
    return function(a,b){
        return f2(f1(a,b))
    }
}
// in Modern JS
const compose = (f1,f2) => (a,b) => f2(f1(a,b))

//For 3 function : 
//const compose1 = (f1,f2,f3) => (a,b) => f3(f2(f1(a,b)))

const result = compose(add, mulTwo)
console.log(result(2,3))

// Multiple function :
function composeAll(...funs){
    return function(...values){
        return funs.reduce((val, fn) => fn(val), values)
    }
}
// in Modern JS
const composeAll = (...funs) =>
                   (...values) =>
                   funs.reduce((val, fn) => fn(val), values)
                  
----------------- Solution 

var compose = function(functions) {
    
    return function(x) {
        
        for(let i = functions.length - 1; i >= 0; i--){
            x = functions[i](x)
        }
        return x;
    }
};








