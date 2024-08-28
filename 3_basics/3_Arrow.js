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




