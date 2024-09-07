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
  console.log("object is empty")
}