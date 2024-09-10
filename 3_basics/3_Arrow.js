// scope this and arrow 

const user = {
    username: "sanjana",
    price: 999,


    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);            // this talks about current value
    }
}

// user.welcomeMessage()
// user.username = "sanju"
// user.welcomeMessage()   
// console.log(this);


// function chai() {
//     let username = "sanjana"
//     console.log(this.username);
// }

// chai()


// const chai = function() {
//     let username = "sanjana"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "sanjana"
    console.log(this);
}


// chai()


// ****************** BASIC ARROW FUNCTION ***************

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// ******************** IMPLICIT RETURN *********************

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "sanjana"})   // object return

console.log(addTwo(3, 4))


const myArray = [1, 2, 3, 4, 5]

myArray.forEach()