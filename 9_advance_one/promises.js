const promiseOne = new Promise(function(resolve, reject){
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function(){
    console.log('Async task is complete');
    resolve()
  }, 1000)
})

promiseOne.then(function(){
  console.log('Promise consumed');
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Async task is complete');
    resolve()
  }, 1000)
})
.then(function(){
  console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve({username: "sanju", email: "sanju@example.com"
      })
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username: "sanjana", password: "123"})
    } else {
      reject('ERROR: Something went wrong')
    }
  }, 1000)
})

promiseFour
.then((user) => {
   console.log(user);
   return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username: "javascript", password: "123"})
    } else {
      reject('ERROR: JS went wrong')
    }
  }, 1000)
});

 

