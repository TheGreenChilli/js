// control flow code files


// if

// single assignment(=) is used for assignment operator, not for comparison

// const isUserLoggedIn = true
// const temperature = 41

// if ( temperature === 41){
//     console.log("less than 50");
// } else { 
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// ***************** SHORTHAND NOTATION ************

const balance = 1000

// if (balance > 500) console.log("test");      // implicit scope 

// if (balance > 500) console.log("test"), console.log("test2");   // Don't code like this


// if (balance > 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFRomEmail = true

if (userLoggedIn && debitcard &&  2==2) {
    console.log("Allowed to buy course");
}

if (loggedInFromGoogle || loggedInFRomEmail) {
    console.log("User logged in");
}