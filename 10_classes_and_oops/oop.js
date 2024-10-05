// object literal

const user = {
     username: "sanju",
     loginCount: 8,
     signedIn: true,

     getUserDetails: function(){
     //console.log("Got user details form database");
     // console.log(`Username: ${this.username}`);
     console.log(this);
     }

}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

function User(username, loginCount, isLoggedIn){
     this.username = username;
     this.loginCount = loginCount;
     this.isLoggedIn = isLoggedIn;

     this.greeting = function(){
          console.log(`Hello ${this.username}`);
     }

     return this
}

const userOne =  new User("sanju", 8, true);
const userTwo =  new User("sanvi", 12, false);
console.log(userOne.constructor);
//console.log(userTwo);