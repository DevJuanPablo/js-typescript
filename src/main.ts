const Ping: any = ''

interface User {
  name: string
  age: number
}

const user: User = {
  name: 'John Doe',
  age: 30
}

interface Ping<T, U> {
  host: T
  location: U
}

const Network: Ping<boolean, User> = {
  host: true,
  location: user
}