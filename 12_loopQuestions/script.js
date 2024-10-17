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