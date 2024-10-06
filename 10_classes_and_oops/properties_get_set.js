function User(email, password){
  this._email = email;
  this._pasasword = password

  Object.defineProperty(this, 'email', {
    get: function(){
      return this._email.toUpperCase()
    },
    set: function(value){
      this._email = value
    }
  })
    Object.defineProperty(this, 'password', {
      get: function(){
        return this._pasasword.toUpperCase()
      },
      set: function(value){
        this.password = value
    }
  })
}

const hey = new User('test@example.com', 'hey')
console.log(hey.email);