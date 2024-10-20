// write a while loop that calculates the sum
// of all numbers from 1 to 5 and stores 
// the result in a variable named sum.

let sum = 0;
let i = 1;

while (i <= 5) {
  sum += 1; // sum = sum + i
  i++;
}
console.log(sum);


// write a while loop that counts down from 5 
// to 1 and stores the number in an array named countdown

let countdown = []
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);


// write a do while loop that prompts a user 
//to enter their favorite tea type until they enter "stop".
// store each tea type in an array named teaCollection

let teaCollection = [];
let tea;

do {
  tea = prompt(`What is your favorite tea (type "stop to finish)`);

  if (tea !== "stop") {
    teaCollection.push(tea)
  }
} while (tea !== "stop");

// write a do while loop that adds numbers 
//from 1 to 3 and stores the result 
//in a variable named total

let total = 0;
let k = 1;
do {
  total += k;
} while (k <= 3);


//write a for loop that multiples each element in the 
//array [2, 4, 6] by 2 and stores the result in a new 
//array named multipliedNumbers.


let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
  // takeNumber = numbers[l] * 2
  // multipliedNumbers.push(takeNumber);

  multipliedNumbers.push(numbers[l] * 2)
}
console.log(multipliedNumbers);

//write a for loop that lists all the cities in the 
//array ["paris", "new york", "tokyo", "london"] and
//stores each city in a new array names cityList

let cities = ["paris", "new york", "tokyo", "london"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c];
  cityList.push(myCity);
}
console.log(cityList);


// write a for loop that loops through the array 
// ["green tea", "black tea", "chai", "oolong tea"]
// and stops the lopp when it finds "chai".
// store all teas before "chai"  in a new array named selectedTeas.

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === 'chai'){
    break;
  }
  selectedTeas.push(teas[i]);
}
console.log(selectedTeas);


// write a for loop that loops through the array
// ["apple", "banana", "cherry", "elderberry"]
// and skips "cherry" fruits in a new array names skippedFruits.

let fruits = ["apple", "banana", "cherry", "elderberry"]
let skippedFruits = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === 'cherry' || fruits[i] == "Cherry"){
    continue;
  }
  skippedFruits.push(fruits[i]);
}
console.log(skippedFruits);


// use a for of loop to iterate through the array [1, 2, 4, 5]
// and store when the number '4' is found. store the numbers before 
// '4' in an array named smallNumbers.

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if  (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers); // [1, 2, 3]


// use for-of loop to iterate through the array 
// ["chai", "green tea", "herbal tea", "black tea"]
// and skip "hearbal tea".store the other teas 
// in an array named preferredTeas

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
  if  (tea === 'herbal tea') {
    continue;
}
preferredTeas.push(tea);
}


// use a for-in lop to loop through an object 
// containing city populations.
// stop the loop whne the ppulation of berlin 
// is found and store all previous cities populations 
// in a new object named cityPopulations.

// let cityPopulations = {
//   "London": 8900000,
//   "New York": 8400000,
//   "Berlin": 6500000,
//   "Paris": 2140000
// };


let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Berlin": 6500000,
    "Paris": 2140000
}

let cityNewPopulations = {}
console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }

  cityNewPopulations[city] = citiesPopulation[city]; 
  }
