class Usuario {
  private name: string
  private email: string
  private age: number

  constructor(name: string, email: string, age: number) {
    this.name = name
    this.email = email
    this.age = age
  }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }
}

const user = new Usuario('Juan Pablo', 'jp@mail.com', 46)
user.setName('Juan Pablo Garcia')

console.log(user.getName())