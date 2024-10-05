class User {
  constructor(username){
      this.username = username
  }

  logMe(){
      console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User{
  constructor(username, email, password){
      super(username)
      this.email = email
      this.password = password
  }

  addCourse(){
      console.log(`A new course was added by ${this.username}`);
  }
}

const sneha = new Teacher("sneha", "sneha@teacher.com", "123")
 
sneha.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(sneha instanceof User);