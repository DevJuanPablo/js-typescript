type AUTENTICADO = {
  jwt: string
  userId: string
  role: string
  level?: number
}

const estaAutenticado = (jwt: string, userId: string = 'admin', role: string = 'customer', level?: number): AUTENTICADO => {
  return {
    userId,
    jwt,
    role,
    level: level ?? 10
  }
}

const respuesta = estaAutenticado('bnbmw688')
console.log(respuesta)

const respuesta2 = estaAutenticado('bnkia360 ', 'chavo', 'admin')
console.log(respuesta2) 

const respuesta3 = estaAutenticado('bnfrri124', 'adrian')
console.log(respuesta3)