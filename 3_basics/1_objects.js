// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "sanjana",
  "full name": "sanjana Dangi",
  [mySym]: "mykey1",
  age: 18,
  location: "ramgarh",
  email: "san@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full email"]);
// console.log(JsUser[mySym]);

JsUser.email = "san@chatgpt.com";
//Object.freeze(JsUser);
JsUser.email = "san@google.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
