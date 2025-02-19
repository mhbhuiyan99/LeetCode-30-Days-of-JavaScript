Syntax : array.reduce(function(total, currentValue, currentIndex, arr))

>>> ---------- Example

let arr = [1,2,3,4,5]
let sum = arr.reduce(addNum)

function addNum(a,b){
    console.log(a,'',b)
    console.log()

    return a + b
}
console.log(sum)


>>> ---------- Solution

var reduce = function(nums, fn, init) {

    for(let i=0; i<nums.length; i++)
    {
        init = fn(init, nums[i])
    }
    return init
};
