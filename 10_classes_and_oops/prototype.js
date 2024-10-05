// let myName = "sanjana     "
// let mychannel = "art     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sanjana = function(){
    console.log(`sanjana is present in all objects`);
}

Array.prototype.heySanjana = function(){
    console.log(`Sanjana says hello`);
}

// heroPower.sanjana()
// myHeros.sanjana()
// myHeros.heySanjana()
// heroPower.heySanjana()

// inheritance

const User = {
    name: "sanju",
    email: "sanju@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "sanvi     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sanjana".trueLength()
"iceCube".trueLength()