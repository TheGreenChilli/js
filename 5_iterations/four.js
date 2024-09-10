// loops discussion

const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: 'swift by apple'
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['javascript', 'C++', 'ruby', 'python', 'swift by apple']

for (const key in programming) {
 // console.log(programming[key]);
}

// const map = new Map() 
// map.set('IN', "India") 
// map.set('US', "United States")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//   console.log(key);
// }

