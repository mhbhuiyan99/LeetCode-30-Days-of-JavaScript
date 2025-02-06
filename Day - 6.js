/>>> ----  Filter Method
//  Filter Syntex : array.filter(function(currentValue, index, arr))

const ages = [19, 12, 23, 15, 27]
const result = ages.filter(check)

function check(age){
    return age >= 18
}

console.log(ages)
console.log(result)


>>> ----  Solution 

var filter = function(arr, fn) {
    let res = []

    for(let i=0; i<arr.length; i++)
    {
        if(fn(arr[i], i))
            res.push(arr[i])
    }
    return res
};
