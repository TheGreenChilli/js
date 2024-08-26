const accountId = 144553
let accountEmail = "sanjana@google.com"
var accountPassword = "12345"
accountCity = "Ranchi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sanju@google.com"
accountPassword = "24739987"
accountCity = "Banglore"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
