interface Base {
  id: string,
  address?: string,
  email?: string,
}

interface Usuario extends Base{
  nombre: string,
  edad: number,
  ciudad: string,
}

interface Persona extends Base{
  phone: number
}

const usuario: Usuario = {
  id: "123",
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
}

const persona: Persona = {
  id: "456",
  address: "Calle Falsa 123",
  phone: 123456789,
  email: "miemail@mail.com"
}

console.log(usuario.edad)