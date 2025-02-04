
// array using Constructor

var arr = new Array(2,4,6,8)
console.log(arr)

var em = new Array(3) // array of size 3
console.log(em)
em[0] = 1
em[1] = 3
em[2] = 5
console.log(em)

// array literal 

let ar = [2,3,4]
console.log(ar)

// multiple data type in one array
let ar1 = [2,3,"Mojammel", true, 'A']
console.log(ar1)

// object containing array
let ar2 = [{
    name : 'Mojammel',
    age : 24
}, {
    name : 'Abu Sufiyan',
    age : 12
}]
console.log(ar2)

var num = [43,55,6664]
for(let i = 0; i < num.length; i++)
    console.log("num " + i + " = " + num[i])
    

/*              map
map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.
*/

var ar3 = [1,2,3,4,5,6]
var a = ar3.map(inc)

function inc(n){
    return n+1;
}
/* OR
var a = ar3.map((n) => {
    return n+1;
}) */
console.log(a)
console.log(ar3)

/* Syntax: array.map(function(currentValue, index, arr))

currentValue: It is a required parameter and holds the current element’s value.
index: It is an optional parameter and it holds the index of the current element.
arr: It is an optional parameter and it holds the array.
*/


Solution

var map = function(arr, fn) {

    const newArray = []

    for(let i = 0; i < arr.length; i++)
        newArray[i] = fn(arr[i], i)

    return newArray  
};
