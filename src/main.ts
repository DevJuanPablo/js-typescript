type AUTENTICADO = {
  jwt: string
  userId: string
  role: string
  level?: number
}

const estaAutenticado = (jwt: string, userId: string, role: string, level?: number): AUTENTICADO => {
  return {
    userId,
    jwt,
    role,
    level: level ?? 10
  }
}

const respuesta = estaAutenticado('chavo123', 'chavo', 'admin')
console.log(respuesta)

const respuesta2 = estaAutenticado('chavo123', 'chavo', 'admin', 0)
console.log(respuesta2) 