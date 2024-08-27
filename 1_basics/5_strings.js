const name = "sanjana";
const repoCount = 50;

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // String Interpolation


const gameName = new String("sanj-anak");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  sanjana  ";
console.log(newStringOne);
console.log(newString.trim());

const url = "https://sanjana.com/sanjana%20dangi";

console.log(url.replace("%20", "-"));

console.log(url.includes('dangi'))

console.log(gameName.split('-'));