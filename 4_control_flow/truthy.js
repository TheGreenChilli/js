// control flow code files

const userEmail = []

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}


// ********* To detect array is empty or not ***********

if (userEmail.length === 0) {
  console.log("Array is empty");
}

// ********* To detect object is empty or not ***********

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
} 


// Nullish Coslescing Operator (??): null undefined

let val1;
// val1 = 5  ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")