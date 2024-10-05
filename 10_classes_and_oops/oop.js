const user = {
     username: "sanju",
     loginCount: 8,
     signedIn: true,

     getUserDetails: function(){
     console.log("Got user details form database");
     }

}

console.log(user.username);
console.log(user.getUserDetails());