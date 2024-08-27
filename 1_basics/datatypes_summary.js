// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const marks = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 344567856678532456n;

//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["sahid", "vicky", "arya"];
let myObj = {
  name: "Sahid",
  age: 22,
};
const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof myFunction);

//*********************************

// Stack (Primitive), Heap (Non-Primitive)

let myYotubename = "sanjanadangi";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYotubename);
console.log(anothername);

let usreOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = usreOne;

userTwo.email = "sanjana@google.com";

console.log(usreOne.email);
console.log(userTwo.email);
