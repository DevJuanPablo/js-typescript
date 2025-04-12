interface Usuario {
  nombre: string,
  edad: number,
  ciudad: string,
}

const usuario: Usuario = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
}

console.log(usuario.edad)