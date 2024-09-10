// Taking parameters in functions

function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("n");
    console.log("a");
  }
  
  //sayMyName();
  
  // function addTwoNumbers(number1, number2) {
  //   console.log(number1 + number2);
  // }
  
  function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
  }
  
  const result = addTwoNumbers(3, 5);
  
  // console.log("Result: ", result);
  
  function loginUserMessage(username = "sanju") {
    if (!username) {
      console.log("Please enter a username");
      return;
    }
    return `${username} just logged in`;
  }
  
  // console.log(loginUserMessage("sanjana"));
  // console.log(loginUserMessage("sanjana"));
  

  function calculateCartPrice(...num1) {     // rest operator or spread operator(...)
    return num1
  
  }
  
  // console.log(calculateCartPrice(200, 400, 500, 2000))
  
  const user = {
    username: "sanju",
    price: 199
  }
  
  function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  }
  
  // handleObject(user)
  handleObject({
    username: "sam",
    price: 299
  })
  
  const myNewArray = [200, 400, 100, 600]
  
  function returnSecondValue(getArray) {
    return getArray[1]
  }
  
  // console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200, 400, 500, 1000])); 
  