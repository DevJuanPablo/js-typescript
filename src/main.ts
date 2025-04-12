function Decorator(target: any) {
  target.prototype.mail = 'jhondoe@mail.com'
}

interface User {
  name: string
  age: number
  email: string
}

@Decorator
class User {
  name: string
  age: number

  constructor() {
    this.name = ''
    this.age = 0
  }
}

const user = new User()
console.log(user)