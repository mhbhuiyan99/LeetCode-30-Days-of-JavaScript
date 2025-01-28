console.log("Hello Hi")

// normal function
function f(a, b)
{
	const sum = a + b
  return sum
}
console.log(f(2,4))

// Anonymous function
let f2 = function(a, b)
{
	const sum = a + b
  return sum
}
console.log(f2(3,4))

// Let for local <<>> Var for global

// Immediate invoke
let f3 = function(a,b)
{
	const sum = a + b;
  return sum;
}(5,4)

console.log(f3)

// Arrow function
let f4 = (a,b) => {
	const sum = a + b;
  return sum;
} 
console.log(f4(7,5))

console.log("TaTa ByeBye")

// function within function

















