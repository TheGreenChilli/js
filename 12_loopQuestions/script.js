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


/* use  a for-of loop to iterate through an object 
 containing city population below 3 million and 
 store the rest in a new object named largeCities


  let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
  }
*/


let worldCities= {
  "Sydney": 5000000,
  "Tokyo": 9000000,
  "Berlin": 3500000,
  "Paris": 2200000
}

let largeCities = {}

for (const city in worldCities) {
  if  (worldCities[city] >= 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}

/* write a forEach loop that iterates through the 
array ["earl grey", "green tea", "chai", "oolong tea"]
stop the loop when chai is found, and store all previous
tea types in na array named availableTeas */

let  teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let  availableTeas = [];

teaCollection.forEach(function(tea) {
  if (tea == "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);


/*  write a forEach loop that iterates through the array 
["Berlin", "Tokyo", "Sydney", "Paris"]
skip "Sydney"cand store the other cities in a new
array named traveledCities
*/

let myWorldCities =  ["Berlin", "Tokyo", "Sydney", "Paris"];
let  traveledCities = [];

myWorldCities.forEach((city) => {
  if (city == "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);


/* write a for loop that iterates through the array
[2, 5, 7, 9]
skip the value 7 and multiply the rest by 2.
store the results in a new array named doubledNumbers
*/

let myNumbers =  [2, 5, 7, 9];
let  doubledNumbers = [];
for (let i = 0; i < myNumbers.length; i++){
  if (myNumbers[i] == 7) { 
    continue;
  }
  doubledNumbers.push(myNumbers[i] * 2);
}


/* use a forof loop to iterate through the aaray 
["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
and stop the when the length of the current tea name is greater than 10
store the tea iterated over in an array named shortTeas
*/

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}

